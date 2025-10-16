import Card from '@/module/Card';
import { type Profile } from '@/templates/MyProfilePage';

interface BuyResidentialProps {
  data: Profile[];
}

const BuyResidentialPage = ({ data }: BuyResidentialProps) => {
  return (
    <div className="mt-20 flex justify-between">
      <div className="shadow-form me-10 flex h-fit w-[220px] flex-col items-center rounded-xl px-[15px] py-[30px]">
        sidebar
      </div>
      <div className="flex w-full flex-wrap justify-between">
        {data.length ? null : (
          <p className="bg-red-text h-[50px] rounded-xl px-[15] py-2.5 text-[1.3rem] text-red-500">
            هیچ آگهی ثبت نشده است
          </p>
        )}

        {data.map((profile) => (
          <Card key={profile._id} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default BuyResidentialPage;
