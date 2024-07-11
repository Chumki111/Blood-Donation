import { useQuery } from "@tanstack/react-query"
import Heading from "../Heading/Heading"
import { getAllBlogs } from "../../api/blogs"


const BlogsSection = () => {
    const {data : blogs} = useQuery({
        queryKey :['blogs'],
        queryFn: async () => getAllBlogs()
    })

  return (
  <section className="bg-gray-100 py-14 mt-12">
    <div className="container mx-auto px-4 text-center">
    <Heading 
          subHeading="Our Blogs" 
          heading="Checkout Our Latest Blogs" 
        />
    </div>
  </section>
  )
}

export default BlogsSection