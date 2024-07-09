

const Heading = ({heading,subHeading}) => {
  return (
    <div className="text-center">
         <h2 className="font-medium text-primary">{subHeading}</h2>
         <h2 className="text-5xl font-bold py-6">{heading}</h2>
    </div>
  )
}

export default Heading