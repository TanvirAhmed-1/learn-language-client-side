import { useContext } from "react";
import { FaBookmark } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authorization/Authorization";
import { toast } from "react-toastify";

const TutorsDetails = () => {
  const userData = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(userData, user?.email);

  const { name, image, language, description, price, review, _id, email } = userData;

  const handleBook = () => {
    fetch(`http://localhost:5000/book/tutorials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        language: language,
        price: price,
        tutorId: _id,
        tutorEmail: email,
        email: user?.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Booking Response:", data);
        toast.success("Booking Successful!");
      })
      .catch((err) => {
        console.error("Booking Error:", err);
        toast.error("Booking Failed! Please try again.");
      });
  };

  return (
    <div>
      <h1 className="text-3xl pt-20 pb-10 text-center md:text-4xl font-bold dark:text-white text-black mb-6">
        Book Your Favorite Tutorial
      </h1>
      <div className="flex justify-center items-center pb-20 h-full px-6">
        <div className="card card-side bg-gray-300  shadow-lg border w-full max-w-7xl max-h-[500px]">
          <figure className="w-[50%] bg-white dark:bg-black rounded-lg p-4 md:p-8">
            <img
              src={image}
              alt={name}
              className="h-46 w-80 p-4 overflow-hidden object-cover rounded-3xl border bg-gray-200 border-gray-400"
            />
          </figure>
          <div className="card-body w-5/8 p-6 gap-1">
            <h2 className="card-title text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600 text-xl pt-6 ">{description}</p>
            <p className="text-lg font-medium">
              <span className="text-green-600">Language:</span> {language}
            </p>
            <p className="text-lg font-medium">
              <span className="text-green-600">Price:</span> ${price}
            </p>
            <div className="text-gray-600 flex justify-start gap-4 items-center">
              <strong>Rating:</strong>
              <span>{review}</span>
              <div className="rating">
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
            <div className="card-actions mt-8">
              <button
                onClick={handleBook}
                className="py-3 px-8 flex rounded-lg justify-center items-center gap-3 text-xl bg-green-500 text-white hover:bg-green-600"
              >
                Book Tutor
                <FaBookmark className="text-xl text-sky-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsDetails;
