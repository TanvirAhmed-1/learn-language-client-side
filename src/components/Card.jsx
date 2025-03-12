import React from "react";
import { Link } from "react-router-dom";

const Card = ({ tutorials }) => {
  const { _id, name, image, description, language, review, price } = tutorials;

  return (
    <div className="group card bg-gray-100 rounded-lg border-2 border-solid hover:bg-green-500 p-4">
      <div className="flex justify-between items-center p-2">
        <figure>
          <img
            src={image}
            alt={name}
            className="w-20 h-20 object-cover rounded-2xl"
          />
        </figure>
        <button className="btn text-green-500 bg-green-100 hover:bg-white border-none text-xl font-normal">
          {language}
        </button>
      </div>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl pb-2 text-black group-hover:text-white">
          {name}
        </h2>
        <p className="text-gray-600 group-hover:text-white">{description}</p>
        <p className="text-gray-600 group-hover:text-white">
          <strong>Price:</strong> {price} Taka
        </p>
        <div className="text-gray-600 flex justify-start gap-4 items-center group-hover:text-white">
          <strong>Rating:</strong>
          <span className="text-end">{review}</span>
          <div className="rating *:bg-orange-600">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
        </div>

        <Link
          to={`/jobDetails/${_id}`}
          className="card-actions justify-end pt-2"
        >
          <button className="btn bg-gray-300 text-black border-none group-hover:bg-white group-hover:text-green-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
