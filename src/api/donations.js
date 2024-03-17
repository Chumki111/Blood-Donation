import axiosSecure from ".";
// create a donation from donar
export const addDonationRequest=async(donationData) =>{
    const {data} = await axiosSecure.post(`/donations`,donationData)
    return data;
}

// fetch all donation for donar
export const getDonarDonations = async(email) =>{
    const {data} = await axiosSecure(`/donations/${email}`)
    return data;
}
// fetch all donations
export const getAllDonation=async()=>{
    const {data} = await axiosSecure('/donations');
    return data;
}
// fetch single donation 
export const getSingleDonation = async(id) =>{
    const {data} = await axiosSecure(`/donation/${id}`)
    return data;
}
// fetch pending all donation for donar
export const getPendingDonations = async(email) =>{
    const {data} = await axiosSecure(`/pending-donations/pending/${email}`)
    return data;
}
// fetch single pending donation for donar
export const getSinglePendingDonation = async(id) =>{
    const {data} = await axiosSecure(`/pending-donations/${id}`)
    return data;
}