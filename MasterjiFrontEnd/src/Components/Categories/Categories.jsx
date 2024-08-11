import React from 'react';
import { FaHeart, FaCode } from "react-icons/fa";
import { SiWikimediacommons, SiAudiotechnica } from "react-icons/si";
import { MdDeveloperMode, MdOutlineSportsKabaddi, MdOutlineCrisisAlert } from "react-icons/md";
import { GiUnstableProjectile } from "react-icons/gi";

const Card = () => {
  const courses = [
    { name: "Health & Safety", icon: <FaHeart color='blue' fontSize={40}/> },
    { name: "Media, Arts & Creative Skills", icon: <SiWikimediacommons color='blue' fontSize={40}/> },
    { name: "Software & Web Development", icon: <FaCode color='blue' fontSize={40}/> },
    { name: "Personal Development", icon: <MdDeveloperMode color='blue' fontSize={40}/> },
    { name: "Project Management", icon: <GiUnstableProjectile color='blue' fontSize={40}/> },
    { name: "Sports & Fitness", icon: <MdOutlineSportsKabaddi color='blue' fontSize={40}/> },
    { name: "Teaching & Childcare", icon: <SiAudiotechnica color='blue' fontSize={40}/> },
    { name: "Sales & Marketing", icon: <MdOutlineCrisisAlert color='blue' fontSize={40}/> },
    
  ];

  return (
    <div className="flex flex-col items-center mt-12 w-full px-4">
      <div className="mb-5">
        <h2 className="text-3xl font-bold">Courses <span className="text-indigo-700">Category</span></h2>    
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full justify-items-center">
        {courses.map((course, index) => (
          <div key={index} className="bg-gray-200 w-full max-w-xs h-[180px] flex flex-col items-center justify-center text-center rounded-md shadow-md">
            <div className="text-3xl mb-3">{course.icon}</div>
            <h3 className="text-lg font-bold">{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;