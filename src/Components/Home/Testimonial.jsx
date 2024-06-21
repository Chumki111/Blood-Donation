import { useQuery } from "@tanstack/react-query"
import { getAllTestimonial } from "../../api/testimonial"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const { data: testimonials } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => getAllTestimonial()

    })
    console.log(testimonials);
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {testimonials?.map(testimonial => <SwiperSlide key={testimonial}>
                    <div>
                        <h2>{testimonial.name}</h2>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={testimonial?.review_star}
                            readOnly
                        />
                    </div>
                </SwiperSlide>
                )}

            </Swiper>
        </div>
    )
}

export default Testimonial