import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useState } from "react";

const CountUpSection = () => {
    const [counter, setCounter] = useState(false);
  return (
    <div className="py-10 bg-red-600 mb-5">
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
  </div>
  )
}

export default CountUpSection