import { useQuery } from "@tanstack/react-query"
import { getAllTestimonial } from "../../api/testimonial"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RiPauseMiniLine } from "react-icons/ri";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Heading from "../Heading/Heading";

const Testimonial = () => {
    const { data: testimonials } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => getAllTestimonial()

    })
    return (
        <div className="px-10 md:mx-20 py-10">
             <Heading heading="What Our Clients Say" subHeading="TESTIMONIAL"/>
            
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper py-5"
            >
                {/* testimonial map */}
                {
                    testimonials?.map(testimonial => <SwiperSlide key={testimonial._id}>
                        <div className='w-full lg:w-[70%] md:p-6 lg:p-10   bg-white rounded-md shadow-xl shadow-[#dbf0d0]'>
                            <div className="flex justify-between items-center">
                                <RiPauseMiniLine className='text-4xl md:text-5xl lg:text-7xl text-primary text-third' />
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={testimonial?.review_star}
                                    readOnly
                                />
                            </div>
                            <p className='text-start  py-5 text-xl text-zinc-400 leading-8'>
                                {testimonial.review}
                            </p>
                            <div className='py-5 flex space-x-4'>
                                <div className="h-24 w-24">
                                    <img src={testimonial.image} alt="" className='h-full w-full object-contain  rounded-md' />
                                </div>
                                <div className="pt-2"><h3 className='text-3xl font-semibold text-primary'>{testimonial.name}</h3>
                                    <span className='text-zinc-400 block text-start pt-1'>{testimonial.
                                        profession}</span></div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>

    )
}

export default Testimonial