import { useQuery } from "@tanstack/react-query"
import { getAllTestimonial } from "../../api/testimonial"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "./styles.css";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const { data: testimonials } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => getAllTestimonial()

    })
    console.log(testimonials);
    return (
        <div className="px-10 md:mx-20 py-10">
            <div className="text-center py-5">
                <h3 className="text-red-600">TESTIMONIAL</h3>
                <h2 className="text-5xl py-4">What Our Clients Say</h2>
            </div>

            <Swiper className="mySwiper">
                {
                    testimonials?.map(testimonial => <SwiperSlide key={testimonial._id}>
                        <div className="shadow-md my-5 rounded">
                            <div className="flex justify-center">
                                <Rating className="p-3"
                                    style={{ maxWidth: 150 }}
                                    value={testimonial?.review_star}
                                    readOnly
                                />
                            </div>
                            <p className="p-5 text-center">{testimonial.review}</p>
                            <div className="flex justify-center items-center">
                                <img src={testimonial.image} alt="avatar" className="w-24 h-24 rounded-full object-cover my-5" />
                            </div>
                            <div className="flex gap-3 justify-center items-center pb-7">
                                <h3 className="font-medium text-xl">{testimonial.name}</h3>
                                <span>{testimonial.
                                    profession}</span>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>

    )
}

export default Testimonial