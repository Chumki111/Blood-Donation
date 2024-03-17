
import useAuth from "../../../Hooks/useAuth"
import { getDonarDonations } from "../../../api/donations";
import DonationDataRow from "../../../Components/Table/DonationDataRow";
import { FaArrowsSpin } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";

const MyRequests = () => {
  
  // const [loading,setLoading] = useState(false)
  // const [donations, setDonations] = useState([]);
  // useEffect(() => {
  //   setLoading(true)
  //   getDonarDonations(user?.email)
  //     .then(data => {

  //       setDonations(data);
  //       setLoading(false)
  //     })
  // }, [user])
  // ---------->>-------
  const { user } = useAuth();
  // tanstack-reqct-query
  const {data:donations,isLoading,refetch} = useQuery({
    queryKey:['donations',user?.email],
    queryFn:async() => getDonarDonations(user?.email)

  })
 

  return (
    <>
    {isLoading? 
    (<div className="flex justify-center items-center h-screen">
          <FaArrowsSpin className="text-3xl animate-spin text-rose-600"/>
        </div>) : ( 
        <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white shadow-lg">
          {/* Table Header */}
          <thead>
            <tr className="h-[70px] text-sm capitalize border-b bg-rose-500 text-[#FFFFFF]">

              <th className="px-4 py-4 text-start">recipient</th>
              <th className="px-4 py-4 text-start">Status</th>
              <th className="px-4 py-4 text-start">Hospital</th>
              <th className="px-4 py-4 text-start">Donation Date</th>
              
              <th className="px-4 py-4 text-start">Donation Time</th>
              <th className="px-4 py-4 text-start">Address</th>

              <th className="px-4 py-4 text-start">Update</th>
              <th className="px-4 py-4 text-start">Details</th>
              <th className="px-4 py-4 text-start">Delete</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* Table rows */}
            {/* Conditional rendering based on donations */}
            {donations.length > 0 ? (
              donations.map(donation => (
                <DonationDataRow refetch={refetch} key={donation._id} donation={donation} />
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-4 text-center text-2xl text-rose-500">
                You have not made any donation requests.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>)}

     
    </>
  )
}

export default MyRequests