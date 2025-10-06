const DashboardPage = ({createdAt}:{
  createdAt:string
}) => {

  return (
    <div>
      <h3 className="text-blue-main mb-5 text-2xl font-normal">سلام 👋</h3>
      <p className="text-gray-400">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>
      <div className="bg-dashboard mt-[100px] flex w-fit rounded-md px-2.5 py-[5px]">
        <p className="ms-2.5 font-normal">تاریخ عضویت:</p>
        <span className="text-blue-main"><span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span></span>
      </div>
    </div>
  );
};

export default DashboardPage;
