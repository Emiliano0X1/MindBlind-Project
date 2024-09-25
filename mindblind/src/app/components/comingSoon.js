"use client";

import { useState, useEffect } from "react";

export default function Proximamente({ fonts }) {
  const [cont, setCont] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCont((prevCont) => (prevCont + 1) % fonts.length);
    }, 100);
    console.log("Current font:", fonts[cont]);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h1 className={`font-${fonts[cont]}`}>Coming soon</h1>
    </div>
  );
}
