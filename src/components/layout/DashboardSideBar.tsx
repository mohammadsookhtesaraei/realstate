import { CgProfile } from "react-icons/cg";

const DashboardSideBar = ({children,role,email}:{
    children:React.ReactNode,
    role:string;
    email:string
}) => {
  return (
    <div className="flex justify-between mt-20">
        <div className="flex flex-col items-center h-fit px-4 py-8 rounded-xl shadow-form ml-10 w-[220px]">
        <CgProfile className="text-blue-main text-5xl" />
        <p>{email}</p>
        </div>
        <div>{children}</div>
    </div>
  )
}

export default DashboardSideBar