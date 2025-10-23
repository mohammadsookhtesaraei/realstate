import Profile from '@/models/Profile';
import DetailsPage from '@/templates/DetailsPage';
import connectDB from '@/utils/connectDB';

const ProfileDetails = async ({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) => {
  await connectDB();
  const { profileId } = await params;
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;

  return <DetailsPage data={profile} />;
};

export default ProfileDetails;
