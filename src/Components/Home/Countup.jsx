import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
// react icons
import { FaAward } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { GiCupidonArrow } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { Parallax } from 'react-parallax';

const Countup = () => {
    const [counter, setCounter] = useState(false)
    return (
        <div className='py-10'>


            <Parallax
                blur={6}
                bgImage={
                    "https://i.ibb.co/sF7Lpkr/couple-making-heart-shape-from-hands-sea-shore-23-2148019890.jpg"

                }
                bgImageAlt="the cat"
                strength={300}
                className="w-full md:h-[320px] sm:h-full"

            >
                <div className="opacity-60"></div>
                <div className="text-center  w-full container">
                    <div className="">
                        <div className="pt-14">
                            <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-7 text-white">
                                    {/* first card */}

                                    <div className=" text-center space-y-3 rounded">
                                        <div className="flex justify-center items-center">
                                            <FaAward className="text-6xl pt-4 text-[#EB2C29]" />
                                        </div>
                                        <h2 className="text-5xl font-bold">
                                            {counter && <CountUp start={0} end={25} duration={2} delay={0} />}
                                        </h2>
                                        <h2 className="text-xl font-semibold pb-4">YEAR EXPERIENCE</h2>

                                    </div>
                                    {/* second card */}
                                    <div className="text-center space-y-3 rounded">
                                        <div className="flex justify-center items-center">
                                            <GiCupidonArrow className="text-6xl pt-4 text-[#EB2C29]" />
                                        </div>
                                        <h2 className="text-5xl font-bold">
                                            {counter && <CountUp start={0} end={2645} duration={2} delay={0} />}
                                        </h2>
                                        <h2 className="text-xl font-semibold pb-4">HAPPY DONORS</h2>

                                    </div>
                                    {/* third card */}

                                    <div className="text-center space-y-3 rounded">
                                        <div className="flex justify-center items-center">
                                            <GiTrophyCup className="text-6xl pt-4 text-[#EB2C29]" />
                                        </div>
                                        <h2 className="text-5xl font-bold">
                                            {counter && <CountUp start={0} end={75} duration={2} delay={0} />}
                                        </h2>
                                        <h2 className="text-xl font-semibold pb-4">TOTAL AWARDS</h2>

                                    </div>
                                    {/* fourth card */}

                                    <div className="text-center space-y-3 rounded">
                                        <div className="flex justify-center items-center">
                                            <FiUsers className="text-6xl pt-4 text-[#EB2C29]" />
                                        </div>
                                        <h2 className="text-5xl font-bold">
                                            {counter && <CountUp start={0} end={3624} duration={2} delay={0} />}
                                        </h2>
                                        <h2 className="text-xl font-semibold pb-4">HAPPY RECIPIENT</h2>

                                    </div>

                                </div>
                            </ScrollTrigger>
                        </div>


                    </div>
                </div>


            </Parallax>


        </div>
    )
}

export default Countup
