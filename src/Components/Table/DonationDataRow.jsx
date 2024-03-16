
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
const DonationDataRow = ({donation}) => {
   
    const { donation_date } = donation;
  const donationDateTime = donation_date.toString(); // Convert to string
  const datePart = donationDateTime.split(',')[0].trim();
  const timePart = donationDateTime.split(',')[1].trim();
    

  return (
    <>
    <tr className="h-[70px] border-b bg-[#868b96] text-[#FFFFFF]">
              
              
              <th className="px-4 py-4 text-start ">{donation?.recipient_name
}</th>
              <th className="px-4 py-4 text-start">
                  <button className="flex items-center rounded-full bg-blue-600 px-3 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
                      
                      {donation?.donation_status}
                  </button>
              </th>
              <th className="px-4 py-4 text-start ">{donation?.hospital_name}</th>
              <th className="px-4 py-4 text-start ">{datePart}</th>
              <th className="px-4 py-4 text-start ">{timePart}</th>
              <th className="px-4 py-4 text-start ">{donation?.full_address}</th>
              <th className="px-4 py-4 text-start">
                  <button className="flex items-center rounded-full bg-red-500 px-3 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                     
                     Update
                  </button>
              </th>
              <th className="px-4 py-4 text-start">
                  <Link to={`/dashboard/view-request/${donation._id}`}>
                  <button className="flex items-center rounded-full bg-blue-600 px-3 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
                      
                      Details
                  </button>
                  </Link>
              </th>
              <th className="px-4 py-4 text-start">
                  <button className="flex items-center rounded-full bg-rose-600 px-3 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-rose-800">
                      
                      Delete
                  </button>
              </th>
          </tr>
   
    </>
  )
}
DonationDataRow.propTypes = {
  donation: PropTypes.object
}
export default DonationDataRow