"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "@/layout/Header.module.css";
import { useSession } from "next-auth/react";

function Header() {
  return (
    <header className="font-yekan font-thin bg-blue-main flex justify-between items-center p-5 my-5 rounded-xl text-white">
        <div>
        <ul className="flex gap-x-2.5 md:gap-x-7">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
       <div className=" bg-white text-blue-main border border-transparent rounded-md transition-all ease-in delay-[0.1s] hover:bg-blue-main hover:text-white hover:border hover:border-white">
          <Link className="flex py-1 px-1.5" href="/signin">
            <FiLogIn fontSize={"25px"}/>
            <span className="mr-1.5">ورود</span>
          </Link>
        </div>
    </header>
  )
}

export default Header