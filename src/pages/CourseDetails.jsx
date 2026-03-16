import Navbar from "../components/Navbar"

function CourseDetails() {

  return (
    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl font-bold">
          MERN Stack Course
        </h1>

        <p className="mt-4 text-gray-600">
          Learn full stack development with MongoDB,
          Express, React and Node.
        </p>

        <button className="mt-6 bg-green-500 text-white px-5 py-2 rounded">
          Enroll Course
        </button>

      </div>

    </div>
  )

}

export default CourseDetails