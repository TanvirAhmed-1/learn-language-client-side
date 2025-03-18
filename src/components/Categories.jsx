import React, { useEffect, useState } from "react";
import { BiLibrary } from "react-icons/bi";
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
  English: <FaLandmarkFlag className="text-3xl md:text-5xl dark:text-white" />,
  Spanish: <BsBuildingsFill className="text-3xl md:text-5xl dark:text-white" />,
  French: <TbBuildingCastle className="text-3xl md:text-5xl dark:text-white" />,
  Italian: <TbBuildingFortress className="text-3xl md:text-5xl dark:text-white" />,
  Japanese: <TbBuildingPavilion className="text-3xl md:text-5xl dark:text-white" />,
  Bangla: <TbBuildingCommunity className="text-3xl md:text-5xl dark:text-white" />,
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
    <div className="lg:w-8/12 px-5 lg:px-0 mx-auto py-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {categories.map(({ language, totalTutors }) => (
          <Link
            to={`/find-tutors/${language}`}
            className="grid justify-center items-center"
            key={language}
          >
            <div className="lg:w-96 lg:h-36 w-80 h-24 gap-2 bg-white dark:bg-gray-600 flex justify-start items-center px-4 border border-solid border-gray-600 rounded-lg">
              <div className="flex flex-col">
                <div className=" flex  justify-center items-center gap-2">
                  <div className="w-12 h-12 flex justify-center items-center">
                    {categoryIcons[language] || (
                      <BiLibrary className="text-3xl md:text-5xl dark:text-white"  />
                    )}
                  </div>
                  <div className="text-2xl lg:text-3xl font-medium dark:text-white">
                    {language} tutors
                    <p className="text-xl dark:text-white  text-gray-600">{totalTutors} teachers</p>
                  </div>

                  <p className="text-3xl lg:text-3xl ml-10">
                    <GoChevronRight className="dark:text-white" />
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
