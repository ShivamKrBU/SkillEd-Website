import card1 from "../../Assets/HeaderImages/card1.png";
import card2 from "../../Assets/HeaderImages/card2.png";
import card3 from "../../Assets/HeaderImages/card3.png";
import card4 from "../../Assets/HeaderImages/card4.png";
import card5 from "../../Assets/HeaderImages/card5.png";
import card6 from "../../Assets/HeaderImages/card6.png";
import { Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <>
      <section className="course" id="course"  >
        <div className="" >
          <h1 className="text-center text-5xl font-extrabold pt-24 pb-20">
            Our <span className="to-blue-800">Courses</span>
          </h1>
        </div>
        <div className="h-full grid lg:ml-32 md:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-4 items-center md:gap-y-10 px-4 sm:px-0 lg:w-[80%] relative">
          <div>
            <div className="px-2 pt-2  bg-white shadow-lg rounded-t-xl">
              <img className="rounded-xl p-2" src={card1} alt="" />
              <h1 className="font-bold">
                Become a Graphic Designer - <br /> Zero to Hero
              </h1>
              <br />
              <p className="text-sm">12 hrs 30 mins</p>
              <div className="flex justify-between">
                <p className="text-sm">24 Lessons </p>
                <p className="text-2xl font-bold text-blue-700 pb-4">₹999</p>
              </div>
            </div>
            <div>
              <button  className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
                 <Link to="/courseDetail">Enroll Now</Link>
              </button>
            </div>
          </div>
          <div>
            <div className="px-2 pt-2 bg-white shadow-lg rounded-t-xl">
              <img className="rounded-xl p-2" src={card2} alt="" />
              <h1 className="font-bold">
                {" "}
                Adobe Photoshop <br />
                Masterclass
              </h1>
              <br />
              <p className="text-sm">32 hrs 30 mins</p>
              <div className="flex justify-between">
                <p className="text-sm">24 Lessons</p>
                <p className="text-2xl font-bold text-blue-700 pb-4">₹1499</p>
              </div>
            </div>
            <div>
              <button className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
              <Link to="/courseDetail">Enroll Now</Link>
              </button>
            </div>
          </div>
          <div>
            <div className="px-2 pt-2  bg-white shadow-lg rounded-t-xl">
              <img className="rounded-xl p-2" src={card3} alt="" />
              <h1 className="font-bold">
                Adobe Illustrator<br />
                Masterclass
              </h1>
              <br />
              <p className="text-sm">28 hrs 45 mins</p>
              <div className="flex justify-between">
                <p className="text-sm">24 Lessons </p>
                <p className="text-2xl font-bold text-blue-700 pb-4">₹1299</p>
              </div>
            </div>
            <div>
              <button className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
              <Link to="/courseDetail">Enroll Now</Link>
              </button>
            </div>
          </div>
          <div>
            <div className="px-2 pt-2  bg-white shadow-lg rounded-t-xl">
              <img className="rounded-xl p-2" src={card4} alt="" />
              <h1 className="font-bold">
                {" "}
                After effects & Graphics <br /> Masterclass
              </h1>
              <br />
              <p className="text-sm">12 hrs 30 mins</p>
              <div className="flex justify-between">
                <p className="text-sm">24 Lessons </p>
                <p className="text-2xl font-bold text-blue-700 pb-4">₹1899</p>
              </div>
            </div>
            <div>
              <button className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
                    <Link to="/courseDetail">Enroll Now</Link>
              </button>
            </div>
          </div>
          <div>
            <div className="px-2 pt-2 bg-white shadow-lg rounded-t-xl">
              <img className="rounded-xl p-2" src={card5} alt="" />
              <h1 className="font-bold">Google UX Design <br />(Design)</h1>
              <br />
              <p className="text-sm">29 hrs</p>
              <div className="flex justify-between">
                <p className="text-sm">24 Lessons </p>
                <p className="text-2xl font-bold text-blue-700 pb-4">₹899</p>
              </div>
            </div>
            <div>
              <button className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
              <Link to="/courseDetail">Enroll Now</Link>
              </button>
            </div>
          </div>
          <div>
            <div className="px-2 pt-2 bg-white shadow-lg rounded-t-xl">
              <img className="rounded-xl p-2" src={card6} alt="" />
              <h1 className="font-bold">
                web Design For Beginners
                <br />
                (HTML & CSS)
              </h1>
              <br />
              <p className="text-sm">15 hrs 45 mins</p>
              <div className="flex justify-between">
                <p className="text-sm">24 Lessons </p>
                <p className="text-2xl font-bold text-blue-700 pb-4">₹999</p>
              </div>
            </div>
            <div>
              <button className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
              <Link to="/courseDetail">Enroll Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-14 text-center justify-center">
          <button className=" bg-blue-600 text-lg rounded-lg text-white font-bold h-14 w-40">
            All Courses
          </button>
        </div>
      </section>
    </>
  );
}