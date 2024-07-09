import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useState } from "react";

const CountUpSection = () => {
    const [counter, setCounter] = useState(false);
  return (
    <div className="py-10 bg-red-600 mt-12 ">
    <div className="text-center mx-auto w-full container text-white">
      <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-14 py-7">
          <div className="text-center">
          
            <h2 className="text-5xl font-bold">
              {counter && <CountUp start={0} end={15} duration={2} delay={0} />}
            </h2>
            <h2 className="text-xl font-semibold pb-4">YEAR EXPERIENCE</h2>
          </div>
          <div className="text-center">
            
            <h2 className="text-5xl font-bold">
              {counter && <CountUp start={0} end={2645} duration={2} delay={0} />}
            </h2>
            <h2 className="text-xl font-semibold pb-4">HAPPY DONORS</h2>
          </div>
          <div className="text-center">
            
            <h2 className="text-5xl font-bold">
              {counter && <CountUp start={0} end={75} duration={2} delay={0} />}
            </h2>
            <h2 className="text-xl font-semibold pb-4">TOTAL AWARDS</h2>
          </div>
          <div className="text-center">
            
            <h2 className="text-5xl font-bold">
              {counter && <CountUp start={0} end={3624} duration={2} delay={0} />}
            </h2>
            <h2 className="text-xl font-semibold pb-4">HAPPY RECIPIENTS</h2>
          </div>
        </div>
      </ScrollTrigger>
    </div>
    {/* <div className="relative">
       
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-gray-800 text-white text-center text-sm p-2 rounded opacity-100">
          Tooltip text with additional information.
          <div className="absolute left-full top-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-red-800 border-r-8 border-r-transparent border-l-8 border-l-transparent"></div>
        </div>
      </div> */}
    {/* <div className=''>
    <div className="relative group flex justify-center">
  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2  bg-white text-gray-800 text-center text-sm p-3 rounded-lg shadow-md opacity-100 group-hover:bg-red-500 hover:text-white transition duration-300">
  <h2>Registration</h2>
    <span className="block mb-1">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</span>
    <div className="absolute left-full top-1/2 h-6 w-6 transform -translate-x-1/2 -translate-y-3 bg-white group-hover:bg-red-500  rotate-45"></div>
  </div>
  <div className='absolute bg-white'>
    <div><span>01</span></div>
  </div>
</div>
    </div> */}
  </div>
  )
}

export default CountUpSection