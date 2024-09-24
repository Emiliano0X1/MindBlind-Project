import Proximamente from "./comingSoon";

export default function Header() {
  const fonts = ["windows_regular","disney_heroic","katakana","winbroken","punk","dezire"];
  return (
    
    <>
    <div className="flex flex-col justify-between">
     <div className="flex p-5 ">
     <div style={{ background: "linear-gradient(to right, #1978f8, #0053f1)"}} className="h-full w-1 rounded-sm"></div>
      <div className="w-full">
      <div style={{ background: "linear-gradient(#0053f1, #1978f8)"}} className="h-2 rounded-sm"></div>
        <div
          style={{ backgroundColor: "#ece9d8" }}
          className="flex justify-between text-black py-8 px-3 text-sm"
        >
          <div className="">
            <p className=" text-xl md:text-2xl font-windows_regular">MINDBLIND STUDIOS  TM </p>
          </div>
          <div className="text-sm w-60 md:text-xl">
          <Proximamente fonts={fonts}></Proximamente>
          </div>
          <div>
            <a href="https://www.instagram.com/mindblindstudios/" className="text-xl font-windows_regular md:text-xl hover:text-4xl transition-all">Siguenos en Instagram</a>
          </div>
        </div> 
        <div style={{ background: "linear-gradient(#1978f8, #0053f1)"}} className="h-1 rounded-sm"></div>
      </div>
      <div style={{ background: "linear-gradient(to right, #0053f1, #1978f8)"}} className="h-full w-1 rounded-sm"></div>
      
{/* 99937c*/ }
    </div>
    <div>
      
    </div>
    </div>
    </>
  );
}