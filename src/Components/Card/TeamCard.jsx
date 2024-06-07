// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// const TeamCard = ({ image, name, title }) => {
//     return (
//         <div className="relative group py-5">
//             <img src={image} alt="Landscape" className="w-80 rounded-3xl" />
//             <div className="absolute md:bottom-[-3rem] bottom-[-2rem] left-0 right-0 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100  w-70 bg-white p-6 shadow-lg rounded-xl">
//                 <h2 className="text-xl text-center font-medium text-gray-900 mb-3 hover:text-red-500">{name}</h2>
//                 <h2 className="text-center text-sm mb-1">{title}</h2>
//                <div className="flex justify-center"> 
//                <FaFacebook />
//                <FaLinkedin />
//                </div>

//             </div>
//         </div>
//     )
// }

// export default TeamCard

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
const TeamCard = ({ image, name, title }) => {
  return (
    <div className="relative group bg-white border-4 shadow border-white p-4 rounded-3xl">
      <div className="relative overflow-hidden rounded">
        <img 
          src={image} 
          alt={name} 
          className="w-80 rounded transform transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded flex flex-col justify-center items-center">
        <div className="flex justify-center space-x-4 mt-4">
            <FaFacebookF className="text-white bg-red-600 p-2 rounded-full text-3xl transition-transform duration-300 transform hover:scale-125" />
            <FaLinkedinIn className="text-white bg-blue-600 p-2 rounded-full text-3xl transition-transform duration-300 transform hover:scale-125" />
            <FaDiscord className="text-white bg-purple-600 p-2 rounded-full text-3xl transition-transform duration-300 transform hover:scale-125" />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-medium text-center my-3">{name}</h2>
      <h2 className="text-sm text-center mb-1">{title}</h2>
    </div>
  );
};

export default TeamCard;
