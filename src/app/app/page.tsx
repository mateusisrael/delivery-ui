import { Product } from "@/@types/product"
import { ProductsList } from "@/components/products-list"
import local from "next/font/local"

const sf = local({ src: '../../fonts/SF-Pro-Rounded-Bold.otf' })

export default function AppPage() {
  const products: Product[] = [
    { id: 1, name: 'Bife ancho', price: 'R$1,900', img: '/food1.png', category: 'Food' },
    { id: 2, name: 'Assado de coxas', price: 'R$2,300', img: '/food1.png', category: 'Food' },
    { id: 2, name: 'Carpaccio de língua', price: 'R$1,100', img: '/food1.png', category: 'Food' }
  ]

  return (
    <main className="w-full text-4xl">
      <div className="flex flex-col gap-7">
        <h1 className={`${sf.className} text-black `}>Delicious <br/> 
        food for you</h1>

        <ProductsList products={products}/>
      </div>
    </main>
  )
}