"use client"
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const[counter, setCounter]=useState(0)
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gray-700">
      <div className="items-center justify-center flex-col">
        <span className="h-60 w-60 bg-white rounded-full flex items-center justify-center text-8xl">
          {counter}
        </span>
        
      <div className="flex items-center space-x-20 justify-center rounded-lg text-6xl">
        <button onClick={()=>setCounter(counter+1)} className="flex items-center justify-center h-14 w-14 bg-cyan-400 text-white rounded-full">
          <Plus></Plus>
        </button>
        <button onClick={()=>{
          if (counter > 0){setCounter(counter-1)}
}} className="flex items-center justify-center h-14 w-14 bg-cyan-400 text-white rounded-full">
          <Minus></Minus>
        </button>
      </div>
      </div>
    </main>
  );
}
