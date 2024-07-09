import axiosSecure from ".";

// fetch all donations
export const getAllServices=async()=>{
    const {data} = await axiosSecure('/services');
    return data;
}
// fetch all donations
export const getSingleService=async(id)=>{
    const {data} = await axiosSecure(`/service/${id}`);
    return data;
}