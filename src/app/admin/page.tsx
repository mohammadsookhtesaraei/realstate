import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import DashboardSideBar from '@/layout/DashboardSideBar';
import Profile from '@/models/Profile';
import User from '@/models/User';
import AdminPage from '@/templates/AdminPage';
import connectDB from '@/utils/connectDB';

export const metadata: Metadata = {
  title: 'پنل ادمین املاک | پروژه بوتواستارت',
};

const Admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect('/signin');
  const user = await User.findOne({ email: session?.user?.email });
  if (user.role !== 'ADMIN') redirect('/dashboard');
  const profiles = await Profile.find({ published: false });
  return (
    <DashboardSideBar role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DashboardSideBar>
  );
};

export default Admin;
