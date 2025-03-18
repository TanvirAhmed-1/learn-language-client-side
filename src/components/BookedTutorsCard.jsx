import React from "react";
import { Link } from "react-router-dom";

const BookedTutorsCard = ({ tutorials, handleReview }) => {
  console.log(tutorials);

  const { name, image, language, tutorEmail,price, _id,review } = tutorials;
  return (
    <div className="p-4">
      <div className="card card-side bg-white dark:bg-gray-600 shadow-md flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 p-4">
        
        {/* Responsive Figure */}
        <figure className="w-full  md:w-56 h-auto md:h-56 rounded-2x bg-gray-200 flex justify-center items-center">
          <img
            src={image}
            className=" w-48 h-48 object-cover  rounded-full md:rounded-3xl"
            alt={name}
          />
        </figure>

        {/* Text Content */}
        <div className="card-body text-start">
          <h2 className="card-title text-2xl dark:text-white">{name}</h2>
          <p className="text-xl text-black dark:text-white">
            Speaks: <span className="text-gray-700 dark:text-white">{language}</span>
          </p>
          <p className="text-xl text-black dark:text-white">
            Price: <span className="text-gray-700 dark:text-white">{price }</span>
          </p>
          <p className="text-xl text-black dark:text-white">
            Email: <span className="text-gray-700 dark:text-white">{tutorEmail}</span>
          </p>
          <p className="text-xl text-black dark:text-white">
            Review: <span className="text-gray-700 dark:text-white">{review||0}</span>
          </p>
          <div className="card-actions justify-center md:justify-end py-3">
            <button
              onClick={() => handleReview(_id)}
              className="btn btn-primary"
            >
              Give Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedTutorsCard;
