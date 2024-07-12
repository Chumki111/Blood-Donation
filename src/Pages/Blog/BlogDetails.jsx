import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PrimaryHero from "../../Components/Hero/PrimaryHero";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import Comment from "./Comment";
import useAuth from "../../Hooks/useAuth";
import { postComment } from "../../api/blogs";
import Swal from 'sweetalert2';  // Import SweetAlert2
import Share from "./Share";
import PostTags from "./PostTags";
import BlogContent from "./BlogContent";

const BlogDetails = () => {
  const blog = useLoaderData();
  const { user } = useAuth();
  const [comments, setComments] = useState(blog.comments || []);
   const url = "https://blood-donation-cc6e2.web.app/blog-details/668f8bce6761842ddf032b11"
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const users = form.users.value;
    const comment = form.comment.value;

    const newCommentData = {
      user: users,
      date: new Date().toLocaleDateString(),
      comment,
      avatar: user?.photoURL
    };

    try {
      const result = await postComment(blog._id, newCommentData);

      if (result) {
        setComments((prev) => [...prev, newCommentData]);

        // SweetAlert2 success alert
        Swal.fire({
          icon: 'success',
          title: 'Comment added successfully!',
          text: 'Your comment has been added.',
          confirmButtonText: 'OK'
        });

        form.reset(); // Clear the form
      } else {
        // SweetAlert2 error alert
        Swal.fire({
          icon: 'error',
          title: 'Failed to add comment',
          text: 'There was an issue adding your comment. Please try again.',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Error adding comment:', error);

      // SweetAlert2 error alert
      Swal.fire({
        icon: 'error',
        title: 'An error occurred',
        text: 'An error occurred while adding your comment. Please try again.',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div>
      <PrimaryHero text="Blog Details" linkText="Blogs" linkHref="/Blogs" />
      <div className="px-8 md:mx-10 lg:mx-16 mt-16">
        {/* blog image */}
        <div>
          <img
            src={blog.image}
            alt=""
            className="w-full h-full md:h-[350px] lg:h-[500px] object-cover rounded-md"
          />
        </div>
        
<BlogContent blog={blog}/>
        {/* post tags */}
        <PostTags blog={blog}/>
        <hr />
        {/* share section */}
        <Share url={url}/>
        <div className="border border-primary rounded-md md:ml-12 mt-6">
          <div className="flex space-x-5 items-center">
            <img
              src={blog.author_image}
              alt=""
              className="h-[150px] rounded-md py-3 ml-6"
            />
            <div>
              <h3 className="text-lg md:text-2xl text-primary pb-2">
                {blog.author}
              </h3>
              <p className="text-gray-500">{blog.author_description}</p>
            </div>
          </div>
        </div>
        {/* comment section */}
        <Comment comments={comments} handleSubmit={handleSubmit}/>
       
      </div>
    </div>
  );
};

export default BlogDetails;
