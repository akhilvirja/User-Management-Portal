import { checkUserCredentials } from "@/features/users/registeredUsers";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        username : "",
        password : "",
    }

    const {values, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues,
        onSubmit: (values) =>{
            console.log(values)
            dispatch(checkUserCredentials(values))
            navigate("/users")
        }
    })

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Gradient thin border wrapper */}
      <div className="relative rounded-[22px] p-[2px] bg-gradient-to-tr from-[#00ff75] to-[#3700ff] transition-all duration-300 hover:shadow-[0_0_25px_3px_rgba(0,255,117,0.35)] max-w-sm w-full">
        {/* Inner dark card */}
        <div className="bg-[#171717] rounded-[20px] p-8 transition-all duration-200">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <p className="text-center text-white text-lg font-medium mb-6">
              Login
            </p>

            {/* Username */}
            <div className="flex items-center gap-2 rounded-full px-4 py-3 bg-[#171717] shadow-inner shadow-black text-white">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                type="text"
                placeholder="Username"
                value={values.username}
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-transparent border-none outline-none text-gray-300 w-full placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-2 rounded-full px-4 py-3 bg-[#171717] shadow-inner shadow-black text-white">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input
                type="password"
                placeholder="Password"
                value={values.password}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-transparent border-none outline-none text-gray-300 w-full placeholder-gray-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                type="submit"
                className="bg-[#252525] text-white px-6 py-2 rounded-md transition duration-300 hover:bg-black"
              >
                Login
              </button>
              
              <Link
                to="/signup"
                className="bg-[#252525] text-white px-6 py-2 rounded-md transition duration-300 hover:bg-black"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
