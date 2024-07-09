import { useQuery } from "@tanstack/react-query"
import Heading from "../Heading/Heading"
import { getAllServices } from "../../api/service"
import ServiceCard from "../Card/ServiceCard"

const ServicesSection = () => {
    const { data: services } = useQuery({
        queryKey: ['services'],
        queryFn: async () => getAllServices()
    })

    return (
        <div className="flex flex-col">
            <div className="px-10 md:mx-20 mt-16">
                <Heading heading="Our Best Services" subHeading="WHAT WE DO" />
                <div className="grid grid-cols-1 gap-6 mt-10">
                    {services?.map((service, index) => (
                        <div
                            key={service._id}
                            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                            <ServiceCard service={service} reverse={index % 2 !== 0} index={index}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
