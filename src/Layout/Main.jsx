import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Footer from "../Components/Shared/Footer";
import ScrollToTop from "react-scroll-to-top";
const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <FaSpinner className='animate-spin m-auto text-4xl text-[#EB2C29]' />
      </div>
    );
  }

  return (
    <div className="max-w-[100rem] mx-auto relative">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop
        smooth
        color="#EB2C29"
        className="rounded-full"
        style={{
          width: 50,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="text-white text-xl">↑</div>
      </ScrollToTop>
    </div>
  );
}

export default Main;
