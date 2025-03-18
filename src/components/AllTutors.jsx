import { useEffect, useState } from "react";
import Card from "./Card";

const AllTutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tutorials") 
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, []);

  return (
    <div className="w-10/12 mx-auto lg:min-h-screen py-20">
      <h2 className="text-2xl font-bold">All Tutors</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {tutors.map((value) => (
          <Card key={value._id} tutorials={value}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllTutors;
