import { useState } from "react"
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import ToggleBtn from "../../Button/ToggleBtn"
import MenuItem from "./MenuItem"
import Avatar from "./Avatar"
import { Link } from "react-router-dom"


const Sidebar = () => {
    const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)

  //   For guest/host menu item toggle button
  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
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
       className='mobile-menu-button p-4 focus:outline-none focus:bg-rose-200'
     >
       <AiOutlineBars className='h-5 w-5' />
     </button>
   </div>
   {/* Sidebar */}
   <div
     className={`z-10 md:fixed flex flex-col  overflow-x-hidden bg-[#EB2C29] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
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
         <ToggleBtn toggleHandler={toggleHandler} />
         <nav>
           <MenuItem
             icon={BsGraphUp}
             label='Statistics'
             address='/dashboard'
           />
           <MenuItem
         icon={FcSettings}
         label='Profile'
         address='/dashboard/profile'
       />

           {/* Menu Items */}
         </nav>
       </div>
     </div>

     <div>
     
       <Link to="/">
      <button className='flex w-full items-center px-4 py-2 mt-5  bg-[#EB2C29]  text-rose-50 shadow-md transition-colors duration-300 transform'>
         <GrLogout className='w-5 h-5' />

         <span className='mx-4 font-medium'>Go To Home</span>
       </button>
      </Link>
     </div>
   </div>
 </>
  )
}

export default Sidebar