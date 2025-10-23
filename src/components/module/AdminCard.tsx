'use client';

import { FilterDataType } from '@/app/buy-residential/page';

import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';

import { sp } from '@/utils/replaceNumber';

interface AdminCardProps {
  data: FilterDataType;
}

const AdminCard = ({
  data: { _id, title, description, location, price },
}: AdminCardProps) => {
  const router = useRouter();
  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: 'PATCH' });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className="border-b-blue-main mb-[80px] border-b-2 pb-2.5">
      <h3 className="text-blue-main mb-5 text-2xl font-normal">{title}</h3>
      <p className="mb-5 text-justify">{description}</p>
      <div className="mb-5 flex">
        <span className="bg-icons text-blue-main me-[15px] rounded-[5px] px-2.5 py-[5px]">
          {location}
        </span>
        <span className="bg-icons text-blue-main me-[15px]rounded-[5px] px-2.5 py-[5px]">
          {sp(price)}
        </span>
      </div>
      <button
        className="mt-5 cursor-pointer rounded-[5px] border-none bg-[#00a800] px-[15px] py-[5px] text-base font-normal text-white transition-all delay-75 ease-in hover:text-black"
        onClick={publishHandler}
      >
        انتشار
      </button>
      <Toaster />
    </div>
  );
};

export default AdminCard;
