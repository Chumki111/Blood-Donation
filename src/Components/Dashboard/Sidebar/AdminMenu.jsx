import MenuItem from "./MenuItem"
import { FaUsersGear } from "react-icons/fa6";

const AdminMenu = () => {
  return (
    <>
    <MenuItem
         icon={FaUsersGear}
         label='All Users'
         address='/dashboard/allUsers'
       />
    </>
  )
}

export default AdminMenu