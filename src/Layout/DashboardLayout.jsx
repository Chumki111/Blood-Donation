import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar"


const DashboardLayout = () => {
  return (
    <>
     <div className='relative min-h-screen md:flex'>
        <Sidebar/>
    {/* Sidebar Component */}
    <div className='flex-1  md:ml-64'>
      <div className='p-5'>
        {/* Outlet for dynamic contents */}
      <Outlet/>
      </div>
    </div>
  </div>
    </>
    
   
  )
}

export default DashboardLayout