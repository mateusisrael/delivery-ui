'use client'

import { BottomNavBar } from "@/components/bottom-nav-bar"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Menu } from "@/components/aside-menu"
import { usePathname, useRouter } from "next/navigation"


export default function LayoutApp(
  { children }: Readonly<{children: React.ReactNode}>
) {
  const path = usePathname()
  const route = useRouter()


  const isProductPage = path.split('/').find(i => i === 'product' || i === 'cart')

  return (
    <div className="min-h-screen w-screen bg-neutralBackground">
      <header className="flex justify-between px-10 py-4 w-full min-h-7 bg-neutralBackground text-[#acacac]">

        {/* AsideMenu renderizando na header :( */}

        { isProductPage ? (
          <button onClick={() => route.back()} className="p-2">
            <ArrowLeft color="#000" />
          </button>
        )  : (
        <>
          <Menu.Root />

          <Link className="flex items-center" href="/app/cart">
            <button className="p-2">
              <ShoppingCart color="#000"/>
            </button>
          </Link>
        </>
        )}
      </header>

      <div className="px-12 py-4">
        {children}
      </div>

      {
        !isProductPage && (
          <BottomNavBar />
        )
      }
    </div>
  )
}