import { Link } from "react-router-dom"



const Banner = () => {
   
  return (
    <div className="min-h-[600px] max-h-[600px] py-20" style={{backgroundImage: "url('https://i.ibb.co/syVndXY/3d-cinematic-water-splash-with-red-fire-navy-color-background-1409-5641.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className="flex justify-center flex-col">
        {/* Beautiful announcement line */}
        
        {/* Banner Content */}
        <div className="mt-10">
          <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-[600px] mx-auto text-center font-extrabold">
            A small business is only as good as its tools.
          </h2>
          <p className="lg:text-xl md:text-lg text-[#8896AB] mt-5 max-w-[600px] text-center mx-auto text-sm">
            We’re different. Flex is the only saas business platform that lets
            you run your business on one platform, seamlessly across all digital
            channels.
          </p>
          {/* Banner action  */}
          <div className="mt-5 flex md:flex-row max-w-[450px] mx-auto justify-center gap-2 flex-col">
          <div className="md:mr-auto md:ml-0 lg:w-[45%]">
              <button className="bg-rose-600 sm:py-3 py-2 sm:text-base text-sm px-4 text-white rounded-lg h-full w-full">Search A Donar</button>
            </div>
            <div className="md:mr-auto md:ml-0 lg:w-[45%]">
             <Link to='/register'>
             <button className="bg-rose-600 sm:py-3 py-2 sm:text-base text-sm px-4 text-white rounded-lg h-full w-full">Get Started</button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner