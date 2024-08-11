import React from "react";
import CourseDetailsImg from "../../Assets/CourseDetailsImg/WebD.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoStarSharp } from "react-icons/io5";

import {
  faClock,
  faMobileAlt,
  faFileAlt,
  faFileDownload,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const CoursePage = () => {
  const ratings = {
    stars: [1, 1, 1, 1, 0],
    averageRating: 4.5,
    totalRatings: 1234,
    totalStudents: 244349,
  };

  return (
    <div className=" w-full md:flex  justify-center p-4 ">
      <div className=" w-[100%] md:w-[50%]">
        <img src={CourseDetailsImg} alt="Course" className="mb-4" />
        <h1 className="text-3xl font-bold mb-2 ">
          Graphic Design Masterclass - Learn GREAT Design
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          The Ultimate Graphic Design Course Which Covers Photoshop,
          Illustrator, InDesign, Design Theory, Branding &amp; Logo Design
        </p>

        <div className="flex items-center mb-4">
          {ratings.stars.map((star, index) => (
            <span key={index} className="text-lg text-yellow-500 mr-1">
              <IoStarSharp />
            </span>
          ))}
          <span className="text-sm">
            {ratings.averageRating} ({ratings.totalRatings} ratings){" "}
            {ratings.totalStudents} students
          </span>
        </div>

        <p className="text-2xl font-bold text-green-500 mb-4">₹1299</p>

        <h1 className="text-3xl font-bold mb-2 ">This course includes:</h1>
        <ul className="pl-6 mb-4 list-none ">
          <li>
            <FontAwesomeIcon icon={faClock} className="text-blue-500 mr-3" /> 30
            hours on-demand video
          </li>
          <li>
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="text-blue-500 mr-3"
            />
            Access on mobile and TV
          </li>
          <li>
            <FontAwesomeIcon icon={faFileAlt} className="text-blue-500 mr-3" />
            1 article
          </li>
          <li>
            <FontAwesomeIcon
              icon={faFileDownload}
              className="text-blue-500 mr-3"
            />
            55 downloadable resources
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCertificate}
              className="text-blue-500 mr-3"
            />
            Certificate of completion
          </li>
        </ul>
        <h1 className="text-lg font-bold">
          Instructor: <span className="font-semibold">Shivam Kumar</span>
        </h1>
      </div>

      <div className="w-[100%] pr-8 md:pl-10  mt-10 md:mt-0 md:w-[40%]">
        <div>
          <h1 className="text-3xl font-bold mb-4 ">Course content</h1>
          <ul className="list-decimal pl-8 mb-8 font-bold  ">
            <li className="mb-4 	">Introduction to Graphic Design principles</li>
            <li className="mb-4	">Understanding design theory and concepts</li>
            <li className="mb-4	">
              Mastering Adobe Photoshop for graphic design
            </li>
            <li className="mb-4	">
              Exploring Adobe Illustrator for vector graphics
            </li>
            <li className="mb-4	">
              Creating layouts and compositions with Adobe InDesign
            </li>
            <li className="mb-4	">Designing logos and branding elements</li>
            <li className="mb-4	">
              Understanding typography and its applications
            </li>
            <li className="mb-4	">
              Exploring color theory and its significance in design
            </li>
            <li className="mb-4	">Practical projects and hands-on exercises</li>
            <li className="mb-4	">
              Tips and techniques for professional graphic design workflows
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
