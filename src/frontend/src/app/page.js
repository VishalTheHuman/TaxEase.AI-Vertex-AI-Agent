import Image from "next/image";
import Logo from "@/components/Logo"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import githublogo from "../../public/githublogo.png";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-evenly my-4">
      <div className="gif"></div>
        {/* <video width="600" height="500" autoPlay muted loop className="border-0 ">
          <source src="/illustr.mp4" type="video/mp4" />
        </video> */}
        <div className="w-[35%]"> {/* Added margin-left for spacing */}
          <Logo className="mx-auto w-full"/>
          <div className="bg-primary rounded-xl p-5 mt-5 text-accent text-xl">
            <p className="italic">
              Simplifying tax filing with AI expertise, saving you time and money!
            </p>
            

            <Link href="/chat">
              <p className="text-blackish bg-accent p-3 rounded-xl text-lg text-center font-black mt-4">
                Let's get started!
              </p>
            </Link>
            <Link href="https://github.com/VishalTheHuman/TaxEase.AI-Vertex-AI-Agent" target="_blank">

              <div className="text-accent flex gap-2 justify-center bg-blackish mt-2 mb-2 p-3 rounded-xl text-lg text-center w-full items-center">
              <Image src={githublogo} width={30}/>
                View on Github
              </div>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
    <Footer/>
    </div>
  );
}
