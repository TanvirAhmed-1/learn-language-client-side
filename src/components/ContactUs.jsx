import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-black py-12 px-6 min-h-full md:pb-36">
      <div className="md:w-10/12 mx-auto  md:p-8 ">
        {/* Header Section */}
        <div className="py-20">
          <h2 className="text-5xl font-bold text-center py-3 dark:text-white text-gray-800">
            Contact Us
          </h2>
          <p className="text-center text-2xl dark:text-white text-gray-600 mt-2">
            Have questions? Reach out to us and we’ll be happy to help.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/*  Contact */}
          <div className="space-y-6 ">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-500 text-2xl" />
              <p className="text-gray-700 dark:text-white text-xl">+88 234 567 890</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-500 text-2xl" />
              <p className="text-gray-700 dark:text-white text-xl">Bdinfo@careerhelp.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-green-500 text-2xl" />
              <p className="text-gray-700 dark:text-white text-xl">
                123 Mirpur, Dhaka, Bangladesh
              </p>
            </div>

            <div className="mt-6">
              <img
                src="https://img.freepik.com/premium-photo/business-website-page-contact-businessman-touching-contact-us-icons-customer-service-include-telephone-address-email-message-by-3d-render_50039-2828.jpg"
                alt="Office Location"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right */}
          <div className="bg-gray-50 p-6 dark:bg-black rounded-lg shadow-md *:text-xl">
            <form className="space-y-4">
              <div>
                <label className="text-gray-700 dark:text-white font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border bg-white rounded-md mt-1 focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-white font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border bg-white rounded-md mt-1 focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-white font-semibold">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full p-3 border bg-white rounded-md mt-1 focus:ring focus:ring-blue-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;