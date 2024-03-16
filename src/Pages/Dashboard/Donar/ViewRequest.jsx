import { useLoaderData} from "react-router-dom"



const ViewRequest = () => {
    const donation=useLoaderData();
    console.log(donation);
  return (
    <div>
     
    </div>
  )
}

export default ViewRequest