import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">

      <h1 className="text-xl font-bold">AI Career LMS</h1>

      <div className="space-x-6">

        <Link to="/">Home</Link>

        <Link to="/courses">Courses</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

      </div>

    </nav>
  )

}

export default Navbar