import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth"
import { getDonarDonations } from "../../../api/donations";
import DonationDataRow from "../../../Components/Table/DonationDataRow";


const MyRequests = () => {
  const {user} = useAuth();
  const [donations,setDonations] = useState([]);
  useEffect(() =>{
   getDonarDonations(user?.email)
   .then(data=>{
    
    setDonations(data);
   })
  },[user])
  return (
    <>
    
      <div className="overflow-x-auto">
  <table className="min-w-full border border-gray-200 bg-white shadow-lg">
    {/* Table Header */}
      <thead>
          <tr className="h-[70px] text-sm capitalize border-b bg-rose-500 text-[#FFFFFF]">
              
              <th className="px-4 py-4 text-start">recipient</th>
              <th className="px-4 py-4 text-start">Status</th>
              <th className="px-4 py-4 text-start">Hospital</th>
              <th className="px-4 py-4 text-start">Donation Date</th>
              <th className="px-4 py-4 text-start">Address</th>
              <th className="px-4 py-4 text-start">Donation Time</th>
        
              <th className="px-4 py-4 text-start">Update</th>
              <th className="px-4 py-4 text-start">Details</th>
              <th className="px-4 py-4 text-start">Delete</th>
          </tr>
      </thead>
      <tbody className="text-sm">
        {/* Table rows */}
        {
                    donations?.map(donation =><DonationDataRow key={donation._id}  donation={donation}/>)
                  }
      </tbody>
  </table>
</div>
    </>
  )
}

export default MyRequests