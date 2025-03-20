import { useEffect, useState } from "react";
import Card from "./Card";

const AllTutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("https://learn-language-server-tau.vercel.app/tutorials")
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, []);

  return (
    <div className="w-10/12 mx-auto lg:min-h-screen py-20">
      <div className="lg:w-4/6 mx-auto pb-10 p-4 ">
        <h2 className="lg:text-4xl text-balance text-2xl leading-[2] dark:text-white font-bold text-center">
          Find the Right Tutor to Help You Achieve Your Learning Goals and
          Succeed
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {tutors.map((value) => (
          <Card key={value._id} tutorials={value}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllTutors;
