'use client';

import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

import Card from '@/module/Card';
import { type Profile } from '@/templates/MyProfilePage';

interface DashboardCardProps {
  data: Profile;
}

const DashboardCard = ({ data }: DashboardCardProps) => {
  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: 'DELETE',
    });

    const dat = await res.json();
    if (dat.error) {
      toast.error(dat.error);
    } else {
      toast.success(dat.message);
      router.refresh();
    }
  };
  return (
    <div className="border-icons mb-5 flex rounded-2xl border-2">
      <Card {...data} />
      <div className="flex w-full items-end justify-between p-2.5">
        <button
          onClick={editHandler}
          className="flex h-10 w-[48%] cursor-pointer items-center justify-center rounded-lg border border-solid border-green-600 bg-white text-base text-green-600"
        >
          ویرایش
          <FiEdit className="ms-2.5 text-[1.1rem]" />
        </button>
        <button
          onClick={deleteHandler}
          className="flex h-10 w-[48%] cursor-pointer items-center justify-center rounded-lg border border-solid border-red-600 bg-white text-base text-red-600"
        >
          حذف آگهی
          <AiOutlineDelete className="ms-2.5 text-[1.1rem]" />
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardCard;
