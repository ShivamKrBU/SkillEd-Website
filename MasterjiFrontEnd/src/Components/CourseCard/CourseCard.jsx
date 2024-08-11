import React from 'react'
import card1 from "../../Assets/HeaderImages/card1.png";

import { Link } from 'react-router-dom'

const CourseCard = ({ fees, duration, title, level, id }) => {
    return (
        <div className='' >
            <div className="px-2 pt-2  bg-white shadow-lg rounded-t-xl">
                <img className="rounded-xl " src={card1} alt="sdfn" />
                <span className="font-bold">
                    {title}
                </span>
                <br />
                <p className="text-sm">{duration}</p>
                <div className="flex justify-between">
                    <p className="text-sm">{level}</p>
                    <p className="text-2xl font-bold text-blue-700 pb-4">${fees}</p>
                </div>
            </div>
            <div>
                <button className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
                    <Link to={`/dashboard/${id}`}>View more details</Link>
                </button>
            </div>
        </div>
    )
}
export default CourseCard
