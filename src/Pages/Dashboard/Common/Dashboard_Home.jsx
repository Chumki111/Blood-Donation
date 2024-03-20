import useGetUser from "../../../Hooks/useGetUser"
import AdminHome from "../../../Components/Dashboard/Sidebar/AdminHome";


const Dashboard_Home = () => {
  const [userInfo] = useGetUser();
 
  return (
    <>
    <div>
      <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-10">Welcome Back <span className="text-rose-500">{userInfo?.name}</span></h2>
    </div>

    {userInfo?.role === "Admin" && <AdminHome/>}
    {userInfo?.role === "Volunteer" && <AdminHome/>}
    {userInfo?.role === "Donar" && <AdminHome/>}
    
    </>
  )
}

export default Dashboard_Home