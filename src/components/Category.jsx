import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GoChevronRight } from "react-icons/go";

const Category = () => {
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

  return (
    <div className="w-10/12 mx-auto">
      {/* card */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-10/12 mx-auto ">
        {data.slice(0, 4).map((value) => (
          <Card key={value._id} tutorials={value}></Card>
        ))}
      </div>
    </div>
  );
};

export default Category;
