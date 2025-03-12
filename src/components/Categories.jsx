import React, { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCAtegories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tutorials/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCAtegories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-8/12 mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 ">
        {categories.map((v) => (
          <div className="grid justify-center items-center">
            <div className="lg:w-96 lg:h-36  w-80 h-24 gap-2 bg-white flex justify-start items-center px-4 border border-solid border-gray-600 rounded-lg">
              <p className="text-3xl lg:text-5xl">
                <LiaFlagUsaSolid />
              </p>
              <Link
                className="text-2xl lg:text-3xl font-medium"
                to={`/find-tutors/${v}`}
              >
                {v} tutors
              </Link>
              <p className="text-3xl lg:text-3xl ml-10">
                <GoChevronRight />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
