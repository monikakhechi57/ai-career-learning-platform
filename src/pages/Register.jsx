function Register() {

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="border p-8 w-96 rounded">

        <h2 className="text-2xl font-bold mb-4">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-blue-500 text-white w-full py-2">
          Register
        </button>

      </div>

    </div>
  )

}

export default Register