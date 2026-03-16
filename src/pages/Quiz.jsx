import { useState } from "react"

function Quiz() {

  const questions = [
    {
      question: "React is a ____ ?",
      options: ["Library", "Framework", "Language", "Database"],
      answer: "Library"
    },
    {
      question: "Which language is used for backend in MERN?",
      options: ["Python", "Java", "Node.js", "PHP"],
      answer: "Node.js"
    }
  ]

  const [score, setScore] = useState(0)
  const [current, setCurrent] = useState(0)

  function checkAnswer(option) {

    if(option === questions[current].answer){
      setScore(score + 1)
    }

    setCurrent(current + 1)

  }

  if(current >= questions.length){
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">
          Your Score: {score}
        </h1>
      </div>
    )
  }

  return (
    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">
        {questions[current].question}
      </h2>

      {questions[current].options.map((option) => (

        <button
          key={option}
          onClick={() => checkAnswer(option)}
          className="block border p-3 mb-3 w-60 rounded hover:bg-gray-100"
        >
          {option}
        </button>

      ))}

    </div>
  )

}

export default Quiz