import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

export default function Slider() {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        height: "100vh",
      }}
      speed={700}
      parallax={true}
      pagination={{ clickable: true }}
      loop={true}
      navigation={true}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Parallax, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/GvjMsDTd/brainstorm-meeting.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
        data-swiper-parallax="-23%"
      ></div>

      {/** Slide 1 */}
      <SwiperSlide className="ml-6lg:ml-6 mt-[40%]  lg:mt-[16%]   text-start text-balance md:text-left">
        <div className="text" data-swiper-parallax="-100">
          <p className="text-2xl md:text-5xl text-white font-bold md:leading-[1.2]">
            Learn faster with your best language tutor.
          </p>
        </div>
        <div className="pt-6 md:pt-10">
          <button
            className=" btn py-2 md:py-4 text-sm md:text-lg flex items-center justify-end gap-2"
            data-swiper-parallax="-200"
          >
            Get Started <FaArrowRight />
          </button>
        </div>
      </SwiperSlide>

      {/** Slide 2 */}
      <SwiperSlide className="ml-6 lg:ml-6 mt-[40%]  lg:mt-[16%] text-balance text-start  md:text-left">
        <div className="text" data-swiper-parallax="-100">
          <p className="text-xl md:text-5xl text-white font-bold md:leading-[1.2]">
            Boost your skills with expert language tutors.
          </p>
        </div>
        <div className="pt-6 md:pt-14">
          <button
            className="btn py-2 md:py-4 text-sm md:text-lg flex items-center justify-end gap-2"
            data-swiper-parallax="-200"
          >
            Get Start <FaArrowRight />
          </button>
        </div>
      </SwiperSlide>

      {/** Slide 3 */}
      <SwiperSlide className="lg:ml-6 mt-[40%]  lg:mt-[16%] text-balance text-start  md:text-left">
        <div className="text" data-swiper-parallax="-100">
          <p className="text-xl md:text-5xl text-white font-bold md:leading-[1.2]">
            One-on-one tutoring for effortless language learning.
          </p>
        </div>
        <div className="pt-6 md:pt-14">
          <button
            className="btn py-2 md:py-4 text-sm md:text-lg flex items-center justify-end gap-2"
            data-swiper-parallax="-200"
          >
            Get Start <FaArrowRight />
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
