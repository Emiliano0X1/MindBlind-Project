"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function logoframe({ images }) {

  const [count, setCount] = useState(0);
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 100000);
    return () => clearInterval(counterInterval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: "url(/windows.png)",
    width: "400px",
    height: "400px",
     backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return (
   
    <div style={backgroundImageStyle} className="flex h-full w-full align-middle justify-center text-black">
      <div classname="flex justifiy-center">
        <Image
          src={images[5]}
          width={"300"}
          height={"300"}
          alt="No carga we"
        />
      </div>
    </div>
  );
}
