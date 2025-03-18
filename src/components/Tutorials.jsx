import React from "react";
import { Link } from "react-router-dom";

const Tutorials = ({ tutorials }) => {
  console.log(tutorials);

  const { name, image, description, language,} = tutorials;
  return (
    <div className="pb-20">
      <h1 className="lg:text-3xl text-xl py-10 text-center font-semibold dark:text-white ">Choose Your Favorite Tutors and Start Learning Today!</h1>
      <div className="card card-side bg-white  dark:bg-gray-600 shadow-sm flex justify-center items-center gap-10 p-4">
        <figure className="p-4 ">
          <img
            src={image}
            className=" object-cover w-60 h-40 rounded-full  overflow-hidden"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title dark:text-white">{name}</h2>
          <p className="dark:text-white">Speaks {language}</p>
          <p className="dark:text-white">24 active students</p>
          <p className="line-clamp-2 w-3/4 dark:text-white">{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/find-tutors/${language}`} className="btn btn-primary">Book trial lesson</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
