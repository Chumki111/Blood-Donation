import { Link } from 'react-router-dom'
import image from '../../assets/doctor.jpg'

const SectionOne = () => {
  return (
    <div className="px-10 md:mx-20 py-10">
       <div className="flex justify-center items-center">
       <div className="flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="">
        <h2 className='text-xl font-bold pb-7'>We are here not for income, but for outcome</h2>
        <p className='max-w-md'>Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when untrammelled and when nothing prevents</p>
        <div className='pt-5'>
           <Link to="/About">
           <button className="px-5 rounded py-3 before:absolute before:block before:inset-0 before:-z-10 before:bg-[#EB2C29] text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-black after:absolute relative inline-block">
              Explore More
            </button>
           </Link>
          </div>
      </div>
      <div className="relative group overflow-hidden">
        <img src={image} alt="Doctor" className='transform relative transition-transform duration-300 group-hover:scale-110'/>
      </div>
        </div>
       </div>
    </div>
  )
}

export default SectionOne