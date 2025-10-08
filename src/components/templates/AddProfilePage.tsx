'use client';

import { useState } from 'react';

import CustomDatePicker from '@/module/CustomDatePicker';
import RadioList from '@/module/RadioList';
import TextInput from '@/module/TextInput';
import TextList from '@/module/TextList';

export interface ProfileDataType {
  title: string;
  description: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  constructionDate: Date;
  category: string;
  rules: never[];
  amenities: never[];
}

const AddProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileDataType>({
    title: '',
    description: '',
    location: '',
    phone: '',
    price: '',
    realState: '',
    constructionDate: new Date(),
    category: '',
    rules: [],
    amenities: [],
  });

  const submitHandler = async() => {
   const res=await fetch("/api/profile",{
    method:"POST",
    body:JSON.stringify(profileData),
    headers:{"Content-Type":"application/json"}
   });
   const data=await res.json();
   if(data.error){
    console.log("error");
   }else {
    console.log(data);
   }
  };

  return (
    <div className="mb-[150px] flex flex-col">
      <h3 className="bg-dashboard text-blue-main mb-20 w-full rounded-lg px-4 py-2.5 text-2xl font-normal">
        ثبت آگهی
      </h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <button
        className="bg-blue-main cursor-pointer rounded-md border-none p-2.5 text-base text-white transition-all delay-75 ease-in hover:bg-blue-950"
        onClick={submitHandler}
      >
        ثبت آگهی
      </button>
    </div>
  );
};

export default AddProfilePage;
