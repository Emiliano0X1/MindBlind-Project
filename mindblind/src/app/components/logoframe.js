"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function logoframe({ images }) {

  const [count, setCount] = useState(0);
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 100);
    return () => clearInterval(counterInterval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: "url(/windows.png)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  }

  return (
   
    <div style={backgroundImageStyle} className="bg-cover bg-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] 2xl:w-[1200px] 2xl:h-[1200px] flex align-middle justify-center text-black">
      <div className=" flex justifiy-center">
        <Image
          src={images[5]}
          width={500}
          height={500}
          alt="No carga"
        />
      </div>
    </div>
  );
}
