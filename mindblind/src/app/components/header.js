import Proximamente from "./comingSoon";

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
                <p className="mr-12 hidden md:block text-sm md:text-2xl w-28 text-nowrap font-windows_regular">
                  MINDBLIND STUDIOS {" "}
                </p>
              </div>
              <div className="text-xl w-50 md:w-80 md:text-2xl align-middle">
                <Proximamente fonts={fonts}></Proximamente>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/mindblindstudios/"
                  className="hidden md:block text-sm font-windows_regular md:text-xl md:hover:text-4xl transition-all"
                >
                  Siguenos en Instagram
                </a>
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
