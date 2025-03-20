import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerAnimation from "../assets/Signin.json";
import { AuthContext } from './../authorization/Authorization';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { stringify } from "postcss";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const[showPass,setShowPass]=useState(false)

  const {setUser,registerUser,updateUserProfile}=useContext(AuthContext)
  const navigate=useNavigate()

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordRegex)) {
      toast.info("Enter least 8 characters one uppercase one number, one special character")
      return 
    }
    // console.log({ name, email, photo, password });
    registerUser(email,password)
    .then(data=>{
      // console.log(data.user)
      updateUserProfile({ displayName: name, photoURL: photo })
      fetch("https://learn-language-server-tau.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name:name,
          email:email,
          creationTime:data.user.metadata.creationTime,
        })
      })
      .then(res => res.json())
      .then(data =>{
        // console.log("Success:", data)
      })
      .catch(error => {
        // console.error("Error:", error)
      });
      navigate("/")
      toast.success("user Register Successful")
    })
    .then(err=>{
  })
  };

  return (
    <div className="hero min-h-screen bg-gray-200 dark:bg-black flex justify-center items-center">
      <div className="flex justify-center gap-6 items-center w-full md:w-[80%] flex-col lg:flex-row-reverse">
        {/* Lottie Animation */}
        <div className="bg-white rounded-2xl lg:w-[50%] flex-1 flex justify-center items-center p-6">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            className="w-72 h-72"
          />
        </div>

        {/* Registration Form */}
        <div className="card bg-white dark:bg-gray-800 shadow-lg p-6 w-full md:w-[50%]">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Register Now!
          </h1>
          <form onSubmit={handleForm} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label text-gray-700 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input dark:bg-white bg-gray-200 input-bordered w-full"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="label text-gray-700 dark:text-white">
                Photo URL
              </label>
              <input
                name="photo"
                type="url"
                placeholder="Your Photo URL"
                className="input dark:bg-white bg-gray-200 input-bordered w-full"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="label text-gray-700 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input dark:bg-white bg-gray-200 input-bordered w-full"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="label text-gray-700 dark:text-white">
                Password
              </label>
              <input
                type={showPass?"text":"password"}
                name="password"
                placeholder="Password"
                className="input dark:bg-white bg-gray-200 text-black  input-bordered w-full"
                required
              />
              <div onClick={() => setShowPass(!showPass)} className="absolute top-[38px] right-6 ">
              {
                showPass? <FaRegEye className="text-xl " />:<FaEyeSlash className="text-xl " />
              }
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
