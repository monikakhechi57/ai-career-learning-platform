import { useState } from "react"

function MockInterview() {

  const questions = [
    "Tell me about yourself",
    "Explain React Virtual DOM",
    "What is REST API?"
  ]

  const [index, setIndex] = useState(0)

  function nextQuestion(){
    setIndex(index + 1)
  }

  if(index >= questions.length){
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">
          Interview Completed
        </h1>
      </div>
    )
  }

  return (

    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        Mock Interview
      </h1>

      <p className="text-lg mb-6">
        {questions[index]}
      </p>

      <textarea
        className="border p-3 w-full h-32"
        placeholder="Type your answer here..."
      />

      <button
        onClick={nextQuestion}
        className="mt-4 bg-green-600 text-white px-5 py-2 rounded"
      >
        Next Question
      </button>

    </div>

  )

}

export default MockInterview