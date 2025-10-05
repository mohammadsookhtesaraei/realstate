'use client';

import { signOut } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="mt-5 flex w-full cursor-pointer border-none bg-none text-right text-base text-red-500"
    >
      <FiLogOut className="me-1.5 text-[1.2rem] text-red-500" />
      خروج
    </button>
  );
};

export default LogoutButton;
