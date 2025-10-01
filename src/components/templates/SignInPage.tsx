'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import Loader from '@/module/Loader';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setLoading(true);

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setLoading(false);
    if (res?.error) {
      toast.error(res.error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex h-[90vh] flex-col justify-center">
      <h4 className="text-blue-main mb-5 font-semibold">فرم ورود</h4>
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
        {loading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            onClick={signinHandler}
            className="bg-blue-main cursor-pointer rounded-sm border-none py-2 text-xl font-normal text-white transition-all delay-75 ease-in hover:scale-[1.05]"
          >
            ورود
          </button>
        )}
      </form>
      <p className="text-xl text-gray-500">
        حساب کاربری ندارید؟
        <Link
          className="text-blue-main mr-2.5 border-b-[3px] border-gray-500"
          href="/signup"
        >
          ثبت نام
        </Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignInPage;
