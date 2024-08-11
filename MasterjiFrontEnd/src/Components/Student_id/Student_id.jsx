import Id from '../../Assets/HeaderImages/student id.png';

export default function LandingPage() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="pt-24 text-center">
          <h1 className="text-3xl md:text-5xl text-blue-700 font-bold">
            <span className="text-slate-950">Get</span> Student ID Card
          </h1>
          <p className="font-bold mt-4 md:text-lg">
            Order your student ID card now and enjoy the benefits of getting student discounts
          </p>
        </div>
        <div className="pt-14 flex justify-center">
          <img className="max-w-full" src={Id} alt="Student ID Card"/>
        </div>
      </div>
    </>
  );
}