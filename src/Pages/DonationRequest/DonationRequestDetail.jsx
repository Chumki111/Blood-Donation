import { useLoaderData } from "react-router-dom"


const DonationRequestDetail = () => {
    const donation = useLoaderData();
    console.log(donation);
  return (
    <div>DonationRequestDetail</div>
  )
}

export default DonationRequestDetail