import { BottomNavBar } from "@/components/bottom-nav-bar"
import { Menu, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function LayoutApp(
  { children }: Readonly<{children: React.ReactNode}>
) {
  return (
    <div className="min-h-screen w-screen bg-white">
      <header className="flex justify-between px-10 py-4 w-full min-h-7 bg-white text-[#acacac]">
        <button className="p-2">
          <Menu color="#000"/>
        </button>
        
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