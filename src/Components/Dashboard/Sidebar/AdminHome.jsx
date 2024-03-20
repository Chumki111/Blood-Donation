
import { getAllUsers } from "../../../api/auth"
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {

  const {data:users} = useQuery({
    queryKey:['users'],
    queryFn:async() => getAllUsers()

  })
  return (
    <>
     <h2>{users?.length}</h2>
    
    </>
  )
}

export default AdminHome