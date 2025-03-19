import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <div className="absolute top-20  right-0">
        <label className="swap swap-rotate bg-sky-400 lg:pl-10 py-2 px-4 rounded-l-2xl">
          {/* this hidden checkbox controls the state */}
          <input onClick={handleTheme} type="checkbox" />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
        <div className="absolute top-[-25%] left-[-5%] w-[110%] h-[100px] bg-green-300 rounded-[50%]"></div>
        <div className="absolute top-[-50%] left-[-2%] w-[104%] h-[100px] bg-green-400 rounded-[70%] opacity-70"></div>
        <div className="absolute top-[-75%] left-0 w-[100%] h-[100px] bg-green-600 rounded-[50%] opacity-50"></div>
      </div>
      <footer className=" footer  sm:footer-horizontal grid-cols-2 bg-gray-800 text-base-content p-10 md:pt-36 min-h-96">
        <aside className="pt-20 md:pt-0">
          <div className="flex justify-center items-center gap-2 py-6">
            <p className="md:text-xl text-white p-2 rounded-[50%] bg-green-400 font-semibold">
              LG
            </p>
            <div className="flex justify-center items-center">
              <span className="md:text-xl text-lg font-semibold text-white">
                Study
              </span>
              <p className="md:text-xl text-lg font-semibold text-green-500">
                Zone
              </p>
            </div>
          </div>
          <p>
            Smart learning, expert guidance
            <br />
            Your go-to destination for professional tutors.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title  ">Language</h6>
          <a className="link link-hover">Bangla</a>
          <a className="link link-hover">English</a>
          <a className="link link-hover">italia</a>
          <a className="link link-hover">French</a>
          <a className="link link-hover">Japanese</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to={"/about"} className="link link-hover">About us</Link>
          <Link to={"/contact"} className="link link-hover">Contact</Link>
          <Link to={"/find-tutors"} className="link link-hover">Find Tutors</Link>
          <Link to={"/my-tutorials"} className="link link-hover">My Tutors</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <label className="">Enter your email address</label>
          <fieldset className="lg:w-80 md:w-60 pb-4">
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="py-1 px-2 btn-primary bg-green-400 join-item">Subscribe</button>
            </div>
          </fieldset>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <div>
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
