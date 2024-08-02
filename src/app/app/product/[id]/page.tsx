import { products } from "@/lib/products"
import Image from "next/image"

interface PageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: PageProps) {
  const product = products.filter(i => i.id === params.id)[0]
  
  return (
    <div className="flex gap-11 flex-col">
      <div className="flex flex-col items-center">
        <Image height={164} width={165} alt={"Food image"} src={product.img}/>
      </div>
      <div>
        <h1 className="text-black font-semibold text-3xl">{product.name}</h1>
        <p className="text-primary text-2xl">{product.price}</p>  
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-semibold text-lg">Delivery info</h2>
        <p className="text-listText font-medium text-base">{product.info}</p>
      </div>


      <div className="flex items-center py-6 justify-center fixed left-0 bottom-0 w-full">
        <button className="py-6 px-[105px] text-white bg-primary rounded-[30px] text-lg">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}
