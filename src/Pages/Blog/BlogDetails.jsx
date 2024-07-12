import { useLoaderData } from "react-router-dom";
import PrimaryHero from "../../Components/Hero/PrimaryHero";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaComments } from "react-icons/fa";

const BlogDetails = () => {
  const blog = useLoaderData();
 
console.log(blog);
 

  return (
    <div>
      <PrimaryHero text="Blog Details" linkText="Blogs" linkHref="/Blogs" />
      <div className="px-8 md:mx-10 lg:mx-16 mt-16">
        <div className="">
          <img src={blog.image} alt="" className="w-full h-full md:h-[350px] lg:h-[500px] object-cover rounded-md" />
        </div>
        <div className="flex space-x-5 text-primary pt-3 px-3">
        <p className="flex items-center space-x-2">
          <MdOutlineWatchLater />
          <span>{blog.date}</span>
        </p>
        <p className="flex items-center space-x-2">
          <FaComments />
          <span>{blog.comments?.length} comments</span>
        </p>
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
          <img src={blog.image_2} alt="" className="lg:w-[400px] md:w-full rounded-md" />
          <img src={blog.image_3} alt="" className="lg:w-[400px] md:w-full rounded-md" />
        </div>
        <p className="flex flex-wrap py-6 items-center">
          <span className="text-xl font-semibold mr-4">Post Tags:</span>
          {blog?.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-primary text-white hover:bg-red-700 transition-colors duration-200 ease-in-out mr-2 px-3 py-1 rounded-full shadow-sm cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </p>
        <hr />
        
       <div className=" border border-primary rounded-md md:ml-12 mt-6">
        <div className="flex space-x-5 items-center">
        <img src={blog.author_image} alt="" className="h-[150px] rounded-md py-3 ml-6"/>
        <div className="">
          <h3 className="text-lg md:text-2xl text-primary
           pb-2">{blog.author}</h3>
          <p className="text-gray-500">{blog.author_description}</p>
        </div>
        </div>
       </div>
       <div className="mt-6">
  <h2 className="text-xl font-semibold">{blog.comments?.length} comments</h2>
  <div className="mt-4 space-y-6">
    {blog.comments?.map((comment, index) => (
      <div key={index} className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <div className="mr-4">
            <img
              className="w-10 h-10 rounded-full"
              src={comment.avatar}
              alt={comment.name}
            />
          </div>
          <div>
            <h3 className="font-semibold">{comment.user}</h3>
            <p className="text-sm text-gray-600">{comment.date}</p>
          </div>
        </div>
        <p className="text-gray-700">{comment.comment}</p>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default BlogDetails;
