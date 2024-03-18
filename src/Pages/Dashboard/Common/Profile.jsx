import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth"
import useGetUser from "../../../Hooks/useGetUser";
import { ImSpinner9 } from "react-icons/im";
import { imageUpload } from "../../../api/utils";
import { updateProfile } from "../../../api/auth";
import toast from "react-hot-toast";
import { FaArrowsSpin } from "react-icons/fa6";


const Profile = () => {


  const [openModal, setOpenModal] = useState(false);
  const { user, updateUserProfile } = useAuth();
  const [userInfo, isLoading, refetch] = useGetUser();
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpzilas] = useState([]);
  console.log(userInfo);
  // upazilas fetch
  useEffect(() => {
    fetch('/upazilas.json')
      .then(res => res.json())
      .then(data => {
        setUpzilas(data)
        // console.log(data);
      })
  }, [])
  // districts fetch
  useEffect(() => {
    fetch('/districts.json')
      .then(res => res.json())
      .then(data => {
        setDistricts(data);
        // console.log(data);
      })
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const blood_group = form.blood_group.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const image = form.image.files[0]

    console.log(name, blood_group, district, upazila, image);
    try {
      // image Upload
      const imageData = await imageUpload(image);
      console.log(imageData);

      await updateUserProfile(name, imageData?.data?.display_url)
      // Prepare updated profile data
      const updateInfo = {
        email: user?.email,
        name,
        blood_group,
        district,
        upazila,
        image: imageData?.data?.display_url // Update image URL if uploaded
      };

      // Update profile using the updateProfile function
      const updatedProfile = await updateProfile(user?.email, updateInfo);
      console.log('Profile updated:', updatedProfile);
      refetch()
      setOpenModal(false);
      toast.success('Profile updated successfully')


    } catch (err) {
      console.log(err);
      toast.error('Failed to update profile')
    }


  }

  return (
    <div>
      <h3 className="text-4xl md:text-4xl lg:text-5xl text-center font-semibold">Your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block text-rose-50"><span className="relative text-rose-50">Profile</span></span> </h3>
      {
        user ? <div className="flex justify-center items-center mt-10">

          {
            isLoading ?
              <div className="h-screen mt-16"><ImSpinner9 className="text-4xl text-rose-500 animate-spin" /></div> :
              <div className="flex w-full flex-col py-10 md:py-0 justify-center items-center lg:w-[80%] bg-white rounded-lg shadow-lg pb-5">
                <div className="py-8">
                  <img
                    className="w-[150px] h-[150px] rounded-full border-4 border-rose-600 object-cover"
                    src={userInfo?.image}
                    alt="Profile Image"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-3">
                  <p className="text-lg">
                    Name:{" "}
                    <span className="text-gray-500">{userInfo?.name}</span>
                  </p>
                  <p className="text-lg">
                    Email:{" "}
                    <span className="text-gray-500">{userInfo?.email}</span>
                  </p>
                  <p className="text-lg">
                    Role:{" "}
                    <span className="text-gray-500">{userInfo?.role}</span>
                  </p>
                  <p className="text-lg">
                    Blood Group:{" "}
                    <span className="text-gray-500">{userInfo?.blood_group}</span>
                  </p>
                  <p className="text-lg">
                    Upazila:{" "}
                    <span className="text-gray-500">{userInfo?.upazila}</span>
                  </p>
                  <p className="text-lg">
                    District:{" "}
                    <span className="text-gray-500">{userInfo?.district}</span>
                  </p>

                </div>
                <div className="my-10">
                  <div className="w-72 mx-auto flex items-center justify-center">
                    <button onClick={() => setOpenModal(true)} className="bg-rose-600 hover:bg-rose-700 px-3 py-2 rounded-md text-xl font-semibold">Update Your Profile</button>
                    <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                      <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                        <form className="p-12" onSubmit={handleSubmit}>
                          <svg onClick={() => setOpenModal(false)} className="w-10 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#000000"></path></g></svg>
                          <h2 className="font-semibold text-lg py-5">Fill Up this form and update your profile</h2>

                          <div className="space-y-5">

                            <div className="relative">
                              <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border mt-2 rounded-md border-gray-300 focus:outline-rose-500  text-gray-900'
                                data-temp-mail-org='0'
                              />




                            </div>
                            <select defaultValue="default" name="blood_group" className="select w-full px-3 py-2 border rounded-md  focus:outline-rose-500  text-gray-900">
                              <option value="default">Blood Group</option>
                              <option>A+</option>
                              <option>A-</option>
                              <option>B+</option>
                              <option>B-</option>
                              <option>AB+</option>
                              <option>AB-</option>
                              <option>O+</option>
                              <option>O-</option>
                            </select>
                            <select name="district"
                              className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">

                              {
                                districts.map(district => <option key={district.id}>{district.name}</option>)
                              }

                            </select>
                            <select name="upazila" className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">
                              {
                                upazilas?.map(upazila => <option key={upazila.id}>{upazila.name}</option>)
                              }

                            </select>
                          </div>
                          {/* button type will be submit for handling form submission*/}

                          <div className="flex flex-col md:flex-row justify-between items-center">
                            <div>
                              <label className="w-64 mt-10 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-red-600">
                                {/* image */}
                                <svg
                                  className="w-8 h-8"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">
                                  select a file
                                </span>
                                <input type="file" className="hidden" name="image" />
                              </label>

                            </div>
                            <button type="submit" className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-rose-600 before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-rose-600 after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">
                              {isLoading ? <FaArrowsSpin className="text-xl text-rose-500 animate-spin" /> : 'Update'}
                            </button>

                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          }

        </div>
          : ''
      }

    </div>
  )
}

export default Profile