# **TaxEase.AI : Vertex AI Agent 🤖**

![TaxEase.AI Banner](assets/banner.png)

## **Description 📃**

**TaxEase.AI** is a user-friendly AI assistant designed to demystify and simplify US tax filing, a system that has become needlessly convoluted and stressful for millions of Americans. 

Built on the powerful Vertex AI platform, TaxEase.AI utilizes a comprehensive knowledge base within Datastore, containing up-to-date tax forms, instructions, FAQs, and more. Seamless communication via OpenAPI and a sophisticated Retrieval Augmented Generation (RAG) approach ensure that TaxEase.AI provides accurate, personalized, and easy-to-understand guidance throughout the entire tax filing process. 

## **Contributors 🦖**
<table style="width:100%; text-align:center;border: none;">
    <tr>
        <td style="width:33.33%;"><img src="https://github.com/VishalTheHuman.png/" style="width:100%; height:auto;"></td>
        <td style="width:33.33%;"><img src="https://github.com/amri-tah.png/" style="width:100%; height:auto;"></td>
        <td style="width:33.33%;"><img src="https://github.com/SaranDharshanSP.png/" style="width:120%; height:auto;"></td>
    </tr>
    <tr>
        <td><a href="https://github.com/VishalTheHuman" style="display:block; margin:auto;">@VishalTheHuman</a></td>
        <td><a href="https://github.com/amri-tah" style="display:block; margin:auto;">@amri-tah</a></td>
        <td><a href="https://github.com/SaranDharshanSP" style="display:block; margin:auto;">@SaranDharshanSP</a></td>
    </tr>
    <tr>
        <td><b style="display:block; margin:auto;">Vishal S</b></td>
        <td><b style="display:block; margin:auto;">Amritha Nandini</b></td>
        <td><b style="display:block; margin:auto;">Saran Dharshan S P</b></td>
    </tr>
</table>

## **Inspiration ✨**

Our inspiration for **TaxEase.AI** stemmed from a deep empathy for the millions of Americans who dread the annual ritual of tax filing.  Emmy-winning journalist Johnny Harris eloquently captured this sentiment in his video essay, 
 "[*Why Americans Pay to Do Their Taxes ?* ](https://www.youtube.com/watch?v=ZhV4Z76mXrI)". Harris exposed the absurdity of a system that forces its citizens to navigate a labyrinth of complex forms and expensive software, all while simpler, government-run solutions exist in numerous other countries. 

We've all felt the frustration – the hours wasted deciphering cryptic forms, the fear of missing a crucial deduction, the sinking feeling when you realize you need to shell out for expensive tax software. It's a system seemingly designed to confuse and intimidate, turning a simple civic duty into a stressful, time-consuming ordeal. What's even more infuriating is that it doesn't have to be this way.  As Harris pointed out, this stark contrast highlights the absurdity of the American system, where powerful corporations profit from a process that should be a simple service for all citizens. We were tired of seeing hardworking Americans taken advantage of, their time and money siphoned away by a system rigged against them. We knew there had to be a better way. 

## **What it does  💡**

TaxEase.AI is a user-friendly AI assistant designed to demystify and simplify US tax filing.  Here's how it works:

* **Direct Form Filling:** Already know the forms you need? TaxEase.AI acts as your smart assistant, guiding you through the process and answering your questions in real-time. 
* **Interactive Guidance:**  Not sure where to start? TaxEase.AI  engages in a friendly Q&A to understand your unique situation. It then recommends relevant forms, identifies potential deductions, and helps you avoid costly errors. 

## **How we built it  🛠️**

* **Vertex AI:**  Our entire application is built on the powerful Vertex AI platform, using its agent as the brain of our system to understand requests and manage interactions.
* **Datastore:** We've created a comprehensive knowledge base within Datastore, storing all the latest tax forms, instructions, FAQs, and more. This ensures TaxEase.AI always has the most up-to-date information.
* **OpenAPI:** Seamless communication is key! We integrated OpenAPI to allow our AI agent to smoothly retrieve and process data from Datastore.
* **RAG Approach:** We implemented a Retrieval Augmented Generation (RAG) approach. This means TaxEase.AI doesn't just spit out generic answers; it retrieves relevant information and crafts personalized responses just for you. 

## **Challenges we ran into  🚧**

* **Accuracy & Compliance:**  Taxes are serious business! We worked hard to build in robust validation checks and ensure our system adheres to IRS guidelines.
* **Tax Code Complexity:** Let's face it, the US tax code is a beast.  Building an AI system capable of understanding and navigating its intricacies was no easy feat!
* **User-Friendliness:**  Taxes are confusing enough without a clunky interface.  We prioritized designing a clean, intuitive, and approachable user experience for everyone. 

## **Accomplishments that we're proud of 🎉**

* **Functional AI Tax Assistant:** We built a working prototype that showcases the power of AI to simplify taxes.
* **User-Centric Design:**  TaxEase.AI is designed with you in mind, focusing on making the experience as smooth and painless as possible.
* **Equity in Action:** We believe TaxEase.AI has the potential to make tax filing less intimidating and more accessible for all, regardless of income or technical expertise. 

## **What we learned  📚**

* **The Power of Vertex AI:** This project gave us invaluable experience with Vertex AI's incredible capabilities, solidifying our understanding of intelligent agent development.
* **User-First, Always:** When dealing with complex topics like taxes, simple and clear design is paramount. 
* **AI for Good:**  This project reinforced our belief in the power of AI to create positive change and address real-world problems.

## **What's next for TaxEase.AI 🚀**

* **Expand Functionality:**  We envision integrating with financial platforms, enabling automatic form population from user data, and offering advanced features for more complex tax scenarios.
* **Testing & Refinement:** We'll be conducting thorough testing with real users to gather feedback and make TaxEase.AI even more accurate and user-friendly.
* **Advocacy for Change:**  We plan to use TaxEase.AI to raise awareness about the need for a simpler, fairer, and more transparent US tax system.  


## **Forms & Instructions 📃**

<div class="center" style=" max-width: 600px; margin: 0 auto; text-align: center;">
<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="text-align: center;"><strong>Forms</strong></th>
        <th style="text-align: center;"><strong>Instructions</strong></th>
    </tr>
    <tr>
        <td>1040-NR</td>
        <td>1040-NR</td>
    </tr>
    <tr>
        <td>1040-S1</td>
        <td>1040-SE</td>
    </tr>
    <tr>
        <td>1040-S2</td>
        <td>1040</td>
    </tr>
    <tr>
        <td>1040-S3</td>
        <td>1042-S</td>
    </tr>
    <tr>
        <td>1040-SE</td>
        <td>1094-B_1095-B</td>
    </tr>
    <tr>
        <td>1040</td>
        <td>1094-C_1095-C</td>
    </tr>
    <tr>
        <td>1042-S</td>
        <td>1095-A</td>
    </tr>
    <tr>
        <td>1095-A</td>
        <td>1098-E_1098-T</td>
    </tr>
    <tr>
        <td>1095-B</td>
        <td>1098</td>
    </tr>
    <tr>
        <td>1095-C</td>
        <td>1099-B</td>
    </tr>
    <tr>
        <td>1098-E</td>
        <td>1099-DIV</td>
    </tr>
    <tr>
        <td>1098-T</td>
        <td>1099-G</td>
    </tr>
    <tr>
        <td>1098</td>
        <td>1099-INT_OID</td>
    </tr>
    <tr>
        <td>1099-B</td>
        <td>1099-K</td>
    </tr>
    <tr>
        <td>1099-DIV</td>
        <td>1099-MISC_NEC</td>
    </tr>
    <tr>
        <td>1099-G</td>
        <td>1099-R_5498</td>
    </tr>
    <tr>
        <td>1099-INT</td>
        <td>1099-S</td>
    </tr>
    <tr>
        <td>1099-K</td>
        <td>2441</td>
    </tr>
    <tr>
        <td>1099-MISC</td>
        <td>3921_3922</td>
    </tr>
    <tr>
        <td>1099-NEC</td>
        <td>8027</td>
    </tr>
    <tr>
        <td>1099-R</td>
        <td>8804_8805_8813</td>
    </tr>
    <tr>
        <td>1099-S</td>
        <td>8839</td>
    </tr>
    <tr>
        <td>2441</td>
        <td>8959</td>
    </tr>
    <tr>
        <td>3921</td>
        <td>8962</td>
    </tr>
    <tr>
        <td>3922</td>
        <td>8995</td>
    </tr>
    <tr>
        <td>4137</td>
        <td>SS-8</td>
    </tr>
    <tr>
        <td>4972</td>
        <td>W-2G_5754</td>
    </tr>
    <tr>
        <td>5498</td>
        <td>W-2_W-3</td>
    </tr>
    <tr>
        <td>8027</td>
        <td></td>
    </tr>
    <tr>
        <td>8288-A</td>
        <td></td>
    </tr>
    <tr>
        <td>8805</td>
        <td></td>
    </tr>
    <tr>
        <td>8814</td>
        <td></td>
    </tr>
    <tr>
        <td>8839</td>
        <td></td>
    </tr>
    <tr>
        <td>8888</td>
        <td></td>
    </tr>
    <tr>
        <td>8919</td>
        <td></td>
    </tr>
    <tr>
        <td>8959</td>
        <td></td>
    </tr>
    <tr>
        <td>8962</td>
        <td></td>
    </tr>
    <tr>
        <td>8995</td>
        <td></td>
    </tr>
    <tr>
        <td>SS-8</td>
        <td></td>
    </tr>
    <tr>
        <td>W-2</td>
        <td></td>
    </tr>
    <tr>
        <td>W-2AS</td>
        <td></td>
    </tr>
    <tr>
        <td>W-2G</td>
        <td></td>
    </tr>
    <tr>
        <td>W-2GU</td>
        <td></td>
    </tr>
</table>
    </div>