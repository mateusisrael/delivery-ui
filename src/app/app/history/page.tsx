import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center mt-20">
        <span>
          <Image width={108} height={120} src={"/list.png"} alt={"list"}/>
        </span>
        <p className="text-2xl font-semibold text-black mt-7">No history yet</p>

    </div>
  ) 
}