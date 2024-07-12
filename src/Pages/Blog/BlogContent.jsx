import { MdOutlineWatchLater } from "react-icons/md";
import { FaComments } from "react-icons/fa";

const BlogContent = ({ blog }) => {
    return (
        <>
            <div className="flex space-x-5 text-primary pt-3 px-3">
                <p className="flex items-center space-x-2">
                    <MdOutlineWatchLater />
                    <span>{blog.date}</span>
                </p>
                <p className="flex items-center space-x-2">
                    <FaComments />
                    <span>{blog.comments.length} comments</span>
                </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold pt-7">
                {blog.title}
            </h2>
            <div className="text-gray-600">
                <p className="pt-5">{blog.description}</p>
                <p className="pt-5">{blog.description_1}</p>
                <p className="bg-primary mt-6 px-6 py-8 text-white text-lg rounded-md">
                    {blog.content}
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-7 mt-6">
                <img
                    src={blog.image_2}
                    alt=""
                    className="lg:w-[400px] md:w-full rounded-md"
                />
                <img
                    src={blog.image_3}
                    alt=""
                    className="lg:w-[400px] md:w-full rounded-md"
                />
            </div>
        </>
    )
}

export default BlogContent