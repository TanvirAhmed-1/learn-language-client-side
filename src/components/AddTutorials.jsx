import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../authorization/Authorization";

const AddTutorials = () => {

  const {user}=useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    fetch(`https://learn-language-server-tau.vercel.app/Tutorials`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.insertedId) {
          toast.success("Tutorial Successfully Added");
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div>
      <div className="lg:w-10/12 p-4 mx-auto border rounded-lg shadow-sm bg-white dark:bg-black py-20">
        <div className="p-6 border-b pb-10">
          <h2 className="text-4xl text-center dark:text-white font-semibold pb-10">
            Create Tutorial
          </h2>
          <p className="text-lg text-center text-gray-500 dark:text-white mt-1">
            Fill out the form below to create a new tutorial
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium dark:text-white">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-3 py-3 border bg-white dark:bg-black dark:text-white text-black border-gray-300 rounded-md text-sm"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium dark:text-white">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  defaultValue={user.email}
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-3 bg-white dark:bg-black dark:text-white text-black border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>

            {/* Image URL Field */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-white">
                  Tutorial Photo URL
                </label>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <input
                      name="image"
                      placeholder="Enter Your Photo URL"
                      type="text"
                      className="flex-1 px-3 py-3 bg-white dark:bg-black dark:text-white text-black border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="review" className="block text-sm font-medium dark:text-white">
                  Review
                </label>
                <div className="flex items-center gap-2">
                  <input
                    name="review"
                    type="text"
                    placeholder="Review"
                    className="w-full px-3 py-3 border bg-white dark:bg-black dark:text-white text-black border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Language Field */}
              <div className="space-y-2">
                <label htmlFor="language" className="block text-sm font-medium dark:text-white">
                  Language
                </label>
                <select
                  name="language"
                  className="w-full px-3 py-3 border bg-white text-black dark:bg-black dark:text-white border-gray-300 rounded-md text-sm"
                >
                  <option value="" defaultValue="English">
                    Select a language
                  </option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>italian</option>
                  <option>Japanese</option>
                  <option>Bangla</option>
                </select>
              </div>

              {/* Price Field */}
              <div className="space-y-2">
                <label htmlFor="price" className="block text-sm font-medium dark:text-white">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    $
                  </span>
                  <input
                    name="price"
                    type="text"
                    placeholder="Set a price for your tutorial"
                    className="w-full pl-7 pr-3 bg-white  dark:bg-black dark:text-white text-black py-3 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                placeholder="Provide a detailed description of your tutorial..."
                className="w-full px-3 py-3 border bg-white dark:bg-black dark:text-white text-black border-gray-300 rounded-md text-sm min-h-[120px]"
              />
              <p className="text-xs text-gray-500 dark:text-white">
                Describe what users will learn from your tutorial
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Create Tutorial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTutorials;
