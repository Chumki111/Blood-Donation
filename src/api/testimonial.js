import axiosSecure from ".";

// fetch all donations
export const getAllTestimonial=async()=>{
    const {data} = await axiosSecure('/Testimonial');
    return data;
}