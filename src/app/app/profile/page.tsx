import { UserInfosCard } from "@/components/user-infos-card";
import local from "next/font/local";

const sf = local({ src: '../../../fonts/SF-Pro-Rounded-Bold.otf' })

export default function ProfilePage() {
  return (
    <div className={`flex flex-col gap-11`}>
      <h1 className={`${sf.className} text-3xl text-black`}>My profile</h1>

      <div>
        <div className="flex justify-between">
          <h2 className="text-lg text-black font-semibold mb-3">Personal details</h2>
          <span className="text-primary text-base ">Edit</span>
        </div>

        <UserInfosCard />
      </div>

    </div>
  ) 
}