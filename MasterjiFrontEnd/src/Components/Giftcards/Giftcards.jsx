import gift from '../../Assets/HeaderImages/gift.png'

export default function LandingPage() {
    return (
      <>
         <div className='flex flex-col md:flex-row bg-white pt-24'>
            <div className='lg:pl-20 md:w-[52%] flex flex-col space-y-4 p-8 sm:p-0'>
               <h1 className='text-5xl font-bold'>Wht You Should Get <br/> A <span className='text-blue-700'>Gift Card ?</span></h1><br/>
               <p className='font-bold'>Make a difference in the lives of your loved ones. Keep <br/> yourself/your loved one's one step ahead and help to master <br/> the skills that need to succeed. Send a gift card for your loved <br/> ones today.</p><br/>
               <p>• Lifetime Validity of the Gift Card</p>
               <p>• Get a greeting card for any occasion absolutely <br/> free with a gift card</p>
               <p>• Applicable for All Courses</p>
               <p>• Use Available Balance any time from <br/> your Account</p><br/>
               <div className='text-center sm:text-start'>
               <button className='bg-blue-600 text-lg rounded-lg text-white font-bold h-14 w-64'>Get Your Gift Card Now</button>
              </div>

            </div>
            <div className='lg:justify-end justify-center md:w-[48%] flex flex-col p-8 sm:p-0'>
              <img src={gift} alt="" className=''/>
            </div>
          </div>
      </>
    );
  }
  