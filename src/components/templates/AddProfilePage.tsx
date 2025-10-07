"use client"

import { useState } from "react"

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

  return (
    <div>AddProfilePage</div>
  )
}

export default AddProfilePage