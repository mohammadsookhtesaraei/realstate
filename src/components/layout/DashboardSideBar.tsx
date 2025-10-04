import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';

import LogoutButton from '@/module/LogoutButton';

const DashboardSideBar = ({
  children,
  role,
  email,
}: {
  children: React.ReactNode;
  role: string;
  email: string;
}) => {
  return (
    <div className="mt-20 flex justify-between">
      <div className="shadow-form ml-10 flex h-fit w-[220px] flex-col items-center rounded-xl px-4 py-8">
        <CgProfile className="text-blue-main text-5xl" />
        {role === 'ADMIN' ? 'ادمین' : null}
        <p className="mt-5 font-normal text-gray-400">{email}</p>
        <span className="mb-8 h-px w-full bg-gray-400"></span>
        <Link className="my-1.5 w-full font-normal" href={'/dashboard'}>
          حساب کاربری
        </Link>
        <Link
          className="my-1.5 w-full font-normal"
          href={'dashboard/my-profiles'}
        >
          آگهی‌های‌من
        </Link>
        <Link className="my-1.5 w-full font-normal" href={'dashboard/add'}>
          ثبت‌آگهی
        </Link>
        <LogoutButton />
        {role === 'ADMIN' ? <Link href="/admin">در انتظار تایید</Link> : null}
      </div>
      <div className="w-full bg-red-700">{children}</div>
    </div>
  );
};

export default DashboardSideBar;
