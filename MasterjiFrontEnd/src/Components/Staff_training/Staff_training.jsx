import staff from '../../Assets/HeaderImages/staff.png';

export default function LandingPage() {
  return (
    <>
      <div id='instructor' className='bg-white'>
        <div className="pt-24">
          <h1 className="text-blue-700 font-bold text-5xl text-center"> <span className=" text-slate-950">Staff</span> {' '} Training</h1>
          <p className="font-bold text-center">Our staffs, mentors and  teachers are privided the best possible training</p>
        </div>
        <div className='flex w-full flex-col md:flex-row p-8 sm:p-0'>
          <div className='md:w-[52%] flex justify-center'>
            <img src={staff} alt="" className='md:pl-20 md:pt-12' />
          </div>
          <div className='font-bold lg:pt-28 md:pt-0 lg:pl-5 md:w-[44%] flex flex-col space-y-4 p-8 sm:p-0'>
            <li className='w-full'>2000+ On Demand, fully accredited, high quality, engaging courses that hold learners attention</li>
            <li>Our courses are taught by the world's leading experts suitable to compnies of all sizes</li>
            <li>Massive discounts when you purchase in bulk</li>
            <li>Cover more then 134 categories including all HR and Compliance Courses</li>
            <li>Custom tailored Training Package</li>
          </div>
        </div>
      </div>
    </>
  );
}
