

const Comment = ({comments,handleSubmit}) => {
  return (
    <div className="mt-6">
    <h2 className="text-xl font-semibold">{comments?.length} comments</h2>
    <div className="mt-4 space-y-6">
      {comments?.map((comment, index) => (
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
  )
}

export default Comment