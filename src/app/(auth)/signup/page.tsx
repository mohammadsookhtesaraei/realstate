import { getServerSession } from 'next-auth';
import { authOptions } from '@/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';


import SingUpPage from 'src/components/templates/SingUpPage';



export default  async function SignUp() {
  const session = await getServerSession(authOptions);
if (session) redirect('/');
  return <SingUpPage />;
}
