import React from "react";
import { Link } from "react-router-dom";

const Card = ({ tutorials }) => {
  const { _id, name, image, description, language, review, price } = tutorials;

  return (
    <div className="group card bg-gray-100 dark:bg-gray-600 rounded-lg border-2 border-solid hover:bg-green-500 p-4">
      <div className="flex justify-between items-center p-2">
        <figure>
          <img
            src={image}
            alt={name}
            className="w-20 h-20 object-cover rounded-2xl"
          />
        </figure>
        <button className="btn text-green-500 bg-green-100 dark:bg-gray-600 hover:bg-white border-none text-xl font-normal">
          {language}
        </button>
      </div>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl pb-2 text-black dark:text-white group-hover:text-white">
          {name}
        </h2>
        <p className="text-gray-600 group-hover:text-white dark:text-white">
          {description}
        </p>
        <p className="text-gray-600 group-hover:text-white dark:text-white">
          <strong>Price:</strong> {price} Taka
        </p>
        <div className="text-gray-600 dark:text-white flex justify-start gap-4 items-center group-hover:text-white">
          <strong className="dark:text-white">Rating:</strong>
          <span className="text-end dark:text-white">{review}</span>
          <div className="rating rating-lg">
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
        </div>

        <Link
          to={`/jobDetails/${_id}`}
          className="card-actions justify-end pt-2"
        >
          <Link
            to={`/tutors/${_id}`}
            className="btn bg-gray-300 text-black border-none group-hover:bg-white group-hover:text-green-600"
          >
            View Details
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default Card;
