

import { FilterDataType } from "@/app/buy-residential/page";
import AdminCard from "@/module/AdminCard";

interface AdminPage {
    profiles:FilterDataType []
}

const AdminPage = ({profiles}:AdminPage) => {
   
  return (
    <div>
         {profiles.length ? null : (
        <p className="text-red-700 bg-red-700/75 text-2xl py-2.5 px-[15px] rounded-lg">هیچ آگهی در انتظار تاییدی وجود ندارد</p>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  
  )
}

export default AdminPage