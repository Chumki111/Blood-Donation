import { Link } from "react-router-dom"



const Banner = () => {
   
  return (
    <div className="relative min-h-[600px] max-h-[600px] py-20">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{backgroundImage: "url('https://i.postimg.cc/FsS3sWnB/luann-hunt-X20g2-GQs-Vd-A-unsplash.jpg')"}}
      ></div>

      {/* Overlay to darken the background if needed */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex justify-center flex-col">
        <div className="mt-10">
          <h2 className="text-white text-center text-2xl py-6">Donate to blood contribute</h2>
          <h2 className="text-white lg:text-4xl md:text-4xl sm:text-3xl text-2xl max-w-[600px] mx-auto text-center font-bold pb-6 capitalize">
            Your blood can bring smile in any one person face
          </h2>

          {/* Banner action */}
          <div className="mt-5 flex md:flex-row max-w-[450px] mx-auto justify-center gap-7 items-center flex-col">
            <div className="">
              {/* 1 st button */}
              <Link to='/register'>
              <button className="relative px-5 py-3 text-white bg-primary rounded-md overflow-hidden group">
                  <span className="relative z-10">Search A Donar</span>
                  <span className="absolute inset-0 bg-black transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left z-0"></span>
                </button>
                </Link>
            </div>
            <div className="">
              
              <Link to='/register'>
              <button className="relative px-10 py-3 text-white bg-black rounded-md overflow-hidden group">
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-primary transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left z-0"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Banner