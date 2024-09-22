import Image from "next/image";
export default function Header() {
    return (
      <div className="flex justify-center bg-white text-black border-black border-2"> 
        <div><Image
        src="/foto mindblind3.jpg"
        width={"300"}
        height={"300"}
        alt="No carga we"
        />
        </div>
      </div>
    );
  }