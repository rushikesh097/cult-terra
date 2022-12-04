import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  FILL_ALL_DATA,
  INVALID_EMAIL,
  INVALID_EMAIL_OR_PASSWORD,
  LINK_USER,
  PATTERN,
} from "../Data";

const LogIn = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setMsg("");
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const checkValidity = (e) => {
    e.preventDefault();
    if (!PATTERN.test(user.email)) {
      setMsg(INVALID_EMAIL);
      return;
    } 
    else if (user.password !== "") {
      axios
        .post(`${LINK_USER}validateuser`, {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          if (response.data === "") {
            setMsg(INVALID_EMAIL_OR_PASSWORD);
            return;
          }
          props.setName(response.data.name);
          props.setIsOnDashboard(true);
        })
        .catch((err) => {
          console.log(err);
          setMsg(err.message);
        });
      return;
    }
    setMsg(FILL_ALL_DATA);
  };

  return (
    <div>
      <div className="flex justify-center mt-20 mb-0">
        <div className="w-30 sm:w-80 lg:w-96">
          <form className="bg-indigo-200 shadow-2xl shadow-black rounded-md px-8 pt-6 pb-8 mb-4 mt-20">
            <a
              href="/"
              className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 place-content-center "
            >
              <svg
                className="h-6 w-7 mr-1 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#2b3344"
                  d="M21.5,21H20V7.5A.49.49,0,0,0,19.66,7L16,5.47V21H15V3.5a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5V21H3.5a.5.5,0,0,0,0,1h18a.5.5,0,0,0,0-1Zm-4-12h1a.5.5,0,0,1,.5.5.51.51,0,0,1-.5.5h-1a.51.51,0,0,1-.5-.5A.5.5,0,0,1,17.5,9Zm0,3h1a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm0,3h1a.51.51,0,0,1,.5.5.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5A.51.51,0,0,1,17.5,15Zm0,3h1a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1ZM11,6h1a.5.5,0,1,1,0,1H11a.5.5,0,0,1,0-1Zm0,3h1a.5.5,0,1,1,0,1H11a.5.5,0,0,1,0-1Zm0,3h1a.5.5,0,1,1,0,1H11a.5.5,0,0,1,0-1Zm0,3h1a.5.5,0,1,1,0,1H11a.5.5,0,0,1,0-1ZM7.94,6H9A.5.5,0,0,1,9,7h-1a.5.5,0,0,1,0-1Zm0,3H9a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm0,3H9a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm0,3H9a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm2.56,6V19h-1v2h-1V18.47A.5.5,0,0,1,9,18h2a.5.5,0,0,1,.5.5V21Z"
                />
              </svg>
              <h1 className="font-bold text-xl align-text-bottom">
                Cult-terra
              </h1>
            </a>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-6"
                htmlFor="email"
              >
                E-Mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-black "
                type={"email"}
                name={"email"}
                onChange={handleChange}
                id="emaipl"
                placeholder="E-Mail"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-6"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:border-black"
                id="password"
                type={"password"}
                name={"password"}
                onChange={handleChange}
                placeholder="********"
              />
              <p className="text-red-600 text-xs italic">{msg}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#333b4b] hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={checkValidity}
              >
                Sign In
              </button>
              <button
                className="inline-block align-baseline font-bold sm:text-sm text-black hover:text-indigo-700 cursor-pointer text-xs"
                onClick={() => {
                  props.setIsOnLogin((isOnLogin) => !isOnLogin);
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
};

export default LogIn;
