import Proximamente from "./comingSoon";
import Image from "next/image";

export default function Header() {
  const fonts = [
    "windows_regular",
    "disney_heroic",
    "katakana",
    "winbroken",
    "dezire",
    "franchise",
    "hatolie",
    "retroPower",
    "shortPlan",
    "korean",
  ];
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex p-5  ">
          <div
            style={{
              background: "linear-gradient(to right, #1978f8, #0053f1)",
            }}
            className="h-full w-1 rounded-sm"
          ></div>
          <div className="w-full">
            <div
              style={{ background: "linear-gradient(#0053f1, #1978f8)" }}
              className="h-2 rounded-sm"
            ></div>
            <div
              style={{ backgroundColor: "#ece9d8" }}
              className="flex justify-between text-black py-8 px-3 text-sm"
            >
              <div className="">
                <p className="mr-28 hidden md:block text-sm md:text-2xl w-28 text-nowrap font-windows_regular">
                  MINDBLIND STUDIOS {" "}
                </p>
              </div>
              <div className="text-xl w-50 md:w-80 md:text-2xl align-middle">
                <Proximamente fonts={fonts}></Proximamente>
              </div>
              <div className="flex ">
                <a
                  href="https://www.instagram.com/mindblindstudios/"
                  className="hidden md:block md:text-nowrap mx-4 text-sm font-windows_regular  md:hover:text-4xl  transition-all md:text-xl"
                >
                  Siguenos en Instagram
                </a>
                <div className="flex">
                <Image
                className=" bg-cover bg-center relative -inset-2 w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] transition-all"
                src={"/instaPixel.png"}
                width={30}
                height={30}
                />
                </div>
              </div>
            </div>
            <div
              style={{ background: "linear-gradient(#1978f8, #0053f1)" }}
              className="h-1 rounded-sm"
            ></div>
          </div>
          <div
            style={{
              background: "linear-gradient(to right, #0053f1, #1978f8)",
            }}
            className="h-full w-1 rounded-sm"
          ></div>

          {/* 99937c*/}
        </div>
        <div></div>
      </div>
    </>
  );
}
