import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Logoframe from "./components/logoframe";
import Proximamente from "./components/comingSoon";


const images = ["/logoZeroShade.png", "/logoFourShade.png" , "/logoSixShade.png", "/logoThreeShade.png","/logoFiveShade.png"];

const fonts = [
  "windows_regular",
  "disney_heroic",
  "winbroken",
  "franchise",
  "hatolie",
  "retroPower",
  "shortPlan",
  "korean",
];

export default function Home() {
  return (
    <div className="bg-cyan-500 bg-[url('/newBG.jpg')]  bg-cover flex items-center justify-center flex-col w-screen h-screen w-screen min-h-screen">
      <div>

      </div>
      <div className="flex flex-col items-center md:mt-0">
        <Logoframe images={images}></Logoframe>
        {/* <div className="flex justify-center items-center text-black p-10 lg:text-6xl md: text-xl">
        </div> */}
      </div>
      <div>

      </div>
    </div>
  );
}
