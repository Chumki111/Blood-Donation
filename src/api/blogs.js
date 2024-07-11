import axiosSecure from ".";

// fetch all blogs
export const getAllBlogs=async()=>{
    const {data} = await axiosSecure('/blogs');
    return data;
}
