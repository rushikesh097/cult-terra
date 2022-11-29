import React from 'react'
import { useState } from 'react';

const LogIn = (props) => {

  const [user,setUser] = useState({
    email: "",
    password: ""
  })

  const [msg,setMsg] = useState("hello")

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(user);
  }

  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="w-30 sm:w-80 lg:w-96">
          <form className="bg-indigo-200 shadow-2xl shadow-indigo-500 rounded-md px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <label
                className="block text-indigo-900 text-sm font-bold mb-6"
                htmlFor="email"
              >
                E-Mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:border-indigo-900 "
                type={"email"}
                name={"email"}
                onChange={handleChange}
                id="emaipl"
                placeholder="E-Mail"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-indigo-900 text-sm font-bold mb-6"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 mb-3 leading-tight focus:outline-none focus:border-indigo-900"
                id="password"
                type={"password"}
                name={"password"}
                onChange={handleChange}
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                {msg}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                // onClick={checkValidity}
              >
                Sign In
              </button>
              <button
                className="inline-block align-baseline font-bold sm:text-sm text-indigo-900 hover:text-indigo-700 cursor-pointer text-xs"
                onClick={() => {
                  // setText("Log In");
                  props.setIsOnLogin(isOnLogin => !isOnLogin);
                }}
              >
                Don't have account ?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn