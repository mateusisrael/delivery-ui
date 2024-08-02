import Image from "next/image";

export default function CartPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center mt-20">
        <span>
          <Image width={108} height={120} src={"/cart.png"} alt={"list"}/>
        </span>
        <p className="text-2xl font-semibold text-black mt-7">No orders yet</p>


        <div className="flex items-center py-6 justify-center fixed left-0 bottom-0 w-full">
        <button className="py-6 px-[105px] text-white bg-primary rounded-[30px] text-lg">
          <span>Start ordering</span>
        </button>
      </div>
    </div>
  ) 
}