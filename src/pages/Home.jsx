import Navbar from "../components/Navbar"

function Home() {
  return (
    <div>

      <Navbar />

      {/* Hero Section */}

      <section className="text-center py-24 bg-gray-100">

        <h1 className="text-5xl font-bold text-gray-800">
          AI Career Learning Platform
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Learn in-demand tech skills and get placement ready with AI powered tools
        </p>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Start Learning
        </button>

      </section>

      {/* Features Section */}

      <section className="py-20 px-10">

        <h2 className="text-3xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              Online Courses
            </h3>

            <p className="text-gray-600 mt-3">
              Learn programming, web development and more.
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              Placement Preparation
            </h3>

            <p className="text-gray-600 mt-3">
              Practice quizzes and coding challenges.
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              AI Resume Feedback
            </h3>

            <p className="text-gray-600 mt-3">
              Improve your resume using AI suggestions.
            </p>
          </div>

        </div>

      </section>

      {/* Courses Preview */}

      <section className="py-20 bg-gray-50 px-10">

        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Courses
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold">
              MERN Stack
            </h3>

            <p className="text-gray-600 mt-3">
              Learn MongoDB, Express, React and Node.js
            </p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold">
              Data Structures
            </h3>

            <p className="text-gray-600 mt-3">
              Prepare for coding interviews
            </p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold">
              Java Programming
            </h3>

            <p className="text-gray-600 mt-3">
              Master Java for backend development
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Home


// import Navbar from "../components/Navbar"

// function Home() {

//   return (
//     <div>

//       <Navbar />

//       <div className="text-center mt-20">

//         <h1 className="text-5xl font-bold">
//           AI Career Learning Platform
//         </h1>

//         <p className="mt-6 text-gray-600">
//           Learn skills, build projects and get placement ready
//         </p>

//         <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded">
//           Explore Courses
//         </button>

//       </div>

//     </div>
//   )

// }

// export default Home