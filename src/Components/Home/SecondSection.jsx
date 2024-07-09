import { Link } from 'react-router-dom';
import image1 from '../../assets/help1.png';
import image2 from '../../assets/help2.png';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SecondSection = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='px-10 md:mx-20 mt-16'>
      <div className='flex flex-col lg:flex-row gap-6 md:gap-12'>
        <div className="relative border-primary-color">
          <img src={image1} alt="First Image" className="block w-full md:w-auto" />
          <img src={image2} alt="Second Image" className="absolute top-1/2 left-1/2 md:left-[75%] transform -translate-x-1/3 -translate-y-1/2 w-2/3 md:w-auto" />
        </div>
        <div className='px-4 md:px-8'>
          <h3 className='text-primary pt-4 text-lg md:text-xl font-semibold'>HELP THE PEOPLE IN NEED</h3>
          <h2 className='text-3xl md:text-5xl font-medium py-4 leading-snug'>
            Welcome to Blood <br /> Donors Organization
          </h2>
          <p className="text-md md:text-lg max-w-md text-gray-700 leading-relaxed">
            Join us in saving lives by donating blood. Your contribution can make a significant difference in someone's life. Be a hero today!
          </p>
          <div className='pt-6 md:pt-10 flex flex-col md:flex-row justify-between gap-4 md:gap-0'>
            <div>
              <div className='flex items-center gap-3'>
                <MdKeyboardDoubleArrowRight className='text-primary text-2xl md:text-3xl' /> <span className='font-medium'>Good Service</span>
              </div>
              <div className='flex items-center gap-3 py-1'>
                <MdKeyboardDoubleArrowRight className='text-primary text-2xl md:text-3xl' /> <span className='font-medium'>Help People</span>
              </div>
              <div className='flex items-center gap-3'>
                <MdKeyboardDoubleArrowRight className='text-primary text-2xl md:text-3xl' /> <span className='font-medium'>Hugine Tools</span>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-3'>
                <MdKeyboardDoubleArrowRight className='text-primary text-2xl md:text-3xl' /> <span className='font-medium'>24h Service</span>
              </div>
              <div className='flex items-center gap-3 py-1'>
                <MdKeyboardDoubleArrowRight className='text-primary text-2xl md:text-3xl' /> <span className='font-medium'>Health Check</span>
              </div>
              <div className='flex items-center gap-3'>
                <MdKeyboardDoubleArrowRight className='text-primary text-2xl md:text-3xl' /> <span className='font-medium'>Blood Bank</span>
              </div>
            </div>
          </div>
          <div className='pt-5'>
           <Link to="/About">
           <button className="px-5 rounded-md py-3 before:absolute before:block before:inset-0 before:-z-10 before:bg-primary text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-black after:absolute relative inline-block">
              Explore More
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SecondSection;
