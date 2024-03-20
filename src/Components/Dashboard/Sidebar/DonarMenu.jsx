import MenuItem from "./MenuItem"
import { BiSolidDonateHeart } from "react-icons/bi";
import { FcDonate } from "react-icons/fc";
const DonarMenu = () => {
  return (
    <>
     <MenuItem
         icon={FcDonate}
         label='Create A Request'
         address='/dashboard/create-donation-request'
       />
           <MenuItem
         icon={BiSolidDonateHeart}
         label='My Requests'
         address='/dashboard/my-donation-requests'
       />
    </>
  )
}

export default DonarMenu