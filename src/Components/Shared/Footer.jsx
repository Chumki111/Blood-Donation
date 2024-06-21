import { BiSolidDonateBlood } from "react-icons/bi"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"



const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="flex flex-col">
               
                <div className="flex flex-col justify-around gap-5 dark-black py-8 px-6 md:flex-row md:gap-0 items-center text-white">
                    {/* <div className="flex items-center justify-center gap-3 text-xl">
                        <BiSolidDonateBlood className="hidden md:flex text-[45px] text-white" />
                        <p>BloodUnity</p>
                    </div> */}
                    <div className="">
                        <h2>About Us</h2>
                        <p className="text-sm max-w-sm py-3">Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
                    </div>
                    <div className="cursor-pointer">
                        <h2>Quick Links</h2>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' /> 
                            <span className='font-medium'>Services</span>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' /> 
                            <span className='font-medium'>Blood Bank</span>
                        </div>
                        <div className='flex items-center transform hover:translate-x-2 transition duration-300 hover:text-red-500'>
                            <MdKeyboardDoubleArrowRight className='text-red-500 text-2xl md:text-3xl' /> 
                            <span className='font-medium'>24h Service</span>
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
                <aside className="light-black text-white py-5 text-center text-sm">
                    <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
                </aside>
                
            </footer>
        </div>
    )
}

export default Footer