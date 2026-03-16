import Navbar from "../components/Navbar"
import CourseCard from "../components/CourseCard"

function Courses() {

  return (
    <div>

      <Navbar />

      <h1 className="text-3xl font-bold text-center mt-10">
        Available Courses
      </h1>

      <div className="grid grid-cols-3 gap-6 p-10">

        <CourseCard
          title="MERN Stack"
          description="Learn MongoDB, Express, React, Node"
        />

        <CourseCard
          title="Data Structures"
          description="Prepare for coding interviews"
        />

        <CourseCard
          title="Java Programming"
          description="Master Java for backend development"
        />

      </div>

    </div>
  )

}

export default Courses