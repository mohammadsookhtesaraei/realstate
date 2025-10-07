import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import { getServerSession } from 'next-auth';
import DashboardPage from 'src/components/templates/DashboardPage';

import User from '@/models/User';
import connectDB from '@/utils/connectDB';

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session?.user?.email });
  return <DashboardPage createdAt={user.createdAt} />;
}

export default Dashboard;
