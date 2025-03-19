import React from "react";
import { FaUsers, FaTrophy, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className="min-h-screen dark:bg-black bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl dark:text-white font-bold text-center text-gray-900 mb-8">
          About EquiSports
        </h1>

        {/* Mission Section */}
        <div className="bg-white dark:bg-gray-200 shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="text-green-400 text-xl px-2">LG StudyZone </span>our mission is to bridge the gap between
            students and expert tutors by providing a seamless and personalized
            learning experience. We believe that education should be accessible,
            engaging, and tailored to each learner’s unique needs. Our goal is
            to connect students with highly qualified tutors who inspire, guide,
            and empower them to achieve academic success and personal growth.
            Through innovative technology and a commitment to excellence, we
            strive to create a supportive learning environment where students
            can build confidence, enhance their skills, and unlock their full
            potential.F
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-200 shadow-lg rounded-lg p-6 text-center">
            <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Dedicated Community
            </h3>
            <p className="text-gray-600">
              Join a community of passionate athletes and sports lovers.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-200 shadow-lg rounded-lg p-6 text-center">
            <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Top-Quality Gear
            </h3>
            <p className="text-gray-600">
              We offer only the best equipment from trusted brands.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-200 shadow-lg rounded-lg p-6 text-center">
            <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer-Centric
            </h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-gray-200 shadow-lg rounded-lg p-6 text-center">
            <IoIosMan className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Best Tutors
            </h3>
            <p className="text-gray-600">
              Would best experience Teacher.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-[#F4F8D3] dark:bg-gray-200 shadow-lg rounded-lg p-8">
          <h2 className="text-4xl font-semibold text-gray-800 my-10">
            Privacy Policy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Additional Terms & Conditions
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 mb-4 text-lg">
                  By using our services and purchasing from our store, you agree
                  to comply with the following additional terms:
                </p>
                <ul className="space-y-4 text-black">
                  <li>
                    <strong>Privacy Policy:</strong> We value your privacy. Your
                    personal information will never be shared with third parties
                    without your consent.
                  </li>
                  <li>
                    <strong>Shipping Terms:</strong> We offer worldwide
                    shipping. Delivery times vary depending on location, and
                    customers are responsible for any customs fees or import
                    taxes.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">
                Return & Refund Policy
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 mb-4">
                  We offer a 30-day return policy. If you are not completely
                  satisfied with your purchase, you may return the product in
                  its original condition for a full refund.
                </p>
                <ul className="space-y-2 text-black">
                  <li>- Return within 30 days of purchase</li>
                  <li>- Product must be unused and in original packaging</li>
                  <li>
                    - Refund will be processed to the original payment method
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4 text-black">
                  <li className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    <span className="text-lg">Credit Card</span>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    <span className="text-lg">PayPal</span>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    <span className="text-lg">Bank Transfer</span>
                  </li>
                </ul>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-6">
                  Proceed to Checkout
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
