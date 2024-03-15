import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar"
import { useEffect, useState } from "react"
import { ImSpinner9 } from 'react-icons/im';

const Main = () => {
    const [loading,setLoading] = useState(true);
    useEffect(() =>{
setTimeout(() =>{
    setLoading(false)
},1000)
    },[]);
    if (loading) {
        return <div className='flex justify-center items-center h-screen'><ImSpinner9 className='animate-spin m-auto text-6xl text-[#EB2C29]'/></div>; 
      }
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Main