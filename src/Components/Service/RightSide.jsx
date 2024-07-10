import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const RightSide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col space-y-7">
      <div className="bg-[#f1f1f1] rounded-md py-8 px-5">
        <h2 className="font-semibold text-3xl">Our Best Services</h2>
        <div>
          <button className="relative px-5 py-3 text-black bg-white rounded-md overflow-hidden group w-full mt-5 block">
            <span className="relative z-10 flex items-center justify-between group-hover:text-white transition-colors duration-300 space-x-2">
              <span>Blood Donation</span>
              <FaArrowRight />
            </span>
            <span className="absolute inset-0 bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </button>
          <button className="relative inline-block px-5 py-3 text-black bg-white rounded-md overflow-hidden group w-full mt-5">
            <span className="relative z-10 flex items-center justify-between group-hover:text-white transition-colors duration-300 space-x-2">
              <span>Health Check</span>
              <FaArrowRight />
            </span>
            <span className="absolute inset-0 bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </button>
          <button className="relative inline-block px-5 py-3 text-black bg-white rounded-md overflow-hidden group w-full mt-5">
            <span className="relative z-10 flex items-center justify-between group-hover:text-white transition-colors duration-300 space-x-2">
              <span>Blood Bank</span>
              <FaArrowRight />
            </span>
            <span className="absolute inset-0 bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </button>
        </div>
      </div>
      <div className="bg-primary rounded-md py-8 px-5 text-white">
        <div>
          <h2 className="text-lg font-semibold">Blood Excellence!</h2>
          <h2 className="text-3xl font-semibold leading-8 py-5">Expanded Blood <br /> Donate Services Here</h2>
          <p className="max-w-[20rem]">
            Join us in making a difference with our enhanced blood donation services. Every drop counts, and your help matters.
          </p>
          <div className='pt-5'>
            <Link to="/Contact">
              <button className="relative inline-block px-5 py-3 text-white bg-black rounded-md overflow-hidden group">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 hover:border hover:border-black"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1] rounded-md py-8 px-5">
        <h2 className="font-semibold text-3xl">Leave A Message</h2>
        <form className="space-y-4 pt-7" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary block w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary block w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32 block w-full"
          />
          <button className="relative inline-block px-5 py-3 text-white bg-black rounded-md overflow-hidden group w-full">
            <span className="relative z-10 flex items-center justify-between space-x-2">
              <span>Submit</span>
              <FaArrowRight />
            </span>
            <span className="absolute inset-0 bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default RightSide;
