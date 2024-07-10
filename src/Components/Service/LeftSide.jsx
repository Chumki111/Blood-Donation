import { FaStar, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';

const icons = [FaStar, FaShieldAlt, FaGlobeAmericas];
const LeftSide = ({ service }) => {
    console.log(service);
    return (
        <div>
            <div className="">
                <h1 className="text-5xl font-bold pb-10">{service.title_1}</h1>
                <p className="text-gray-600 text-justify pb-10">{service.description_2}</p>


                <img src={service.image} alt="" className="w-full h-full object-contain rounded-md" />
                <h1 className="text-4xl font-semibold pt-10" >{service.title_2}</h1>
                <p className="text-gray-600 text-justify pt-10">{service.description_3_3}</p>
                <div className="flex space-x-5 py-10">
                    {/* <img src={image_2} alt="" />
            <img src={image_3} alt="" /> */}
                    <img src={service.image_1} alt="" className="w-[390px] h-[300px] rounded-md" />
                    <img src={service.image_2} alt="" className="w-[390px] h-[300px] object-fit rounded-md" />
                </div>

                <div className="">
                    <h3 className="text-4xl font-semibold pb-8">Key Features</h3>
                    <div className="space-y-6">
      {service?.key_features?.map((feature, index) => {
        const Icon = icons[index % icons.length]; // Rotate through the icons
        return (
          <div
            key={index}
            className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110">
              <Icon className="text-2xl" />
            </div>
            <p className="ml-4 text-lg">{feature}</p>
          </div>
        );
      })}
    </div>
                </div>
                </div>
        </div>
    )
}

export default LeftSide