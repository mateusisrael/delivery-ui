'use client'
import { Menu as MenuIcon, ArrowLeft } from "lucide-react";
import { useState } from "react";

type ButtonProps = {
  onClick: () => void
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="p-2">
      <MenuIcon color="#000"/>
    </button>
  );
}


type AsideProps = {
  onClose: () => void
}

const AsideNav = ({ onClose }: AsideProps) => {
  const asideMenuintens = [
    { label: 'Profile' },
    { label: 'Privacy policy' },
    { label: 'Security' }
  ]

  return (
    <aside className="absolute left-0 top-0 h-screen w-screen z-10">
      <div className="flex flex-col justify-between bg-primary w-full h-full py-4 px-10">
        <div className="flex flex-col">
          <button onClick={onClose} className="p-2">
            <ArrowLeft color="#fff" />
          </button>
          
          <nav className="mt-6 ml-4">
            <ul className="flex flex-col gap-10">
              { asideMenuintens.map((item, i) => <li className="text-lg text-white font-semibold" key={i}>{item.label}</li>)}
            </ul>
          </nav>
        </div>


        <span className="text-lg text-white font-semibold">Signout</span>
      </div>
    </aside>
  )
}

const Root = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(prev => !prev)}/>
      { isOpen && <AsideNav onClose={() => setIsOpen(false)} /> }
    </>
  )
}

export const Menu = {
  Root,
  Button,
  AsideNav
};