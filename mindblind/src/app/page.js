import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Logoframe from "./components/logoframe";
import Proximamente from "./components/comingSoon";


const images = ["/mindblindlogoShade.png", "/logoFourShade.png" , "/logoSixShade.png", "/logoThreeShade.png","/logoFiveShade.png"];

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
    <div className="bg-cyan-500 bg-[url('/clouds.jpg')] bg-repeat md:bg-[url('/clouds.jpg')] bg-fixed bg-center flex flex-col w-svw h-svh md:justify-between">
      <Header></Header>
      <div className="flex flex-col items-center mt-12 md:mt-0">
        <Logoframe images={images}></Logoframe>
        <div className="flex justify-center items-center text-black p-10 lg:text-6xl md: text-xl">
          
        </div>
      
      </div>
      <div>

      </div>
      {/* <Footer></Footer> */}
    </div>

  );
}
