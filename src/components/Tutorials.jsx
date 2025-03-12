import React from "react";
import { Link } from "react-router-dom";

const Tutorials = ({ tutorials }) => {
  console.log(tutorials);

  const { _id, name, image, description, language, email, price } = tutorials;
  return (
    <div className="">
      <div className="card card-side bg-white shadow-sm flex justify-center items-center gap-6 p-4">
        <figure className="w-40 h-40 rounded-full ">
          <img
            src={image}
            alt="Movie"
            className=" object-cover w-full  overflow-hidden"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Speaks {language}</p>
          <p>24 active students</p>
          <p className="line-clamp-1">{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/find-tutors/${language}`} className="btn btn-primary">Book trial lesson</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
