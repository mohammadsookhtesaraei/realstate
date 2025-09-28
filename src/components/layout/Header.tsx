"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "@/layout/Header.module.css";
import { useSession } from "next-auth/react";

function Header() {
  return (
    <header className="font-yekan font-thin bg-blue-main">
        <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
       <div className="">
          <Link href="/signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
    </header>
  )
}

export default Header