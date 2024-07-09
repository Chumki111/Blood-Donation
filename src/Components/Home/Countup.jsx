import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
// react icons
import { FaAward } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { GiCupidonArrow } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";

const Countup = () => {
    const [counter, setCounter] = useState(false)
    return (
        <div className='py-10'>
  <div className="relative py-12 mt-12" style={{ backgroundImage: 'url("https://i.postimg.cc/PxYG8YnZ/count.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-black bg-opacity-80"></div>
    <div className="relative text-center mx-auto w-full container text-white">
      <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-14 py-7">
          <div className="text-center">
            <div className="flex justify-center items-center pb-4">
              <FaAward className="text-6xl text-[#EB2C29]" />
            </div>
            <h2 className="text-5xl font-bold">
              {counter && <CountUp start={0} end={1} duration={2} delay={0} />}
            </h2>
            <h2 className="text-xl font-semibold pb-4">YEAR EXPERIENCE</h2>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center pb-4">
              <GiCupidonArrow className="text-6xl text-[#EB2C29]" />
            </div>
            <h2 className="text-5xl font-bold">
              {counter && <CountUp start={0} end={1211} duration={2} delay={0} />}
            </h2>
            <h2 className="text-xl font-semibold pb-4">HAPPY DONORS</h2>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center pb-4">
              <GiTrophyCup className="text-6xl text-[#EB2C29]" />
            </div>
            <h2 className="text-5xl font-bold">
              {counter && <CountUp start={0} end={6} duration={2} delay={0} />}
            </h2>
            <h2 className="text-xl font-semibold pb-4">TOTAL AWARDS</h2>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center pb-4">
              <FiUsers className="text-6xl text-[#EB2C29]" />
            </div>
            <h2 className="text-5xl font-bold">
              {counter && <CountUp start={0} end={3624} duration={2} delay={0} />}
            </h2>
            <h2 className="text-xl font-semibold pb-4">HAPPY RECIPIENTS</h2>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  </div>
</div>

    )
}

export default Countup
