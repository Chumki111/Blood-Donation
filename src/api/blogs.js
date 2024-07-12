import axiosSecure from ".";

// fetch all blogs
export const getAllBlogs=async()=>{
    const {data} = await axiosSecure('/blogs');
    return data;
}
// fetch single blog
export const getSingleBlog=async(id)=>{
    const {data} = await axiosSecure(`/blog/${id}`);
    return data;
}
// fetch single blog
export const postComment=async(id,comment)=>{
    const {data} = await axiosSecure.post(`/blog/${id}/comment`,comment);
    return data;
}