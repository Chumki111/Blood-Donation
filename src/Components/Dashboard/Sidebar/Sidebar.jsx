import { useState } from "react"
// Icons

import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'

// import ToggleBtn from "../../Button/ToggleBtn"
import MenuItem from "./MenuItem"
import Avatar from "./Avatar"
import { Link } from "react-router-dom"
import { BsFillHouseGearFill } from "react-icons/bs";
import useGetUser from "../../../Hooks/useGetUser";
import AdminMenu from "./AdminMenu";
import VolunteerMenu from "./VolunteerMenu";
import DonarMenu from "./DonarMenu";

const Sidebar = () => {
  const [userInfo] = useGetUser();
  console.log(userInfo?.role);
    // const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)

  //   For guest/host menu item toggle button
  // const toggleHandler = event => {
  //   setToggle(event.target.checked)
  // }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
     {/* Small Screen Navbar */}
     <div className='bg-[#EB2C29] text-gray-800 flex justify-between md:hidden'>
     <div>
       <div className='block cursor-pointer p-4 font-bold'>
         <Avatar/>
       </div>
     </div>

     <button
       onClick={handleToggle}
       className='mobile-menu-button p-4 focus:outline-none focus:bg-rose-500'
     >
       <AiOutlineBars className='h-5 w-5' />
     </button>
   </div>
   {/* Sidebar */}
   <div
     className={`z-10 md:fixed flex flex-col  overflow-x-hidden bg-rose-700 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
       isActive && '-translate-x-full'
     }  md:translate-x-0  transition duration-200 ease-in-out`}
   >
     <div>
       <div>
         <div className='w-full hidden md:flex px-4 py-2 justify-center items-center  mx-auto'>
           <Avatar/>

         </div>
       </div>
       <hr />

       {/* Nav Items */}
       <div className='flex flex-col flex-1 mt-6'>
         {/* If a user is host */}
         {/* <ToggleBtn toggleHandler={toggleHandler} /> */}
         <nav>
<MenuItem
             icon={BsFillHouseGearFill}
             label='Dashboard Home'
             address='/dashboard'
           />

           {userInfo?.role === 'Admin' && <AdminMenu/>}
           {userInfo?.role === 'Volunteer' && <VolunteerMenu/>}
           {userInfo?.role === 'Donar' && <DonarMenu/>}
           
          
       <MenuItem
         icon={FcSettings}
         label='Profile'
         address='/dashboard/profile'
       />
       <Link to="/">
      <button className='flex  w-full items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:bg-rose-500 hover:translate-x-1 text-rose-50'>
         <GrLogout className='w-5 h-5' />

         <span className='mx-4 font-medium'>Go To Home</span>
       </button>
      </Link>

           {/* Menu Items */}
         </nav>
       </div>
     </div>

     <div>
     
       
     </div>
   </div>
 </>
  )
}

export default Sidebar