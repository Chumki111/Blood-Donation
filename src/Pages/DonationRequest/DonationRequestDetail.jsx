import { useLoaderData } from "react-router-dom"


const DonationRequestDetail = () => {
    const donation = useLoaderData();
    const {requester_Name,requester_email,recipient_district,recipient_upazila,hospital_name,full_address,donation_status,request_message} = donation;
    const { donation_date } = donation;
  const donationDateTime = donation_date.toString(); // Convert to string
  const datePart = donationDateTime.split(',')[0].trim();
  const timePart = donationDateTime.split(',')[1].trim();
  return (
    <>
    <div className="mx-20 my-6">
     <h2 className="font-semibold text-2xl sm:text-xl md:text-4xl lg:text-4xl mt-3 text-red-500 text-center">Donation Information</h2>
     <div className="flex mt-12 ml-6 flex-col gap-4">
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Requester Name :</span>
                    </p>
                    <p className="text-xl">{requester_Name}</p>
                </div>
                <div className="flex items-start">
                    <p className="text-xl mr-4 ">
                        <span className="font-semibold">Requester Email :</span>
                    </p>
                    <p className="text-xl">{requester_email}</p>
                </div>
                
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">District :</span>
                    </p>
                    <p className="text-xl">{recipient_district}</p>
                </div>
                
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Upazila :</span>
                    </p>
                    <p className="text-xl">{recipient_upazila}</p>
                </div>
                
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Donation Time :</span>
                    </p>
                    <p className="text-xl">{timePart}</p>
                </div>
                
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Donation Date :</span>
                    </p>
                    <p className="text-xl">{datePart}</p>
                </div>
                
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Hospital Name :</span>
                    </p>
                    <p className="text-xl">{hospital_name}</p>
                </div>
                
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Full Address :</span>
                    </p>
                    <p className="text-xl">{full_address}</p>
                </div>
                
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Donation Status :</span>
                    </p>
                    <p className="text-xl bg-yellow-500 hover:bg-yellow-700 px-4 py-2 rounded-md text-rose-50 cursor-pointer">{donation_status}</p>
                </div>
                
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Message:</span>
                    </p>
                    <p className="text-xl text-justify">{request_message}</p>
                </div>
            </div>

            <div className="flex justify-center items-center my-7">
                <button className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded-md text-2xl font-semibold text-rose-50">Donate</button>
            </div>
             
    </div>
    </>
  )
}

export default DonationRequestDetail