function ResumeFeedback() {

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="border p-8 rounded w-96">

        <h2 className="text-2xl font-bold mb-4">
          AI Resume Feedback
        </h2>

        <input
          type="file"
          className="mb-4"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Analyze Resume
        </button>

        <p className="mt-4 text-gray-600">
          AI suggestions will appear here
        </p>

      </div>

    </div>

  )

}

export default ResumeFeedback