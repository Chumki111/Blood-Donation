import { useQuery } from "@tanstack/react-query"
import PrimaryHero from "../../Components/Hero/PrimaryHero"
import { getAllBlogs } from "../../api/blogs"
import BlogCard from "../../Components/Card/BlogCard"



const Blogs = () => {
  const { data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => getAllBlogs()
})
  return (
    <div>
       <PrimaryHero text="Blogs"/>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 px-10 md:mx-20 mt-16">
                    {blogs?.map(blog => <BlogCard key={blog._id} blog={blog} />)}
                </div>
    </div>
  )
}

export default Blogs