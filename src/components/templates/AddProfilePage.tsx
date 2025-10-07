"use client"

import { useState } from "react"
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";

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
    const [profileData,setProfileData]=useState<ProfileDataType>({
     title:"",
     description:"",
     location:"",
     phone:"",
     price:"",
     realState:"",
     constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
    });

    const submitHandler=()=>{
      console.log(profileData);
    }

  return (
    <div className="flex flex-col mb-[150px]">
      <h3 className="text-2xl font-normal mb-20 w-full bg-dashboard text-blue-main rounded-lg py-2.5 px-4">ثبت آگهی</h3>
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
      <RadioList  profileData={profileData} setProfileData={setProfileData}/>

      <button onClick={submitHandler}>ثبت آگهی</button>

    </div>
  )
}

export default AddProfilePage