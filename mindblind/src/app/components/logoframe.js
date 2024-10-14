"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

export default function logoframe({ images }) {

  const [count, setCount] = useState(0);
  const[opening,setOpening] = useState(false);
  const[isVisible, setVisible] = useState(false);

  const getRandomPosition= () => {

  }

  useEffect(() => {

    const showAnnimations = () => {

        setOpening(true);
        setVisible(true); //Este es el que sirve para poder cambiar el estado de la animacion

        setTimeout(() => {
          setOpening(false); //Es para la animacion de salida

          setTimeout(() => {
            setVisible(false); 
          }, 500);

        } , 7000);

    };

    showAnnimations();
 
    const openingInterval = setInterval(() => {
      showAnnimations();
    },9000)

    return () => clearInterval(openingInterval)
  },[]);



  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 500);
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
    <>
    <div className="bg-cover bg-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] flex align-middle justify-center text-black">
      <div 
      className="bg-cover bg-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] flex align-middle justify-center text-black"
      
        >
      <div className=" flex justifiy-center">
        <Image
          src={images[count]}
          width={600}
          height={600}
          alt="No carga"
        />
      </div>

    </div>

</div>

   </>

   
  );
}
