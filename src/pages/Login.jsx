import Navbar from "../components/Navbar"

function Home() {

  return (
    <div>

      <Navbar />

      <div className="text-center mt-20">

        <h1 className="text-5xl font-bold">
          AI Career Learning Platform
        </h1>

        <p className="mt-6 text-gray-600">
          Learn skills, build projects and get placement ready
        </p>

        <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded">
          Explore Courses
        </button>

      </div>

    </div>
  )

}

export default Home