import { Link } from "react-router-dom";

const ServiceCard = ({ service, reverse, index }) => {
  return (
    <div className={`flex ${reverse ? 'flex-col lg:flex-row-reverse text-right' : 'flex-col lg:flex-row'} items-start lg:gap-10`}>
      {/* image section */}
      <img src={service.image} alt={service.title} className="w-full  h-[60%] lg:h-[90%] object-cover lg:mb-4 rounded-lg" />
      {/* text section */}
      <div className="flex flex-col ml-4 lg:py-5">
        <h1 className="text-[#e7e7e7] text-6xl md:text-7xl font-bold py-4">0{index + 1}</h1>
        <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-600 text-justify">{service.description}</p>
        <div className='pt-7'>
          <Link to={`service-details/${service._id}`}>
            <button className="px-5 rounded-md py-3 before:absolute before:block before:inset-0 before:-z-10 before:bg-primary text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-black after:absolute relative inline-block">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;
