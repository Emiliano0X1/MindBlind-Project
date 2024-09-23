import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Logoframe from "./components/logoframe";
import { stick, raleway, lobster , rubik_glitch, great_vibes } from "@/app/fonts/fontChilas/fontsMain";
import Proximamente from "./components/comingSoon";

const images = ["/foto mindblind3.jpg", "/mindBlind.jpg", "/windows.png", "/background.jpg"];

const fonts = ["stick","raleway","lobster","rubik_glitch","great_vibes"];

export default function Home() {
  return (
    <div className={`${stick.variable} ${raleway.variable} ${lobster.variable} ${rubik_glitch.variable} ${great_vibes.variable} bg-cyan-500 bg-[url('/cloud2.jpg')] bg-repeat bg-[length:45%_45%] md:bg-[url('/cloud2.jpg')] md:bg-repeat md:bg-[length:30%_30%] flex flex-col w-svw h-svh justify-between`}>
      <Header ></Header>
      <div className="flex flex-col items-center mb-72 mt-14">
        <Logoframe images={images}></Logoframe>
        <div className="flex justify-center items-center text-black p-10 lg:text-6xl text-2xl">
            <Proximamente fonts={fonts}></Proximamente>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>

  );
}
