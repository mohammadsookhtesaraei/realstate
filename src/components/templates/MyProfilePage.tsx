import DashboardCard from '@/module/DashboardCard';

export type Profile = {
  _id: string;
  title: string;
  description: string;
  location: string;
  phone: string;
  realState: string;
  price: number;
  constructionDate: Date;
  category: string;
  amenities: string[];
  rules: string[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

interface MyProfilePageProps {
  profiles: Profile[];
}

const MyProfilePage = ({ profiles }: MyProfilePageProps) => {
  return (
    <div>
      {profiles.length ? null : <p>هیچ آگهی ثبت نشده است</p>}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={i} />
      ))}
    </div>
  );
};

export default MyProfilePage;
