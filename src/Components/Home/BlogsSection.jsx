import { useQuery } from "@tanstack/react-query"
import Heading from "../Heading/Heading"
import { getAllBlogs } from "../../api/blogs"
import BlogCard from "../Card/BlogCard"
const BlogsSection = () => {
    const { data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => getAllBlogs()
    })
    return (
        <section className="bg-gray-100 py-14 mt-12">
            <div className="container mx-auto px-4 text-center">
                <Heading
                    subHeading="Our Blogs"
                    heading="Checkout Our Latest Blogs"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 ">
                    {blogs?.slice(0, 3)?.map(blog => <BlogCard key={blog._id} blog={blog} />)}
                </div>
            </div>
        </section>
    )
}

export default BlogsSection