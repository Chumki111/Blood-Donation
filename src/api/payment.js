import axiosSecure from "."

// create payment intent
export const createPaymentIntent = async(price) =>{
    const{data} = await axiosSecure.post('/create-payment-intent',price)
    return data;
}
// save payment Info
export const savePaymentInfo =async(funding) =>{
    const {data} = await axiosSecure.post('payments',funding);
    return data;
}

// get total amount

export const getTotalAmount =async() =>{
    const {data} = await axiosSecure('/total-money-received')
    return data;
}