import { useLoaderData } from "react-router-dom"



const ViewRequest = () => {
    const donation = useLoaderData();
    console.log(donation);
    const { donation_date } = donation;
    const donationDateTime = donation_date.toString(); // Convert to string
    const datePart = donationDateTime.split(',')[0].trim();
    const timePart = donationDateTime.split(',')[1].trim();
    return (
        <div>
            <h2 className="font-semibold text-2xl sm:text-xl md:text-4xl lg:text-5xl text-red-500">Donation Information</h2>
            <div className="flex mt-12 ml-6 flex-col gap-4">
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Requester Name :</span>
                    </p>
                    <p className="text-xl">{donation?.requester_Name}</p>
                </div>
                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Requester Email :</span>
                    </p>
                    <p className="text-xl">{donation?.requester_email}</p>
                </div>

                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">District :</span>
                    </p>
                    <p className="text-xl">{donation?.recipient_district}</p>
                </div>

                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Upazila :</span>
                    </p>
                    <p className="text-xl">{donation?.recipient_upazila}</p>
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
                    <p className="text-xl">{donation?.hospital_name}</p>
                </div>

                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Full Address :</span>
                    </p>
                    <p className="text-xl">{donation?.full_address}</p>
                </div>

                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Donation Status :</span>
                    </p>
                    <button className={`flex items-center  px-3 shadow-md  font-bold ${donation?.donation_status==='in progress' ? 'bg-yellow-400 text-sm rounded-md py-2' : 'bg-blue-600   text-white  transition-all duration-300 hover:bg-blue-700 rounded-full py-2'}`}>

                        {donation?.donation_status}
                    </button>
                </div>

                <div className="flex items-start">
                    <p className="text-xl mr-4">
                        <span className="font-semibold">Message:</span>
                    </p>
                    <p className="text-xl text-justify">{donation?.request_message}</p>
                </div>
            </div>

        </div>
    )
}

export default ViewRequest