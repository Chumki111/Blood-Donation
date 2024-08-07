import { MdLocationOn } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
const ContactSection = () => {
  return (
    <div
      className="h-[400px] bg-cover bg-center relative mt-12"
      style={{ backgroundImage: 'url(https://i.ibb.co/LZpKvJp/call.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative flex items-center justify-center h-full text-center text-neutral-content py-10">
        <div className="border border-dotted border-primary lg:px-52 md:px-28 px-8 py-14">
          <div className="text-white ">
            <h2 className="font-medium mb-5 text-primary">Start Donating</h2>
            <h3 className="text-2xl md:text-5xl font-semibold">Call Now : +880-1777250277</h3>
            <div className=" md:flex justify-evenly">
              <p className="flex items-center gap-2 mt-6">
                <MdLocationOn />
                <span> Rajshahi, Bangladesh</span>
              </p>
              <p className="flex items-center gap-2 mt-6">
                <MdMarkEmailRead />
                <span>chumkikhatun370@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection