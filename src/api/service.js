import axiosSecure from ".";

// fetch all donations
export const getAllServices=async()=>{
    const {data} = await axiosSecure('/services');
    return data;
}