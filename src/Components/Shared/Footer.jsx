import { BiSolidDonateBlood } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="flex flex-col">
                <div className="flex flex-col justify-around gap-5 dark-black py-8 px-6 md:flex-row md:gap-0 items-center text-white">
                    {/* <div className="flex items-center justify-center gap-3 text-xl">
                        <BiSolidDonateBlood className="hidden md:flex text-[45px] text-white" />
                        <p>BloodUnity</p>
                    </div> */}
                    <div>
                        <Link to='/About'>
                        <h2 className="text-2xl font-medium hover:text-red-500">About Us</h2>
                        </Link>
                        <p className="text-sm max-w-sm py-3 mt-5">
                            We are committed to providing essential blood donation services to the community. Our mission is to ensure a safe and reliable blood supply for patients in need, through voluntary blood donations and community engagement.
                        </p>
                        <p className="py-5"><span className="font-semibold">Phone</span> : +1(456)657-887, 999</p>
                        <p><span className="font-semibold">Email</span> : contactblood@gmail.com</p>
                    </div>
                    <div className="cursor-pointer">
                        <h2>Quick Links</h2>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>Home</span>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                           <Link to="Donation Requests">
                           <span className='font-medium'>Donation Requests</span>
                           </Link>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                           <Link to="/Blogs">
                           <span className='font-medium'>Blogs</span>
                            </Link>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <Link to="About">
                            <span className='font-medium'>About</span>
                            </Link>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <h2>Our Services</h2>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>Health Check</span>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>24h Service</span>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>Blood Bank</span>
                        </div>
                        {/* <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>Help People</span>
                        </div> */}
                    </div>
                </div>
               
                <aside className="light-black text-white text-center text-sm">
                <div className="bg-white h-[2px] w-[80%] flex justify-center items-center mx-auto"></div>
                    <p className="py-10">&copy; 2024 NavigateUI. All Rights Reserved.</p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;
