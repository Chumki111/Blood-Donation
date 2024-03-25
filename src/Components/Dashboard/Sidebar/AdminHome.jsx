
import { getAllUsers } from "../../../api/auth"
import { useQuery } from "@tanstack/react-query";
import { getAllDonation } from "../../../api/donations";
import { getTotalAmount } from "../../../api/payment";
import { useEffect, useState } from "react";

const AdminHome = () => {
  const [amounts, setAmounts] = useState([])

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: async () => getAllUsers()

  })
  const { data: donations } = useQuery({
    queryKey: ['donations'],
    queryFn: async () => getAllDonation()

  })
  useEffect(() => {
    getTotalAmount()
      .then(data => {
        const totalAmount = data?.reduce((total, fund) => total + parseInt(fund.fund), 0)
        setAmounts(totalAmount)
      })
  }, [])

  return (
    <>
      <h2>{users?.length}</h2>
      <h2>{donations?.length}</h2>
      <h2>$ {amounts}</h2>


    </>
  )
}

export default AdminHome