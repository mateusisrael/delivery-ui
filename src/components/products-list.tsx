'use client'

import { useState } from "react"
import { SearchInput } from "./search-input"
import clsx from "clsx"
import { Product } from "@/@types/product"
import Image from "next/image"
import Link from "next/link"


type ProductListProps = {
  products: Product[]
}

const Filter = () => {
  const categories = [
    'Foods',
    'Drinks',
    'Snacks',
    'Sanduiches'
  ]

  const [selected, setSelected] = useState<string>('Foods')

  return (
    <div>
      <ul className="flex flex-row overflow-x-auto">
        {categories.map((category, i) => {
          return (
            <li onClick={() => setSelected(category)} className={
              clsx("px-3 py-4 text-base border-b-2 cursor-pointer", {
                "border-b-primary": selected === category,
                "text-primary": selected === category,
                "text-listText": selected !== category,
                "border-b-[transparent]": selected !== category
              })} key={i}>{category}</li>
          )
        })}
      </ul>
    </div>
  )
}

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex items-center flex-col text-center w-[220px] h-[270px] rounded-[30px] bg-white" key={product.id}>
      <div className="flex flex-col relative bottom-8 h-full justify-around">
        <Image width={164} height={164} alt={'food image'} src={product.img}/>
        <p className="text-black text-xl">{product.name}</p>
        <p className="text-primary text-base">{product.price}</p>
      </div>
    </div>
  )
}

export const List = ({ products }: ProductListProps) => {
  return (
    <div className="overflow-auto w-full py-5">
      <div className="flex flex-row gap-9 min-w-min">
        {
          products.map((product, i) => {
            return (
              <Link key={i} href={`app/product/${product.id}`}>
                <ProductCard product={product}/>
              </Link>
            )
          })
        }
      </div>

    </div>
  )
}

export const ProductsList = ({ products }: ProductListProps) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="flex flex-col gap-8">
      <SearchInput />

      <div className="flex flex-col gap-10">
        <Filter />
        <List products={products}/>
      </div>

    </div>
  )
}