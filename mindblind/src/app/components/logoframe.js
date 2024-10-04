"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

export default function logoframe({ images , time }) {

  const [count, setCount] = useState(0);
  const[opening,setOpening] = useState(0);

  useEffect(() => {
    const openingInterval = setInterval(() => {
      setOpening((prevOpening) => !prevOpening)
    },time)

    return () => clearInterval(openingInterval)
  },[]);


  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 200);
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


   
    <motion.div 
      style={backgroundImageStyle} 
      className="bg-cover bg-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex align-middle justify-center text-black"
      initial = {{opacity : 0, scale:0.5}}
      animate = {{
        opacity: opening ? 1 : 0,
        scale : opening ? 1 : 0.5,
      }}

      transition={{ duration : 0.5 , ease : 'easeInOut'}}

        >
      <div className=" flex justifiy-center">
        <Image
          src={images[count]}
          width={500}
          height={500}
          alt="No carga"
        />
      </div>
    </motion.div>
  );
}
