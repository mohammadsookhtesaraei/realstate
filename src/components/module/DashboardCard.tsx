import Card from '@/module/Card';
import { type Profile } from '@/templates/MyProfilePage';

interface DashboardCardProps {
  data: Profile;
}

const DashboardCard = ({ data }: DashboardCardProps) => {
  return (
    <div>
      <Card {...data} />
    </div>
  );
};

export default DashboardCard;
