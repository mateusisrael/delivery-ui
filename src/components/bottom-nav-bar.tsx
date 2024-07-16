'use client'

import { UserRound, Home, Heart, History } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const BottomNavBar = () => {
  const pathname = usePathname()  

  const getIconColor = (path: string) => {
    if(pathname === path) return "#FF4B3A"
    return "#ADADAF"
  }

  const paths = [
    { path: '/app', label: 'Home', icon: <Home color={getIconColor('/app')}/> },
    // { path: '', label: 'Favorites', icon: <Heart color={"#ADADAF"}/> },
    { path: '/app/profile', label: 'Profile', icon: <UserRound color={getIconColor('/app/profile')} /> },
    { path: '/app/history', label: 'History', icon: <History color={getIconColor('/app/history')}/> }
  ]

  return (
    <nav className="flex justify-center fixed bottom-0 w-screen">
      <ul className="flex justify-center gap-10 pb-8 pt-3">
        {paths.map((path, i) => (
          <Link className="flex" key={i} href={path.path}>
            <button className="p-2">
              { path.icon }
              {
                pathname === path.path ? (
                  <div className="w-full h-[3px] mt-[3px] bg-primary"></div> 
                ) : null
              } 
            </button>
          </Link>
        ))}
      </ul>
    </nav>

  );

}