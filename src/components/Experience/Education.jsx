import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import location icon

const Education = () => {
  return (
    <div className="dark:bg-black text-white dark:text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">Education</h1>

        <div className="space-y-6"> {/* Reduced spacing between sections */}
          {/* NIT Andhra Pradesh */}
          <div className="bg-dark p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-start border border-gray-700">
            <span className="text-lg text-gray-400 sm:w-1/5">2019 - 2023</span>

            <div className="sm:w-3/5 space-y-1">
              <h1 className="text-2xl font-bold">National Institute of Technology Andhra Pradesh</h1>
              <p className="text-lg text-gray-300">
                Bachelor’s Degree in Electronics and Communication Engineering
              </p>

              <div className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2 text-primary" />
                Tadepalligudem, Andhra Pradesh
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-gray-700 px-2 py-1 rounded-md">Data Science</span>
                <span className="bg-gray-700 px-2 py-1 rounded-md">OOPs</span>
                <span className="bg-gray-700 px-2 py-1 rounded-md">Image Processing</span>
                <span className="bg-gray-700 px-2 py-1 rounded-md">Problem Solving</span>
              </div>
            </div>

            <div className="bg-primary text-white px-3 py-2 rounded-md shadow-md sm:w-1/5 text-center mt-4 sm:mt-0">
              CGPA : <span className="font-bold">6.81</span>
            </div>
          </div>

          {/* Narayana Junior College */}
          <div className="bg-dark p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-start border border-gray-700">
            <span className="text-lg text-gray-400 sm:w-1/5">2017 - 2019</span>

            <div className="sm:w-3/5 space-y-1">
              <h1 className="text-2xl font-bold">Narayana Junior College</h1>
              <p className="text-lg text-gray-300">Intermediate in MPC</p>

              <div className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2 text-primary" />
                Hyderabad
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-gray-700 px-2 py-1 rounded-md">Maths</span>
                <span className="bg-gray-700 px-2 py-1 rounded-md">Physics</span>
                <span className="bg-gray-700 px-2 py-1 rounded-md">Chemistry</span>
              </div>
            </div>

            <div className="bg-primary text-white px-3 py-2 rounded-md shadow-md sm:w-1/5 text-center mt-4 sm:mt-0">
              Percentage : <span className="font-bold">93.7</span>
            </div>
          </div>

          {/* SPR School of Excellence */}
          <div className="bg-dark p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-start border border-gray-700">
            <span className="text-lg text-gray-400 sm:w-1/5">2016 - 2017</span>

            <div className="sm:w-3/5 space-y-1">
              <h1 className="text-2xl font-bold">SPR School of Excellence</h1>
              <p className="text-lg text-gray-300">10th standard</p>

              <div className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2 text-primary" />
                Warangal
              </div>
            </div>

            <div className="bg-primary text-white px-3 py-2 rounded-md shadow-md sm:w-1/5 text-center mt-4 sm:mt-0">
              CGPA : <span className="font-bold">9.30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
