import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../authorization/Authorization";
import BookedTutorsCard from "./BookedTutorsCard";
import axios from "axios";
import AxiosHook from "../hook/AxiosHook";

const BookedTutors = () => {
  const { user } = useContext(AuthContext);
  const [bookedTutors, setBookedTutors] = useState([]);
  const axioshook=AxiosHook()

  useEffect(() => {

    // fetch(`http://localhost:5000/book/tutorials?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setBookedTutors(data))
    //   .catch((err) => console.log(err));

  // axios
  //     .get(`http://localhost:5000/book/tutorials?email=${user?.email}`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setBookedTutors(res.data);
  //     });

  axioshook.get(`/book/tutorials?email=${user?.email}`)
       .then((res) => {
        setBookedTutors(res.data);
      });

  }, [user?.email]);

  const handleReview = (id) => {
    fetch(`http://localhost:5000/book/tutorial/review/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ review: 1 }), 
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const reviewUpdate = bookedTutors.map((tutor) =>
            tutor._id === id ? { ...tutor, review: tutor.review + 1 } : tutor
          );
          setBookedTutors(reviewUpdate);
        }
      })
      .catch((err) => console.error("Review update failed:", err));
  };

  return (
    <div className="p-6 lg:w-10/12 mx-auto">
      <h1 className="text-3xl font-bold dark:text-white text-black py-10  text-center">
        My Booked Tutors
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {bookedTutors.map((tutor, index) => (
          <BookedTutorsCard
            key={index}
            tutorials={tutor}
            handleReview={handleReview}
          ></BookedTutorsCard>
        ))}
      </div>
    </div>
  );
};

export default BookedTutors;
