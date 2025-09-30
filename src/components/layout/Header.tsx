'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

function Header() {

  const data=useSession();
  console.log(data);

  return (
    <header className="bg-blue-main my-5 flex items-center justify-between rounded-xl p-5 font-extralight text-white">
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
    {data ?(
           <div className="text-blue-main hover:bg-blue-main rounded-md border border-transparent bg-white transition-colors duration-200 hover:border-white hover:text-white">
        <Link className="flex items-center px-2 py-1" href="/dashboard">
          <FaUserAlt fontSize={'25px'} />  
        </Link>
      </div>
    ):(
         <div className="text-blue-main hover:bg-blue-main rounded-md border border-transparent bg-white transition-colors duration-200 hover:border-white hover:text-white">
        <Link className="flex items-center px-2 py-1" href="/signin">
          <FiLogIn fontSize={'25px'} />
          <span className="mr-1.5 leading-none">ورود</span>
        </Link>
      </div>
    )}
    </header>
  );
}

export default Header;
