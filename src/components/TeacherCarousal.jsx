import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TeacherCarousal = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tutorials`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    loop:true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full py-20 bg-gray-900">
      <div className="w-9/12 mx-auto">
      <Slider {...settings}>
        {data.slice(2, 8).map((d) => (
          <div className="">
            <div className="bg-indigo-400 py-8 h-56 flex justify-center items-center rounded-t-xl ">
              <img src={d.image} alt="" srcset="" className="h-44 w-44 rounded-full" />
            </div>
            <div className="flex  flex-col gap-2 justify-center items-center py-8 px-4 bg-white rounded-b-xl">
            <div className="flex  gap-4 justify-center items-center">
            <p className="text-xl font-medium text-black">{d.name}</p>
            <p className="text-[10px]  bg-green-200  rounded-lg px-2 text-black">{d.language}</p>
            </div>
            <p className="text-lg font-medium text-black line-clamp-2 px-4">{d.description}</p>
            <Link className="btn text-lg border-green-300 font-medium text-black bg-indigo-400 "> Read more</Link>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeacherCarousal;
