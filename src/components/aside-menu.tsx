'use client'
import { Menu, ArrowLeft } from "lucide-react";
import { useState } from "react";

type ButtonProps = {
  onClick: () => void
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="p-2">
      <Menu color="#000"/>
    </button>
  );
}


type AsideProps = {
  onClose: () => void
}

const AsideNav = ({ onClose }: AsideProps) => {
  return (
    <aside className="absolute left-0 top-0 h-screen w-screen z-10">
      <div className="flex flex-col justify-start bg-primary w-full h-full py-4 px-10">
        <button onClick={onClose} className="p-2">
          <ArrowLeft color="#fff" />
        </button>
        
      </div>
    </aside>
  )
}

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(prev => !prev)}/>
      { isOpen && <AsideNav onClose={() => setIsOpen(false)} /> }
    </>
  )
}

export default HamburguerMenu;