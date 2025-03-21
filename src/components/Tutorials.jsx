import React from "react";
import { Link } from "react-router-dom";

const Tutorials = ({ tutorials }) => {
  // console.log(tutorials);

  const { name, image, description, language,_id} = tutorials;
  return (
    <div className="pb-20">
      <div className="card card-side bg-white  dark:bg-gray-600 shadow-sm flex justify-center items-center gap-10 p-4">
        <figure className="p-4 lg:w-[400px] ">
          <img
            src={image}
            className=" object-cover w-60 h-60 rounded-full  overflow-hidden"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title dark:text-white">{name}</h2>
          <p className="dark:text-white"><span className="text-lg text-black dark:text-white">Speaks:</span> {language}</p>
          <p className="dark:text-white">24 active students</p>
          <p className="line-clamp-2 w-3/4 dark:text-white">{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/tutors/${_id}`} className="btn btn-primary">Book trial lesson</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
