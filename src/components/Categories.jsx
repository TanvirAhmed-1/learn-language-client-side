import React, { useEffect, useState } from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { FaLandmarkFlag } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import {
  TbBuildingCastle,
  TbBuildingCommunity,
  TbBuildingFortress,
  TbBuildingPavilion,
} from "react-icons/tb";
import { Link } from "react-router-dom";

const categoryIcons = {
  English: <FaLandmarkFlag className="text-3xl" />,
  Spanish: <BsBuildingsFill className="text-3xl" />,
  French: <TbBuildingCastle className="text-3xl" />,
  Italian: <TbBuildingFortress className="text-3xl" />,
  Japanese: <TbBuildingPavilion className="text-3xl" />,
  Bangla: <TbBuildingCommunity className="text-3xl" />,
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tutorials/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="w-8/12 mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
        {categories.map(({ language, totalTutors }) => (
          <Link
            to={`/find-tutors/${language}`}
            className="grid justify-center items-center"
            key={language}
          >
            <div className="lg:w-96 lg:h-36 w-80 h-24 gap-2 bg-white flex justify-start items-center px-4 border border-solid border-gray-600 rounded-lg">
              <div className="flex flex-col">
                <div className=" flex  justify-center items-center gap-2">
                  <div className="w-12 h-12 flex justify-center items-center">
                    {categoryIcons[language] || (
                      <FaLandmarkFlag className="text-3xl" />
                    )}
                  </div>
                  <div className="text-2xl lg:text-3xl font-medium">
                    {language} tutors
                    <p className="text-xl   text-gray-600">{totalTutors} teachers</p>
                  </div>

                  <p className="text-3xl lg:text-3xl ml-10">
                    <GoChevronRight />
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
