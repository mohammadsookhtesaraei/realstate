import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import DashboardSideBar from '@/layout/DashboardSideBar';
import User from '@/models/User';
import connectDB from '@/utils/connectDB';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/signin');
  await connectDB();
  const user = await User.findOne({ email: session.user?.email });
  if (!user) return <h3>مشکلی پیش امده است</h3>;

  return (
    <DashboardSideBar role={user.role} email={user.email}>
      {children}
    </DashboardSideBar>
  );
};

export default DashboardLayout;
