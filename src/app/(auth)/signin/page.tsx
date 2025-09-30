import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SignInPage from 'src/components/templates/SignInPage';

import { authOptions } from '@/api/auth/[...nextauth]/route';

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session) redirect('/');
  return <SignInPage />;
}
