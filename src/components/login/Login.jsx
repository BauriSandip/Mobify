import React from 'react'
import google from '../../../public/google.svg'
import ok from '../../../public/ok.gif'
const Login = () => {
  return (
    <div>
        <div className="flex items-center justify-center min-h-screen">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white dark:bg-gray-400 shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/* <!-- left side --> */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light mb-8">
            Welcom back! Please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember me</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <img src={google} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center ">
            Dont'have an account?
            <span className="font-bold text-black">Sign up for free</span>
          </div>
        </div>
        {/* right side */} 
        <div className="relative">
          <img
            src={ok}
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* <!-- text on image  --> */}
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl"
              >
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login