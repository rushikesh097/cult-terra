import React, {useState} from 'react'
import axios from "axios"

const SignUp = (props) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setMsg("");
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addUser = (e) => {
    e.preventDefault();
    if(user.name!=="" && user.email!=="" && user.password!==""){
      axios
        .post(`http://localhost:5000/user/adduser`, {
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          console.log(response);
          props.setIsOnDashboard(true);
          setMsg(response.data.message);
        })
        .catch((err) => {
          console.log(err);
          setMsg(err.message);
        });
        return;
    }
    setMsg("Fill all data !");
  };

  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="w-30 sm:w-80 lg:w-96">
          <form className="bg-indigo-200 shadow-2xl shadow-indigo-500 rounded-md px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <label
                className="block text-indigo-900 text-sm font-bold mb-6"
                htmlFor="=name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-900"
                type={"text"}
                name={"name"}
                onChange={handleChange}
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-indigo-900 text-sm font-bold mb-6"
                htmlFor="email"
              >
                E-Mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-900"
                type={"email"}
                name={"email"}
                onChange={handleChange}
                id="email"
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
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-indigo-900"
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

            <div
              className="flex items-center gap-2
          sm:gap-0 justify-between"
            >
              <button
                className="bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={addUser}
              >
                Sign Up
              </button>
              <button
                className="inline-block align-baseline font-bold text-indigo-900
              sm:text-sm
              sm:ml-1
              hover:text-indigo-700 cursor-pointer text-xs"
                onClick={() => {
                  // setText("Sign Up");
                  props.setIsOnLogin((isOnLogin) => !isOnLogin);
                }}
              >
                Already have account ?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp