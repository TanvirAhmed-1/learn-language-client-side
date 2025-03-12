import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authorization/Authorization";


const NavBar = () => {
  const{user,userSignOut , setUser}=useContext(AuthContext)

const handleSignOut=()=>{
  userSignOut()
  .then(data=>{
    console.log(data.user)
    setUser(data.user)
  })
  .then(err=>{
    console.log(err.message)
  })
}
  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/find-tutors"}>Find tutors</NavLink>
      </li>

      <li>
        <NavLink to={"/"}>Add Tutorials</NavLink>
      </li>
      <li>
        <NavLink to={"/myTutorial"}>My Tutorials</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>My booked tutors</NavLink>
      </li>
      <li>
        <NavLink to={"/addTutorial"}>Add Tutorials</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white shadow-sm h-28 lg:px-10 md:px-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="md:text-xl text-white p-2 rounded-[50%] bg-green-400 font-semibold">
            BD
          </p>
          <div className="flex justify-center items-center">
            <span className="md:text-3xl text-lg font-semibold  text-black">JOb</span>
            <p className="md:text-3xl text-lg font-semibold  text-green-500">Path</p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 md:text-2xl font-medium text-black menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end gap-3">
<div>
  {
    user && user.email ?<Link to={"/login"}>
    <a onClick={handleSignOut} className="btn text-green-500 text-nowrap bg-white border-green-500 md:text-xl hover:border-none hover:text-white hover:bg-green-500 font-semibold">Sign Out</a>
  </Link>
    :        
    <Link to={"/login"}>
    <p className="btn text-green-500 text-nowrap bg-white border-green-500 md:text-xl hover:border-none hover:text-white hover:bg-green-500 font-semibold">Sign In</p>
  </Link>
  }
</div>
        <Link to={"/register"} className="">
          <p className="btn   text-green-500  bg-white border-green-500 hover:border-none hover:text-white hover:bg-green-500 md:text-xl font-semibold">Register</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
