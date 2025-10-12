"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";


import Card from '@/module/Card';
import { type Profile } from '@/templates/MyProfilePage';

interface DashboardCardProps {
  data: Profile;
}



const DashboardCard = ({ data }: DashboardCardProps) => {
  const editHandler=()=>{};
  const deleteHandler=()=>{}
  return (
    <div className="flex border-2 border-icons rounded-2xl mb-5">
      <Card {...data} />
      <div className="flex items-end justify-between p-2.5 w-full">
        <button onClick={editHandler} className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-lg text-base border border-solid border-green-600 text-green-600">
          ویرایش
          <FiEdit className="text-[1.1rem] ms-2.5"/>
          
        </button>
        <button onClick={deleteHandler} className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-lg text-base border border-solid border-red-600 text-red-600">
          حذف آگهی
          <AiOutlineDelete className="text-[1.1rem] ms-2.5"/>
          </button>
      </div>
      <Toaster/>
    </div>
  );
};

export default DashboardCard;
