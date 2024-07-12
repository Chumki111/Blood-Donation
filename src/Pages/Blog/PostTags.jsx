

const PostTags = ({blog}) => {
  return (
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
  )
}

export default PostTags