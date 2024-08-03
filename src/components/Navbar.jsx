import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary py-4">
        <div className="container flex items-center justify-center">
          <div className="flex items-center relative right-64">
            <img
              src="/logo-3@2x.png"
              alt="CollegeToCampus Logo"
              className="h-10 mr-4"
            />
          </div>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-white font-poppins hover:text-blue-300"
            >
              Home
            </Link>
            <Link
              to="/joblisting"
              className="text-white font-poppins hover:text-blue-300"
            >
              Job Listings
            </Link>
            <Link
              to="/training"
              className="text-white font-poppins hover:text-blue-300"
            >
              Training
            </Link>
            <Link
              to="/resources"
              className="text-white font-poppins hover:text-blue-300"
            >
              Resources
            </Link>
            <Link
              to="/interaction"
              className="text-white font-poppins hover:text-blue-300"
            >
              Interaction
            </Link>
          </div>
          <div>
            <button className="w-28 h-11 font-poppins relative left-80 bg-primary border-3 border-solid border-btnColor text-white px-4 py-2 rounded-md hover:bg-btnColor hover:text-primary transition duration-500 ease-in-out">
              Login
            </button>
          </div>
        </div>
      </nav>
      {/* <Footer /> */}
    </>
  );
};

export default Navbar;
