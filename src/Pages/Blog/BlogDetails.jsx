import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PrimaryHero from "../../Components/Hero/PrimaryHero";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import Comment from "./Comment";
import useAuth from "../../Hooks/useAuth";
import { postComment } from "../../api/blogs";
import Swal from 'sweetalert2';  // Import SweetAlert2

const BlogDetails = () => {
  const blog = useLoaderData();
  const { user } = useAuth();
  const [comments, setComments] = useState(blog.comments || []);

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
        <div>
          <img
            src={blog.image}
            alt=""
            className="w-full h-full md:h-[350px] lg:h-[500px] object-cover rounded-md"
          />
        </div>
        <div className="flex space-x-5 text-primary pt-3 px-3">
          <p className="flex items-center space-x-2">
            <MdOutlineWatchLater />
            <span>{blog.date}</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaComments />
            <span>{comments.length} comments</span>
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
        <Comment comments={comments} />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Add a Comment</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 shadow-md px-6 py-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="users"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Comment</label>
              <textarea
                name="comment"
                className="mt-1 p-2 border rounded-md w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
