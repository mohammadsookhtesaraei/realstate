'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import Loader from '@/module/Loader';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error('رمز و تکرار آن برابر نیست');
      return;
    }
    setLoading(true);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push('/signin');
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="flex h-[90vh] flex-col justify-center">
      <h4 className="text-blue-main mb-5 font-semibold">فرم ثبت نام</h4>
      <form className="shadow-form border-blue-main mb-8 flex max-w-[700px] flex-col rounded-xl border p-10">
        <label className="text-blue-main mb-2.5 font-normal">ایمیل:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-blue-main mb-10 h-10 w-[250px] rounded-md border border-dashed p-2.5 text-gray-500 focus:border-solid focus:outline-none"
        />
        <label className="text-blue-main mb-2.5 font-normal">رمز عبور:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-blue-main mb-10 h-10 w-[250px] rounded-md border border-dashed p-2.5 text-gray-500 focus:border-solid focus:outline-none"
        />
        <label className="text-blue-main mb-2.5 font-normal">
          تکرار رمز عبور:
        </label>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          className="border-blue-main mb-10 h-10 w-[250px] rounded-md border border-dashed p-2.5 text-gray-500 focus:border-solid focus:outline-none"
        />
        {loading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            onClick={signupHandler}
            className="bg-blue-main cursor-pointer rounded-sm border-none py-2 text-xl font-normal text-white transition-all delay-75 ease-in hover:scale-[1.05]"
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="text-xl text-gray-500">
        حساب کاربری دارید؟
        <Link
          className="text-blue-main mr-2.5 border-b-[3px] border-gray-500"
          href="/signin"
        >
          ورود
        </Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignupPage;
