const ServiceCard = ({ service, reverse ,index}) => {
    return (
      <div className={`flex ${reverse ? 'flex-col md:flex-row-reverse text-right' : 'flex-col md:flex-row'} items-start`}>
        
        <img src={service.image} alt={service.title} className="w-full h-5/6 object-cover mb-4 rounded-lg" />
        <div className="flex flex-col ml-4">
            <h1 className="text-[#e7e7e7] text-7xl font-bold">0{index+1}</h1>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600 text-justify">{service.description}</p>
        </div>
      </div>
    )
  }
  
  export default ServiceCard;
  