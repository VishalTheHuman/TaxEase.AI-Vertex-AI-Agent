# import subprocess

# def installDependencies(packages):
#     for package in packages:
#         try:
#             subprocess.run(["pip", "install", package], check=True)
#         except subprocess.CalledProcessError as e:
#             print(f"Failed to install package '{package}': {e}")

# packages = ["google-cloud", "google-api-core", "uvicorn", "fastapi", "typing", "vertexai","google-cloud-discoveryengine"]
# installDependencies(packages)

from typing import List
from google.api_core.client_options import ClientOptions
from google.cloud import discoveryengine_v1 as discoveryengine
from vertexai.preview.generative_models import (
    GenerativeModel,
    GenerationResponse,
)
import vertexai
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncio

PROJECT_ID = "taxeaseai"
REGION = "us-central1"

MEMORY = []

vertexai.init(project=PROJECT_ID, location=REGION)

model = GenerativeModel("gemini-1.5-pro-001")
model = model.start_chat()
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

INSTRUCTION = """
GOAL:
You are a Tax Return Filling Assistant  named TaxEase.AI developed by CTRL + ALT + DEV Team. Your goal is to answer the user questions that the users may encounter while filling taxes. You're equipped with all the forms and all the instructions necessary for filing. 

Follow the instructions to answer all the Queries given : 

    - If the answer is available in the context window, Answer it using the data from the context window else answer it yourself. But stick to instructions. 
    - Don't mention about the existance of context window. 
    - Give answer in plain text form. 
    - Explain technical terms: If the user uses tax jargon or seems confused by a term, offer clear and concise definitions.
    - Try to present the data in the visually appealing format.
    - Provide examples: When explaining tax concepts or instructions, use relatable, real-life examples to improve understanding.
    - Offer multiple ways to ask the same question: Acknowledge that there are many ways to phrase a question and guide users towards clearer phrasing if needed. Example: "I understand you're asking about deductions for charitable donations. To give you the most accurate information, could you tell me what kind of donation you made?"
    - Ask about the user's specific tax situation: To provide the most relevant information, inquire about factors like filing status (single, married, etc.), dependents, income type, and any unique circumstances that might apply.
    - Break down complex information: If a tax form or concept is lengthy, present the information in smaller, digestible chunks.
    - Suggest related topics: After answering a question, anticipate potential follow-up questions and proactively offer guidance on related areas. Example: "Now that you know about deducting student loan interest, you might also be interested in deductions for tuition and fees.
    - Maintain a friendly and approachable tone: Use encouraging language and emojis (appropriately) to create a positive and supportive user experience.
    - Be mindful of user privacy: Never ask for sensitive personal information like Social Security numbers, bank account details, or exact income figures.
    - Stay updated: Inform users that tax laws and regulations are subject to change, and encourage them to always refer to the most up-to-date information on the IRS website.
    - Offer to search for specific forms or publications: If a user mentions a form or publication number, proactively use your tools to retrieve and present that information.
    - Explain how to use the tools: If a user is unfamiliar with the provided tools, guide them on how to effectively search for information and navigate the resources.
    - If you don't know the answer, respond with "I don't know."
"""

model.send_message(INSTRUCTION)

def retrieveDocumentData(
    search_query: str,
    project_id="taxeaseai",
    location="us",
    engine_id="696ce1c2-d49f-413a-af3e-beb67e3bdbe5"
):
    client_options = (
        ClientOptions(api_endpoint=f"{location}-discoveryengine.googleapis.com")
        if location != "global"
        else None
    )

    client = discoveryengine.SearchServiceClient(client_options=client_options)

    serving_config = f"projects/{project_id}/locations/{location}/collections/default_collection/engines/{engine_id}/servingConfigs/default_config"

    content_search_spec = discoveryengine.SearchRequest.ContentSearchSpec(
        snippet_spec=discoveryengine.SearchRequest.ContentSearchSpec.SnippetSpec(
            return_snippet=True
        ),
        summary_spec=discoveryengine.SearchRequest.ContentSearchSpec.SummarySpec(
            summary_result_count=5,
            include_citations=True,
            ignore_adversarial_query=True,
            ignore_non_summary_seeking_query=True,
            model_prompt_spec=discoveryengine.SearchRequest.ContentSearchSpec.SummarySpec.ModelPromptSpec(
                preamble=""
            ),
            model_spec=discoveryengine.SearchRequest.ContentSearchSpec.SummarySpec.ModelSpec(
                version="stable",
            ),
        ),
    )

    request = discoveryengine.SearchRequest(
        serving_config=serving_config,
        query=search_query,
        page_size=3,
        content_search_spec=content_search_spec,
        query_expansion_spec=discoveryengine.SearchRequest.QueryExpansionSpec(
            condition=discoveryengine.SearchRequest.QueryExpansionSpec.Condition.AUTO,
        ),
        spell_correction_spec=discoveryengine.SearchRequest.SpellCorrectionSpec(
            mode=discoveryengine.SearchRequest.SpellCorrectionSpec.Mode.AUTO
        ),
    )

    response = client.search(request)
    context = ""
    for x in (response._response.results):
        for y in x.document.derived_struct_data.get("chunks"):
            context += y.get("content")

    return context

@app.get("/query/{query}")
async def processQuery(query: str):
    global MEMORY
    if len(MEMORY) > 4:
        MEMORY.pop(0)

    context_window =  retrieveDocumentData(query)
    PROMPT = f"""
    MEMORY : {MEMORY}
    QUERY : {query}\n

    CONTEXT_WINDOW :{context_window}"""

    response = model.send_message(PROMPT).candidates[0].content.parts[0].text
    MEMORY.append(f"""
    USER : {query}
    ANSWER : {response}
    """)
    return {
        "response": response
    }
