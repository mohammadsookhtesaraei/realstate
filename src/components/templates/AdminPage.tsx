import { FilterDataType } from '@/app/buy-residential/page';

import AdminCard from '@/module/AdminCard';

interface AdminPage {
  profiles: FilterDataType[];
}

const AdminPage = ({ profiles }: AdminPage) => {
  return (
    <div>
      {profiles.length ? null : (
        <p className="rounded-lg bg-red-700/75 px-[15px] py-2.5 text-2xl text-red-700">
          هیچ آگهی در انتظار تاییدی وجود ندارد
        </p>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
};

export default AdminPage;
