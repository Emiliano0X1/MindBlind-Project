import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Logoframe from "./components/logoframe";

const images = ["/foto mindblind3.jpg", "/mindBlind.jpg", "/windows.png", "/background.jpg"];

export default function Home() {
  return (
    <div className="bg-cyan-500 bg-[url('/cloud2.jpg')] bg-repeat bg-[length:45%_45%] md:bg-[url('/cloud2.jpg')] md:bg-repeat md:bg-[length:30%_30%] flex flex-col w-svw h-svh justify-between">
      <Header></Header>
      <div className="flex flex-col items-center mb-72">
        <Logoframe max={images.length - 1} images={images}></Logoframe>
        <div className="flex justify-center items-center text-black p-10 lg:text-6xl">
          <p>PRÓXIMAMENTE</p>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>

  );
}
