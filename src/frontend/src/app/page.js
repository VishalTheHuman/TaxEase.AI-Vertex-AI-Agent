import Image from "next/image";
import Logo from "@/components/Logo"
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="h-[85vh] flex flex-col items-center justify-center">
      <div className="flex items-center justify-evenly">
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
            <Link href="/">
              <p className="text-blackish bg-accent mt-5 mb-3 p-3 rounded-xl text-lg text-center">
                Learn More
              </p>
            </Link>

            <Link href="/chat">
              <p className="text-blackish bg-accent mt-0 p-3 rounded-xl text-lg text-center font-black">
                Let's get started!
              </p>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}
