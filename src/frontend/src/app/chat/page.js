import {React} from "react";
import { promises as fs } from "fs";
import ChatWindow from "./chatwindow";

export default async function ChatPage() {
  const file = await fs.readFile(process.cwd() + "/public/info.json", "utf8");
  const data = JSON.parse(file);
  const formNames = Object.keys(data);

  return (
    <div className="flex h-[97vh]">
      <div className="w-[70%]">
      <iframe
          src="https://www.irs.gov/pub/irs-pdf/f1040nr.pdf" 
          className="w-full h-full"
        /></div>

    
      <div className="w-[30%] bg-blackish">
        <div className="bg-primary text-accent text-center p-5 pt-8">
          <h1 className="font-black leading-5 text-[2rem]">TaxEase.AI</h1>
          <p className="text-lg">Your personal tax coach 💸🏛️</p>

          <div className="mt-6">
            <label htmlFor="formSelect">Select a Form:</label><br/>
            <select id="formSelect" className="px-4 py-2 mt-1 text-black rounded-xl focus:outline-0">
              {formNames.map((formName, index) => (
                <option key={index} value={formName}>
                  {formName}
                </option>
              ))}
            </select>
          </div>
        </div>



        <div className="p-5">
        <h1 className="text-white text-2xl font-bold">Vertex AI Agent</h1>
        <ChatWindow/>
      </div>
      </div>


      
    </div>
  );
}
