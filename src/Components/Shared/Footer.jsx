import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-12">
            <footer className="flex flex-col">
                
                <div className="flex flex-col lg:flex-row justify-around gap-5 dark-black py-20 lg:px-10 md:gap-0 items-center text-white">
                    <div className="">
                        <Link to='/About'>
                            <h2 className="text-4xl font-medium hover:text-red-500">About Us</h2>
                        </Link>
                        <p className="text-sm max-w-sm py-3 mt-5">
                            We are committed to providing essential blood donation services to the community. Our mission is to ensure a safe and reliable blood supply for patients in need, through voluntary blood donations and community engagement.
                        </p>
                        <p className="py-5"><span className="font-semibold">Phone</span> : +1(456)657-887, 999</p>
                        <p><span className="font-semibold">Email</span> : contactblood@gmail.com</p>
                    </div>
                    <div className="cursor-pointer text-start">
                        <h2 className="text-4xl font-medium">Quick Links</h2>
                       <div className="mt-6">
                       <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <Link to="/">
                            <span className='font-medium'>Home</span>
                            </Link>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500 py-2'>
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
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500 py-2'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <Link to="About">
                                <span className='font-medium'>About</span>
                            </Link>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <Link to="Contact">
                                <span className='font-medium'>Contact</span>
                            </Link>
                        </div>
                       </div>
                    </div>
                    <div className="cursor-pointer">
                        <h2 className="text-4xl font-medium">Our Services</h2>
                       <div className="mt-6">
                       <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>Health Check</span>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500 py-2'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>24h Service</span>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>Blood Bank</span>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500 py-2'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>Donate Process</span>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' />
                            <span className='font-medium'>Blood Info</span>
                        </div>
                       </div>
                    </div>
                </div>
                <aside className="dark-black text-white text-center text-sm">
                    <div className="bg-white h-[2px] w-[80%] mx-auto my-4"></div>
                    <p className="py-10">&copy; 2024 BloodCamp. All Rights Reserved.</p>
                </aside>
               
            </footer>
        </div>
    );
}

export default Footer;
