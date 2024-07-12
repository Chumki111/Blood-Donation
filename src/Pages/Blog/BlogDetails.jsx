import { useLoaderData } from "react-router-dom"
import PrimaryHero from "../../Components/Hero/PrimaryHero"

const BlogDetails = () => {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <div>
      <PrimaryHero text="Blog Details" linkText="Blogs" linkHref="/Blogs"/>
      <div className="px-8 md:mx-10 lg:mx-16 mt-16">
       <div className="">
     <img src={blog.image} alt="" className="w-full h-full md:h-[350px] lg:h-[500px] object-cover rounded-md"/>
       </div>
       <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold pt-7">{blog.title}</h2>
       <div className="text-gray-600">
       <p className="pt-5">{blog.description}{blog.content}</p>
       <p className="pt-5">{blog.description_1}</p>
       <p className="bg-primary mt-6 px-6 py-8 text-white text-lg rounded-md">{blog.content}</p>
       <p className="pt-5">{blog.description}{blog.content}</p>
       <p className="pt-5">{blog.description_1}</p>
       </div>
       <div className="flex flex-col lg:flex-row gap-7 mt-6">
        <img src={blog.image_2} alt="" className="lg:w-[400px] md:w-full rounded-md"/>
        <img src={blog.image_3} alt="" className="lg:w-[400px] md:w-full rounded-md"/>
       </div>
<p className="flex py-6 items-center">
        <span className="text-xl font-semibold">Post Tags :</span>{blog?.tags?.map((tag, index) => (
       <span key={index} className="bg-[#f1f1f1] mr-1 ml-4 px-3 py-1 rounded-md">{tag}</span>
       
    ))}</p>
     <hr />
   
      
      </div>
    </div>
  )
}

export default BlogDetails