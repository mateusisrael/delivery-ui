'use client'

import { Search } from "lucide-react";
import local from "next/font/local";
import { useRef } from "react";

const sfpro = local({ src: '../fonts/SF-Pro.ttf' })

export const SearchInput = () => {
  const containerRef = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleContainerFocus = () => {
    if(inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
  <div onClick={handleContainerFocus} ref={containerRef} className={`flex  items-center flex-row gap-4 ${sfpro.className} font-normal text-base rounded-[30px] py-5 px-9 bg-inputBG cursor-text`}>
    <Search size={18} color="#000"/>
    <input ref={inputRef} className="outline-none bg-inputBG text-black flex-1" placeholder="Search"></input>
  </div>

  );
}