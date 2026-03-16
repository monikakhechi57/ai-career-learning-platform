import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Courses from "./pages/Courses"
import CourseDetails from "./pages/CourseDetails"

import StudentDashboard from "./dashboard/StudentDashboard"
import Quiz from "./pages/Quiz"
import ResumeFeedback from "./pages/ResumeFeedback"
import MockInterview from "./pages/MockInterview"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/course" element={<CourseDetails />} />

        <Route path="/dashboard" element={<StudentDashboard />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/resume" element={<ResumeFeedback />} />

        <Route path="/mock" element={<MockInterview />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App