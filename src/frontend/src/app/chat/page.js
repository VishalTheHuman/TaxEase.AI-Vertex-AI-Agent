'use client';
import {React, useState} from "react";
import ChatWindow from "./chatwindow";
import Link from "next/link";

export default function ChatPage() {
  const [selectedForm, setSelectedForm] = useState("");
  const [pdfSrc, setPdfSrc] = useState("/pdfs/1040.pdf"); // Default PDF source

  // Function to handle form selection change
  const handleFormChange = (event) => {
    const selectedForm = event.target.value;
    setSelectedForm(selectedForm);
    // Assuming your data object has the path to PDF for each form
    const formPath = "/pdfs/"+selectedForm+".pdf";
    setPdfSrc(formPath);
  };
  const formNames = ['1040', '1040-NR', '1040-S1', '1040-S2', '1040-S3', '1040-SE',
   '1042-S', '1095-A', '1095-B', '1095-C', '1098', '1098-E', '1098-T', '1099-B', '1099-DIV',
  '1099-G', '1099-INT', '1099-K', '1099-MISC', '1099-NEC', '1099-R', '1099-S', '2441', '3921', '3922', '4137', '4972',
    '5498', '8027', '8288-A', '8805', '8814', '8839', '8888', '8919', '8959', '8962', '8995', 'SS-8', 'W-2', 'W-2AS', 'W-2G', 'W-2GU'];

  return (
    <div>
<div className="flex h-full">
      <div className="w-[65%]">
      <iframe
          src={pdfSrc} 
          className="w-full h-full"
        /></div>

    
      <div className="w-[35%] bg-blackish">
        <div className="bg-primary text-accent text-center p-5 pt-8">
          <Link href="/"><h1 className="font-black leading-5 text-[2rem]">TaxEase.AI</h1></Link>
          
          <p className="text-lg">Your personal tax coach 💸🏛️</p>

          <div className="mt-3">
            <label htmlFor="formSelect">Select a Form:</label><br/>
            <select id="formSelect" className="px-4 py-2 mt-1 text-black rounded-xl focus:outline-0"  onChange={handleFormChange}>
              {formNames.map((formName, index) => (
                <option key={index} value={formName}>
                  {formName}
                </option>
              ))}
            </select>
          </div>
        </div>



        <div className="p-5 pb-2">
        <h1 className="text-white text-2xl font-bold">Vertex AI Agent</h1>
        <ChatWindow/>
      </div>
      </div>
    </div>
    <div className='bg-black w-full py-4 text-center text-white'>    
    </div>
    </div>
    
  );
}
