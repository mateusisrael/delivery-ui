import { SearchInput } from "@/components/search-input"
import local from "next/font/local"

const sf = local({ src: '../../fonts/SF-Pro-Rounded-Bold.otf' })

export default function AppPage() {
  return (
    <main className="w-full text-4xl">
      <div className="flex flex-col gap-7">
        <h1 className={`${sf.className} text-black `}>Delicious <br/> 
        food for you</h1>

        <SearchInput />
      </div>
    </main>
  )
}