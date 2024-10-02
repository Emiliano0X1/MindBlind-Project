
"use client";

import { useState, useEffect } from "react";

export default function DayEvent({ fonts }) {
  const [cont, setCont] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCont((prevCont) => (prevCont + 1) % fonts.length);
    }, 250);
    console.log("Current font:", fonts[cont]);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h1 className={`font-${fonts[cont]}`}>16 de Noviembre del 2024</h1>
    </div>
  );
}
