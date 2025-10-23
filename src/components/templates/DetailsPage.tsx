import { AiOutlinePhone } from 'react-icons/ai';
import { BiCalendarCheck } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { SiHomebridge } from 'react-icons/si';

import { icons } from '@/constants/icons';
import { categories } from '@/constants/string';
import ItemList from '@/module/ItemList';
import ShareButton from '@/module/ShareButton';
import Title from '@/module/Title';
import { e2p, sp } from '@/utils/replaceNumber';

interface DetailsPageProps {
  data: {
    _id: string;
    title: string;
    description: string;
    location: string;
    phone: string;
    realState: string;
    price: number;
    constructionDate: string;
    category: 'villa' | 'apartment' | 'store' | 'office';
    amenities: string[];
    rules: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

const DetailsPage = ({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}: DetailsPageProps) => {
  const Icon = icons[category];
  return (
    <div className="mt-[60px] flex">
      {/* main */}
      <div className="w-full">
        <h1 className="text-main-blue mb-2.5 text-[1.3rem] font-normal">
          {title}
        </h1>
        <span className="mb-[50px] flex h-4 items-start text-gray-400">
          <HiOutlineLocationMarker className="me-1.5 text-lg" />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p className="mb-[50px] text-justify">{description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      {/* sideBar */}
      <div className="ms-[40px] w-[250px]">
        <div className="shadow-form mb-5 flex flex-col items-center rounded-lg p-2.5">
          <SiHomebridge className="text-blue-main mt-2.5 mb-5 px-0 text-5xl" />
          <p className="text-[1.1rem] font-normal">املاک {realState}</p>
          <span className="mt-5 flex items-center text-gray-400">
            <AiOutlinePhone className="m-0 me-[5px] text-2xl text-gray-400" />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className="shadow-form mb-5 flex flex-col items-center rounded-lg p-2.5 px-0 pt-5 pb-0">
          <p className="mb-5 flex h-5 items-center text-gray-400">
            <Icon className="text-blue-main me-[5px] text-2xl" />
            {categories[category]}
          </p>
          <p className="mb-5 flex h-5 items-center text-gray-400">
            {sp(price)} تومان
          </p>
          <p className="mb-5 flex h-5 items-center text-gray-400">
            <BiCalendarCheck className="text-blue-main me-[5px] text-2xl" />
            {new Date(constructionDate).toLocaleDateString('fa-IR')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
