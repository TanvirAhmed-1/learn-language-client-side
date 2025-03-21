import React, { useEffect, useState } from "react";
import { FaLanguage, FaRegUser } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const State = () => {
  const [tutors, setTutors] = useState([]);
  const [review, setReview] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [usersCount, setUserCount] = useState([]);

  useEffect(() => {
    fetch("https://learn-language-server-tau.vercel.app/tutorials/categories")
      .then((res) => res.json())
      .then((data) => setLanguages(data));

    fetch("https://learn-language-server-tau.vercel.app/tutorials/tutors")
      .then((res) => res.json())
      .then((data) => setTutors(data));

    fetch("https://learn-language-server-tau.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUserCount(data);
      });

      fetch("https://learn-language-server-tau.vercel.app/tutorial/review/count")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });



  }, []);

  return (
    <div className="bg-white dark:bg-black w-full mx-auto py-10">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Languages */}
          <div className="stat bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="stat-figure text-blue-500 text-4xl flex justify-center">
              <FaLanguage />
            </div>
            <div className="stat-value text-center dark:text-white">{languages.length}</div>
            <div className="stat-title text-lg font-semibold text-gray-700 dark:text-white text-center">
              Total Languages
            </div>
          </div>

          {/* Total Tutors */}
          <div className="stat bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="stat-figure text-green-500 text-4xl flex justify-center">
              <FaRegUser />
            </div>
            <div className="stat-value text-center dark:text-white">{tutors.length}</div>
            <div className="stat-title text-lg font-semibold text-gray-700 text-center dark:text-white">
              Total Tutors
            </div>
          </div>

          {/* Total Users */}
          <div className="stat bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="stat-figure text-purple-500 text-4xl flex justify-center">
              <FaRegUser />
            </div>
            <div className="stat-value text-center dark:text-white">{usersCount.length}</div>
            <div className="stat-title text-lg font-semibold text-gray-700 text-center dark:text-white">
              Total Users
            </div>
          </div>

          {/* New Registers */}
          <div className="stat bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="stat-figure text-red-500 text-4xl flex justify-center">
            <MdOutlineRateReview />
            </div>
            <div className="stat-value text-center dark:text-white">{review.totalReviews}</div>
            <div className="stat-title text-lg font-semibold text-gray-700 text-center dark:text-white">
              Total Review
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
