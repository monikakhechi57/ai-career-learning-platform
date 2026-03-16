function CourseCard({ title, description }) {

  return (

    <div className="border rounded-lg shadow hover:shadow-lg p-6">

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        View Course
      </button>

    </div>

  )

}

export default CourseCard