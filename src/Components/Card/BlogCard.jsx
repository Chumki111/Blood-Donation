import { MdOutlineWatchLater } from "react-icons/md";
import { FaComments, FaPlus } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white group relative shadow-md rounded-md">
      {/* Image section */}
      <div className="relative overflow-hidden">
        <img src={blog.image} alt="" className="w-full h-[275px] object-cover duration-300 group-hover:scale-110 transform transition-transform" />
        {/* Hover effect for the image */}
        <div className="absolute inset-0 bg-black opacity-0 bg-opacity-50 group-hover:opacity-100  transition-opacity duration-300 flex justify-center items-center">
          <Link to={`/blog-details/${blog._id}`}>
          <FaPlus className="text-white text-3xl" />
          </Link>
        </div>
      </div>

      {/* Blog details section */}
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
      <div className="px-3">
        <h2 className="text-2xl font-semibold text-start pt-3">{blog.title}</h2>
        <p className="max-w-sm text-sm text-justify pt-2">{blog.content}</p>
        <div className="text-start py-6 px-4 group-hover:text-primary">
          <Link to={`/blog-details/${blog._id}`}>
          <button className="flex items-center text-lg">
            <span>Read More</span>
            <MdKeyboardDoubleArrowRight />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
