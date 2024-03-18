import axios from "axios";
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
// pending donation status change --->
export const donationStatusChange =async(id,donation_status) =>{
    const {data} = await axiosSecure.patch(`/update-donation-status/${id}`,donation_status)
    return data;
}
// delete
export const deleteDonation = async (donationId) => {
   
      const {data} = await axiosSecure.delete(`/delete/${donationId}`); // Adjust the URL as per your backend route
      return data;
    
  };
// delete
export const updateDonation = async (id,updatedDonation) => {
   
      const {data} = await axiosSecure.patch(`/donations/${id}`,updatedDonation); // Adjust the URL as per your backend route
      return data;
    
  };
// Define the getDistricts function
export const getDistricts = async () => {
    try {
        const response = await axios.get('/districts'); // Adjust the URL as per your backend route
        return response.data;
    } catch (error) {
        console.error('Error fetching districts:', error);
        throw new Error('Failed to fetch districts');
    }
};

// Define the getUpazilas function
export const getUpazilas = async () => {
    try {
        const response = await axios.get('/upazilas'); // Adjust the URL as per your backend route
        return response.data;
    } catch (error) {
        console.error('Error fetching upazilas:', error);
        throw new Error('Failed to fetch upazilas');
    }
};
