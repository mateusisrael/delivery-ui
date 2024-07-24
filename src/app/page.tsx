import local from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const sf = local({ src: '../fonts/SF-Pro-Rounded-Bold.otf' })

export default function Home() {

  return (
    <main className={`${sf.className} flex min-h-screen flex-col px-12 py-14 size-full bg-primary`}>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-8">
          <div className="size-[73px] bg-slate-600 flex items-center justify-center rounded-full bg-white">
              <Image width={40.22} height={49.65} src={'/olonje-logo.svg'} alt={'Logo'} />
          </div>
          
          <h1>Food For<br/> Everyone</h1>
        </div>

        <div className="flex justify-center w-full bottom-9">
          <Link href={'/app'}>
            <button className="py-6 px-[105px] bg-white text-primary rounded-[30px] text-lg">
              <span>Get Started</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
