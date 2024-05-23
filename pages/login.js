import React from 'react'
import Link  from 'next/link'

const Login = () => {
  return (
    <>
      <div className="bg-gray-700 flex justify-center items-center h-screen font-pop" >
        <div className="bg-white rounded-xl flex flex-col justify-between p-5" style={{ width: '350px', height: '600px' }}>
          <div className="flex flex-col gap-3 p-2">
            <h3 className="text-center text-gray-700 text-3xl font-bold py-5">Login</h3>
            <input className="w-full bg-gray-200 rounded-full p-2 pl-5 my-2" type="text" placeholder="Username" />
            <input className="w-full bg-gray-200 rounded-full p-2 pl-5" type="password" placeholder="Password" />
            <label className="text-xs font-light my-1"><input type="checkbox" className="mx-1" />Remember Me</label>
            <div>
              <button className="w-full rounded-full text-xl font-semibold text-red-50 mt-3 py-2 bg-gradient-to-r from-yellow-400 to-red-400 hover:shadow-md">LOG IN</button>
              <button className="text-gray-500 w-full rounded-full text-sm font-semibold hover:underline">Forgot Password</button>
            </div>
          </div>
          <div>
            <Link href="/signup"><p className="text-gray-600 text-center text-sm">Not a member? <span className="text-blue-700 cursor-pointer hover:underline">Sign up now</span></p></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login