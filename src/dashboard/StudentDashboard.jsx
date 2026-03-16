// function StudentDashboard() {

//   return (
//     <div className="p-10">

//       <h1 className="text-3xl font-bold">
//         Student Dashboard
//       </h1>

//       <div className="mt-6 grid grid-cols-3 gap-6">

//         <div className="border p-6 rounded">
//           Enrolled Courses
//         </div>

//         <div className="border p-6 rounded">
//           Progress
//         </div>

//         <div className="border p-6 rounded">
//           Quiz Scores
//         </div>

//       </div>

//     </div>
//   )

// }

// export default StudentDashboard

import Sidebar from "../components/Sidebar"

function StudentDashboard() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold">
          Student Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6 mt-10">

          <div className="border p-6 rounded shadow">
            <h2 className="text-xl font-semibold">
              Enrolled Courses
            </h2>
            <p className="text-3xl mt-4">
              3
            </p>
          </div>

          <div className="border p-6 rounded shadow">
            <h2 className="text-xl font-semibold">
              Completed Lessons
            </h2>
            <p className="text-3xl mt-4">
              12
            </p>
          </div>

          <div className="border p-6 rounded shadow">
            <h2 className="text-xl font-semibold">
              Quiz Score
            </h2>
            <p className="text-3xl mt-4">
              85%
            </p>
          </div>

        </div>

      </div>

    </div>
  )

}

export default StudentDashboard