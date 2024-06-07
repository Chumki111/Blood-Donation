import ContactSection from "../../Components/Home/ContactSection"
import Countup from "../../Components/Home/Countup"
import SecondSection from "../../Components/Home/SecondSection"
import TeamMember from "../../Components/Home/TeamMember"
import Banner from "./Banner"


const Home = () => {
  return (
    <div>
      
      <Banner/>
      <SecondSection/>
      <Countup/>
      <ContactSection/>
      <TeamMember/>
    </div>
  )
}

export default Home