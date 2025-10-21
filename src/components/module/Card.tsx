import Link from 'next/link';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { icons } from '@/constants/icons';
import { FilterDataType } from '@/app/buy-residential/page';
import { sp } from '@/utils/replaceNumber';

const Card = ({ _id, category, title, location, price }: FilterDataType) => {
  const Icon = icons[category];

  return (
    <div className="border-icons m-2.5 w-[250px] rounded-[10px] border-2 p-2.5">
      <div>
        {Icon && (
          <Icon className="bg-icons text-blue-main rounded-[5px] p-[3px] text-2xl" />
        )}
      </div>
      <p className="my-2.5 px-0 font-normal">{title}</p>
      <p className="flex text-[0.9rem] text-gray-400">
        <HiOutlineLocationMarker className="me-[5px] text-base" />
        {location}
      </p>
      <span className="mt-2.5 block text-[0.9rem] font-normal">
        {sp(price)}تومان
      </span>
      <Link
        className="text-blue-main mt-5 flex items-center justify-between text-[0.95rem] font-normal"
        href={`/buy-residential/${_id}`}
      >
        مشاهده آگهی
        <BiLeftArrowAlt className="text-2xl" />
      </Link>
    </div>
  );
};

export default Card;
