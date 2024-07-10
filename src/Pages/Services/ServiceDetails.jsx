import { useLoaderData } from "react-router-dom"
import PrimaryHero from "../../Components/Hero/PrimaryHero"
import RightSide from "../../Components/Service/RightSide";


const ServiceDetails = () => {
  const service = useLoaderData();
  return (
    <div>
        <PrimaryHero text="Service Details" linkText="Services" linkHref="/services"/>
        <div className="flex flex-col">
          <div className="px-10 md:mx-20 mt-16">
             <div className="flex flex-col lg:flex-row space-x-6">
              {/* right side */}
              <RightSide/>
               {/* left side */}
               <div className="flex-1">
                   <div className="">
                   <h2>{service.title_1}</h2>
                   </div>
               </div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceDetails