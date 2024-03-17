
import { Link} from "react-router-dom";
import { PropTypes } from 'prop-types';
import { deleteDonation } from "../../api/donations";
import Swal from "sweetalert2";


const DonationDataRow = ({donation,refetch}) => {
    const { donation_date } = donation;
  const donationDateTime = donation_date.toString(); // Convert to string
  const datePart = donationDateTime.split(',')[0].trim();
  const timePart = donationDateTime.split(',')[1].trim();
    const handleDelete =async() =>{

        // Show confirmation dialog before deleting
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        // If user confirms deletion, proceed with deletion
        if (result.isConfirmed) {
            try {
                // Delete the donation
                await deleteDonation(donation._id);
                // Refetch data to update the UI
                refetch();
                // Show success message
                Swal.fire({
                    title: "Deleted!",
                    text: "Your donation has been successfully deleted.",
                    icon: "success"
                });
            } catch (error) {
                console.error("Error deleting donation:", error.message);
                // Show error message
                Swal.fire({
                    title: "Error",
                    text: "Oops! Something went wrong while deleting your donation. Please try again later.",
                    icon: "error"
                });
            }
        }

    }

  return (
    <>
    <tr className="h-[70px] border-b bg-[#868b96] text-[#FFFFFF]">
              
              
              <th className="px-4 py-4 text-start ">{donation?.recipient_name
}</th>
              <th className="">
                  <button className={`flex items-center rounded-md  px-3 shadow-md  font-bold ${donation?.donation_status==='in progress' ? 'bg-yellow-400 text-sm  py-2' : 'bg-blue-600   text-white  transition-all duration-300 hover:bg-blue-700 py-2'}`}>
                      
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
                  <button onClick={handleDelete} className="flex items-center rounded-full bg-rose-600 px-3 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-rose-800">
                      
                      Delete
                  </button>
              </th>
          </tr>
   
    </>
  )
}
DonationDataRow.propTypes = {
  donation: PropTypes.object,
  refetch:PropTypes.func,
}
export default DonationDataRow