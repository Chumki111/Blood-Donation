import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth"
import { getPendingDonations } from "../../api/donations";
import RequestDataRow from "../../Components/Table/RequestDataRow";


const DonationRequest = () => {
  const {user} = useAuth();
  const [donations,setDonations] = useState([])
  useEffect(() =>{
    getPendingDonations(user?.email)
    .then(data=>{
      console.log(data);
      setDonations(data)
    })
  },[user])
  return (
    <>
    
    <div className="px-10 mx-20 mt-16">
    <h2 className="text-center font-semibold text-4xl my-5">Welcome back <span className="text-red-500">{user?.displayName}</span></h2>
    <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white shadow-lg">
          {/* Table Header */}
          <thead>
            <tr className="h-[70px] text-sm capitalize border-b">

              <th className="px-4 py-4 text-start">Requester</th>
              <th className="px-4 py-4 text-start">Status</th>
              <th className="px-4 py-4 text-start">Hospital</th>
              <th className="px-4 py-4 text-start">Donation Date</th>
              
              <th className="px-4 py-4 text-start">Donation Time</th>
              <th className="px-4 py-4 text-start">Address</th>
            
              <th className="px-4 py-4 text-start">Details</th>
              
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* Table rows */}
            {/* Conditional rendering based on donations */}
            {donations.length > 0 ? (
              donations.map(donation => (
                <RequestDataRow key={donation._id} donation={donation} />
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
      </div>
    </div>
    </>
  )
}

export default DonationRequest