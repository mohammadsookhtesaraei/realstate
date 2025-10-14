import Profile from '@/models/Profile';
import AddProfilePage from '@/templates/AddProfilePage';
import connectDB from '@/utils/connectDB';

const Edit = async ({ params }: { params: Promise<{ profileId: string }> }) => {
  const { profileId } = await params; //  اینجا await لازمه

  await connectDB();

  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید ...</h3>;

  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
};

export default Edit;
