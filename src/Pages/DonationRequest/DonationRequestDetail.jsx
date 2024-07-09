import { useLoaderData, useNavigate } from "react-router-dom"
import { donationStatusChange } from "../../api/donations";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaArrowsSpin } from "react-icons/fa6";
import PrimaryHero from "../../Components/Hero/PrimaryHero";

const DonationRequestDetail = () => {
    const navigate = useNavigate()
    const donation = useLoaderData();
    const {requester_Name,requester_email,recipient_district,recipient_upazila,hospital_name,full_address,donation_status,request_message,_id} = donation;
    const { donation_date } = donation;
  const donationDateTime = donation_date.toString(); // Convert to string
  const datePart = donationDateTime.split(',')[0].trim();
  const timePart = donationDateTime.split(',')[1].trim();
  const [loading, setLoading] = useState(false);
  const handleDonate =async(_id) =>{
    setLoading(true)
    try{
        await donationStatusChange(_id,{ donation_status: 'in progress' })
        toast.success('Donation successfully submitted')
        navigate('/dashboard')

    }catch(err){
        console.log(err.message);
        toast.error('Failed to submit donation');
    }finally{
    setLoading(false)
    }
   
   
  }
  return (
    <>
    <PrimaryHero text="Donation Request Details"/>
    <div className="mx-20 my-6 pt-12">
     <h2 className="font-semibold text-2xl sm:text-xl md:text-4xl lg:text-4xl mt-3 py-2 text-primary text-center border border-dashed w-[40%] mx-auto">Donation Information</h2>
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

            <div onClick={() => handleDonate(_id)} className="flex justify-center items-center my-7">
                <button className="bg-primary hover:bg-red-700 px-6 py-2 rounded-md text-xl font-semibold text-rose-50">{loading ? <FaArrowsSpin className="text-2xl text-rose-50 animate-spin"/>: 'Donate'}</button>
            </div>
             
    </div>
    </>
  )
}

export default DonationRequestDetail