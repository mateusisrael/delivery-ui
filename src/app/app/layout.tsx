import { BottomNavBar } from "@/components/bottom-nav-bar"
import { Menu, ShoppingCart } from "lucide-react"
import Link from "next/link"
import HamburguerMenu from "@/components/aside-menu"

export default function LayoutApp(
  { children }: Readonly<{children: React.ReactNode}>
) {
  return (
    <div className="min-h-screen w-screen bg-neutralBackground">
      <header className="flex justify-between px-10 py-4 w-full min-h-7 bg-neutralBackground text-[#acacac]">

        {/* AsideMenu renderizando na header :( */}
        <HamburguerMenu />
        
        <Link className="flex items-center" href="/app/cart">
          <button className="p-2">
            <ShoppingCart color="#000"/>
          </button>
        </Link>
          
      </header>

      <div className="px-12 py-4">
        {children}
      </div>

      <BottomNavBar />
    </div>
  )
}