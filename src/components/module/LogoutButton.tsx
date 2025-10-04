"use client"
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";


const LogoutButton = () => {
  return (
    <button onClick={()=>signOut()} className="flex bg-none border-none mt-5 w-full text-right text-base text-red-500 cursor-pointer">
        <FiLogOut className="text-red-500 text-[1.2rem] me-1.5"/>
        خروج
    </button>
  )
}

export default LogoutButton