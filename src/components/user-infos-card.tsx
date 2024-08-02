import Image from "next/image"

export const UserInfosCard = () => {

  return (
    <div className="flex flex-row rounded-[20px] bg-white p-4 gap-4">
      <div>
        <Image width={91} height={100} alt={'profile image'} src={'/profile.png'}></Image>
      </div>
      <div>
        <p className="text-lg font-semibold text-black">Marvis Ighedosa</p>
        <p className="text-base font-normal text-listText">marvis@gmail.com</p>
        <p className="text-base font-normal text-listText">21981818181</p>
      </div>
    </div>
  )
}