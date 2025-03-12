import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; 

const MyTutorials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tutorials")
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tutorials/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((da) => {
            console.log(da);
            if (da.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }

            const filterData = data.filter((v) => v._id !== id);
            setData(filterData);  // Corrected this to update state properly
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">
        Total Tutorials: {data.length}
      </h1>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">#</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Language</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Review</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Update</th>
              <th className="border p-2">Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((v, index) => (
              <tr key={index} className="text-center border">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2 grid justify-center items-center">
                  <img
                    src={v.image}
                    alt="Tutorial"
                    className="w-16 h-16 object-cover border border-gray-400 rounded-lg"
                  />
                </td>
                <td className="border p-2">{v.name}</td>
                <td className="border p-2">{v.language}</td>
                <td className="border p-2">${v.price}</td>
                <td className="border p-2">{v.review}</td>
                <td className="border p-2 w-[40%] text-wrap">{v.description}</td>
                <td className="border p-2">
                  <Link to={`/update/${v._id}`}
                  
                  className="text-sky-500 text-lg">
                    <FaPen />
                  </Link>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(v._id)}
                    className="text-red-500 text-xl"
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
