import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Logoframe from "./components/logoframe";

export default function Home() {
  return (
    <div className="bg-white flex flex-col w-svw h-svh justify-between">
      <Header></Header>
      <div className="mb-56">
        <Logoframe></Logoframe>
        <div className="flex justify-center items-center text-black p-10 lg:text-6xl">
          <p>PRÓXIMAMENTE</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
