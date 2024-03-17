import useAuth from "../../../Hooks/useAuth"
import useGetUser from "../../../Hooks/useGetUser";
import { ImSpinner9 } from "react-icons/im";

const Profile = () => {
    const {user} = useAuth();
    const [userInfo,isLoading] = useGetUser();
    console.log(userInfo?.role);

  return (
    <div>
        <h3 className="text-4xl md:text-4xl lg:text-5xl text-center font-semibold">Your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block text-rose-50"><span className="relative text-rose-50">Profile</span></span> </h3>
     {
      user ?    <div className="flex justify-center items-center mt-10">
      
      {
        isLoading ? <div><ImSpinner9 className="text-2xl text-rose-500 animate-spin"/></div> : 
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
      <button className="bg-rose-600 hover:bg-rose-700 px-3 py-2 rounded-md text-xl font-semibold">Update Your Profile</button>
      </div>
      </div>
      }
      
    </div>
    :''
     }
    </div>
  )
}

export default Profile