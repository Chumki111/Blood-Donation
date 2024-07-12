

const Comment = ({comments}) => {
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
  </div>
  )
}

export default Comment