"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function logoframe({ images }) {

  const [count, setCount] = useState(0);
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 300);
    return () => clearInterval(counterInterval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: "url(/windows.png)",
    width: "300px",
    height: "300px",
     backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return (
   
    <div style={backgroundImageStyle} className="flex justify-center text-black">
      <div>
        <Image
          src={images[count]}
          width={"100"}
          height={"100"}
          alt="No carga we"
        />
      </div>
    </div>
  );
}
