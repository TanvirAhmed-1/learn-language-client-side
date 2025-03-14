import React from "react";
import { useLoaderData } from "react-router-dom";
import Tutorials from "./Tutorials";

const FindTutors = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>/find-tutors{data.length}</h1>
      <div className="w-10/12 mx-auto space-y-6">
        {data.map((value) => (
          <Tutorials key={value._id} tutorials={value}></Tutorials>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
