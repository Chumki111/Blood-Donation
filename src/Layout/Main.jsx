import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar"
import { useEffect, useState } from "react"
import { FaSpinner } from "react-icons/fa";
import Footer from "../Components/Shared/Footer";

const Main = () => {
    const [loading,setLoading] = useState(true);
    useEffect(() =>{
setTimeout(() =>{
    setLoading(false)
},1000)
    },[]);
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
          
          <FaSpinner className='animate-spin m-auto text-4xl text-[#EB2C29]'/></div>; 
      }
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Main