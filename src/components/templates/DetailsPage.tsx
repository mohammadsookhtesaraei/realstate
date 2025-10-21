

import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";
import Title from "@/module/Title";
import ItemList from "@/module/ItemList";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/string";
import ShareButton from "@/module/ShareButton";

interface DetailsPageProps {
  data:{
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
    }
};




const DetailsPage = ({data:{title,location,description,amenities,rules,realState,phone,price,category,constructionDate}}:DetailsPageProps) => {
 const Icon=icons[category];
  return (
    <div className="flex mt-[60px]">
        {/* main */}
        <div className="w-full">
            <h1 className="text-main-blue text-[1.3rem] font-normal mb-2.5">{title}</h1>
            <span className="flex items-start h-4 mb-[50px] text-gray-400">
                <HiOutlineLocationMarker className="text-lg me-1.5"/>
                {location}
            </span>
            <Title>توضیحات</Title>
            <p className="text-justify mb-[50px]">{description}</p>
            <Title>امکانات رفاهی</Title>
             <ItemList data={amenities}/>
           <Title>قوانین</Title>
          <ItemList data={rules} />
        </div>
        {/* sideBar */}
        <div className="w-[250px] ms-[40px]">
          <div className="shadow-form p-2.5 rounded-lg mb-5 flex flex-col items-center">
              <SiHomebridge className="text-5xl text-blue-main mt-2.5 px-0 mb-5" />
               <p className="text-[1.1rem] font-normal">املاک {realState}</p>
            <span className="flex items-center text-gray-400 mt-5">
            <AiOutlinePhone  className="text-2xl m-0 me-[5px] text-gray-400"/>
            {e2p(phone)}
          </span>
          </div>
          <ShareButton/>
           <div className="shadow-form p-2.5 rounded-lg mb-5 flex flex-col items-center pt-5 px-0 pb-0">
          <p className="flex items-center text-gray-400 mb-5 h-5">
            <Icon className="text-2xl me-[5px] text-blue-main"/>
            {categories[category]}
          </p>
          <p className="flex items-center text-gray-400 mb-5 h-5">{sp(price)} تومان</p>
          <p className="flex items-center text-gray-400 mb-5 h-5">
            <BiCalendarCheck className="text-2xl me-[5px] text-blue-main" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
        </div>
    </div>
  )
}

export default DetailsPage