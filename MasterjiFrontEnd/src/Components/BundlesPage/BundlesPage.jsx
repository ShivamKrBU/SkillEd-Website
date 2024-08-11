import bundle1 from "../../Assets/HeaderImages/bundle1.png";
import bundle2 from "../../Assets/HeaderImages/bundle2.png";
import bundle3 from "../../Assets/HeaderImages/bundle3.png";


export default function LandingPage() {
  return (
    <>
      <section>
        <div className="">
          <h1 className="text-center text-5xl font-extrabold pt-24 pb-20">
            Exclusive Career<span className="text-blue-700">Bundles</span>
          </h1>
        </div>
        <div className="h-full grid lg:ml-32 md:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-4 items-center md:gap-y-10 px-4 sm:px-0 lg:w-[80%] relative">
          <div>
            <div className="px-2 pt-2  bg-white shadow-lg rounded-t-xl">
              <img className="rounded-xl p-2" src={bundle1} alt="" />
              <h1 className="font-bold">
                  Business Management -<br/>Essential Skills
              </h1>
              <br/>
              <p className="text-sm">Free PDF Certificates | Video Training</p>
              <div className="flex justify-between">
                <p className="text-sm">36 Courses Bundle</p>
                <p className="text-2xl font-bold text-blue-700 pb-4">₹20999</p>
              </div>
            </div>
            <div>
              <button className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
                Enroll Now
              </button>
            </div>
          </div>
          <div>
            <div className="px-2 pt-2  bg-white shadow-lg rounded-t-xl">
              <img className="rounded-xl p-2" src={bundle2} alt="" />
              <h1 className="font-bold">
                 HR & Leadership Management - <br />
                 Essential Skills
              </h1>
              <br/>
              <p className="text-sm">Free PDF Certificates | Video Training</p>
              <div className="flex justify-between">
                <p className="text-sm">26 Courses Bundle</p>
                <p className="text-2xl font-bold text-blue-700 pb-4">₹23999</p>
              </div>
            </div>
            <div>
              <button className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
                Enroll Now
              </button>
            </div>
          </div>
          <div>
            <div className="px-2 pt-2  bg-white shadow-lg rounded-t-xl">
              <img className="rounded-xl p-2" src={bundle3} alt="" />
              <h1 className="font-bold">
                Career Development - <br />
                Essential Skills
              </h1>
              <br />
              <p className="text-sm">Free PDF Certificates | Video Training</p>
              <div className="flex justify-between">
                <p className="text-sm">45 Lessons </p>
                <p className="text-2xl font-bold text-blue-700 pb-4">₹27999</p>
              </div>
            </div>
            <div>
              <button className="bg-sky-700 rounded-b-lg text-white font-bold w-full bottom-0 h-10 left-0">
                Enroll Now
              </button>
            </div>
          </div>
         
        </div>
        <div className="pt-14 text-center justify-center">
          <button className=" bg-blue-600 text-lg rounded-lg text-white font-bold h-14 w-48">
            View All Bundles
          </button>
        </div>
      </section>
    </>
  );
}