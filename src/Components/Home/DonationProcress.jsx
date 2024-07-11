import Heading from "../Heading/Heading";
import { FaSearch, FaRegCalendarAlt, FaUserClock, FaHandHoldingHeart, FaCoffee, FaThumbsUp } from 'react-icons/fa';

const DonationProcess = () => {
  return (
    <section className="bg-gray-100 py-14">
      <div className="container mx-auto px-4 text-center">
        <Heading 
          subHeading="How to Donate Blood" 
          heading="Simple Steps to Donate" 
        />
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="relative max-w-xs w-full h-60 bg-white border-4 border-transparent border-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-rotate-3 hover:scale-105 hover:border-primary group">
            <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <FaSearch className="text-primary text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">1. Find a Blood Drive</h3>
                <p className="text-gray-600">Check our website or local community centers for upcoming blood drives and events.</p>
              </div>
            </div>
            
          </div>
          {/* Card 2 */}
          <div className="relative max-w-xs w-full h-60 bg-white border-4 border-transparent border-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-rotate-3 hover:scale-105 hover:border-primary group">
            <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <FaRegCalendarAlt className="text-primary text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">2. Register Online</h3>
                <p className="text-gray-600">Sign up for a donation slot through our website or call us to book an appointment.</p>
              </div>
            </div>
            
          </div>
          {/* Card 3 */}
          <div className="relative max-w-xs w-full h-60 bg-white border-4 border-transparent border-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-rotate-3 hover:scale-105 hover:border-primary group">
            <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <FaUserClock className="text-primary text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">3. Attend Your Appointment</h3>
                <p className="text-gray-600">Arrive at the blood drive location at your scheduled time with your ID and health details.</p>
              </div>
            </div>
            
          </div>
          {/* Card 4 */}
          <div className="relative max-w-xs w-full h-60 bg-white border-4 border-transparent border-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-rotate-3 hover:scale-105 hover:border-primary group">
            <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <FaHandHoldingHeart className="text-primary text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">4. Donate Blood</h3>
                <p className="text-gray-600">A healthcare professional will guide you through the donation process and ensure your comfort.</p>
              </div>
            </div>
            
          </div>
          {/* Card 5 */}
          <div className="relative max-w-xs w-full h-60 bg-white border-4 border-transparent border-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-rotate-3 hover:scale-105 hover:border-primary group">
            <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <FaCoffee className="text-primary text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">5. Post-Donation Care</h3>
                <p className="text-gray-600">After donating, rest, enjoy some refreshments, and receive instructions for aftercare.</p>
              </div>
            </div>
            
          </div>
          {/* Card 6 */}
          <div className="relative max-w-xs w-full h-60 bg-white border-4 border-transparent border-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-rotate-3 hover:scale-105 hover:border-primary group">
            <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <FaThumbsUp className="text-primary text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">6. Make a Difference</h3>
                <p className="text-gray-600">Your donation will help save lives and contribute to our mission of providing blood to those in need.</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationProcess;
