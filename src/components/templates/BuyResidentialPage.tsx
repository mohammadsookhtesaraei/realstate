import { FilterDataType } from '@/app/buy-residential/page';

import Card from '@/module/Card';
import SideBar from '@/module/SideBar';

interface BuyResidentialProps {
  data: FilterDataType[];
}

const BuyResidentialPage = ({ data }: BuyResidentialProps) => {
  console.log(data);
  return (
    <div className="mt-20 flex justify-between">
      <div className="shadow-form me-10 flex h-fit w-[220px] flex-col items-center rounded-xl px-[15px] py-[30px]">
        <SideBar />
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
