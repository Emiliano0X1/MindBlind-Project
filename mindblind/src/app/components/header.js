export default function Header() {
  return (
    <>
     <div className="flex">
     <div style={{ background: "linear-gradient(to right, #1978f8, #0053f1)"}} className="h-full w-1"></div>
      <div className="w-full">
      <div style={{ background: "linear-gradient(#0053f1, #1978f8)"}} className="h-2"></div>
        <div
          style={{ backgroundColor: "#ece9d8" }}
          className="flex justify-between text-black py-10 px-2 text-sm"
        >
          <div className="text-wrap w-20">
            <p className="font-">Espera lo mejor</p>
          </div>
          <div className="hidden md:block">
            <p>.</p>
          </div>
          <div>
            <p>.</p>
          </div>
        </div> 
        <div style={{ background: "linear-gradient(#1978f8, #0053f1)"}} className="h-1"></div>
      </div>
      <div style={{ background: "linear-gradient(to right, #0053f1, #1978f8)"}} className="h-full w-1"></div>
      
{/* 99937c*/ }
    </div>
    </>
  );
}