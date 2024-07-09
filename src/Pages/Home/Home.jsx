import ContactSection from "../../Components/Home/ContactSection"
import Countup from "../../Components/Home/Countup"
import SecondSection from "../../Components/Home/SecondSection"
import ServicesSection from "../../Components/Home/ServicesSection"
import TeamMember from "../../Components/Home/TeamMember"
import Testimonial from "../../Components/Home/Testimonial"
import Banner from "./Banner"


const Home = () => {
  return (
    <div>
      
      <Banner/>
      <SecondSection/>
      <Countup/>
      <ServicesSection/>
      <ContactSection/>
      <Testimonial/>
      <TeamMember/>
    </div>
  )
}

export default Home