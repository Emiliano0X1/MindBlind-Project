import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Logoframe from "./components/logoframe";
import { stick, raleway, lobster , rubik_glitch, great_vibes } from "@/app/fonts/fontChilas/fontsMain";
import Proximamente from "./components/comingSoon";

const images = ["/foto mindblind3.jpg", "/mindBlind.jpg", "/windows.png", "/background.jpg", "/mindblindLogo.png", "/mindblindLogoShade.png"];

const fonts = ["windows_regular","disney_heroic","katakana","winbroken","punk"];

export default function Home() {
  return (
    <div className="bg-cyan-500 bg-[url('/clouds.jpg')] bg-repeat  md:bg-[url('/clouds.jpg')] md:bg-repeat flex flex-col w-svw h-svh justify-between">
      <Header></Header>
      <div className="flex flex-col items-center mb-72">
        <Logoframe max={images.length - 1} images={images}></Logoframe>
        <div className={`${stick.variable} ${raleway.variable} ${lobster.variable} ${rubik_glitch.variable} ${great_vibes.variable}flex justify-center items-center text-black p-10 lg:text-6xl`}>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>

  );
}
