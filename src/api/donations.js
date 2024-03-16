import axiosSecure from ".";

export const addDonationRequest=async(donationData) =>{
    const {data} = await axiosSecure.post(`/donations`,donationData)
    return data;
}