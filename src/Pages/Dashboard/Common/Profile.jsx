import useAuth from "../../../Hooks/useAuth"
import useGetUser from "../../../Hooks/useGetUser";


const Profile = () => {
    const {user} = useAuth();
    const [userInfo] = useGetUser();
    console.log(userInfo.role);

  return (
    <div>
        <h3 className="text-4xl md:text-4xl lg:text-5xl text-center font-semibold">Your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block text-rose-50"><span className="relative text-rose-50">Profile</span></span> </h3>
    </div>
  )
}

export default Profile