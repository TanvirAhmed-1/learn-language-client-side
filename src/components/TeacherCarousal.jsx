import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TeacherCarousal = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://learn-language-server-tau.vercel.app/tutorials`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    loop:true,
    speed: 700,
    slidesToShow:3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-full py-20 bg-white dark:bg-black">
      <h1 className="lg:text-4xl text-2xl font-semibold dark:text-white text-center w-5/8 mx-auto py-10 text-black">Explore & Connect with Top Educators. Join a Free Class </h1>
      <div className="lg:w-9/12 px-7 mx-auto">
      <Slider {...settings}>
        {data.slice(1, 10).map((d) => (
          <div className="">
            <div className="bg-indigo-400 py-8 h-56 flex justify-center items-center rounded-t-xl ">
              <img src={d.image} alt="" srcset="" className="h-44 w-44 rounded-full" />
            </div>
            <div className="flex h-64 flex-col gap-4 justify-center items-center py-8 px-4 dark:bg-white bg-[#EBE8DB] rounded-b-xl">
            <div className="flex  gap-4 justify-center items-center">
            <p className="text-xl font-medium text-black">{d.name}</p>
            <p className="text-[10px]  bg-green-200  rounded-lg px-2 text-black">{d.language}</p>
            </div>
            <p className="text-lg font-medium text-black line-clamp-2 px-4">{d.description}</p>
            <Link to={"/find-tutors"} className="btn text-lg border-green-300 font-medium text-black bg-indigo-400 "> Read more</Link>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeacherCarousal;
