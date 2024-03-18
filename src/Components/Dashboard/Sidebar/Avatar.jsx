
import useGetUser from "../../../Hooks/useGetUser";


const Avatar = () => {
  const [userInfo] = useGetUser()
    console.log(userInfo);
  
  return (
    <>
      <div className="flex md:flex-col  justify-center gap-2 items-center">
            <img className="w-10 h-10 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-slate-500 object-cover shadow shadow-rose-50 border-2 border-rose-50 rounded-full duration-500" src={userInfo?.image} alt="avatar navigate ui" />
            <h2 className="text-rose-50 text-base md:text-2xl pt-2">{userInfo?.name} </h2>
        </div>
    </>
  )
}

export default Avatar