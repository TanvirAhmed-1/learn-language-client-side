import React from "react";
import { Link } from "react-router-dom";

const BookedTutorsCard = ({ tutorials, handleReview }) => {
  console.log(tutorials);

  const { name, image, description, language, tutorEmail,price, _id } = tutorials;
  return (
    <div className="p-4">
      <div className="card card-side bg-white shadow-md flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 p-4">
        
        {/* Responsive Figure */}
        <figure className="w-full md:w-56 h-auto md:h-56 rounded-2xl md:bg-gray-200 flex justify-center items-center">
          <img
            src={image}
            className=" w-48 h-48 object-cover  rounded-full md:rounded-3xl"
            alt={name}
          />
        </figure>

        {/* Text Content */}
        <div className="card-body text-start">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-xl text-black">
            Speaks: <span className="text-gray-700">{language}</span>
          </p>
          <p className="text-xl text-black">
            Price: <span className="text-gray-700">{price }</span>
          </p>
          <p className="text-xl text-black">
            Email: <span className="text-gray-700">{tutorEmail}</span>
          </p>
          <p className="line-clamp-2">{description}</p>
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
