import CountUpSection from "../../Components/About/CountUpSection"
import SectionOne from "../../Components/About/SectionOne"
import ContactSection from "../../Components/Home/ContactSection"
import SecondSection from "../../Components/Home/SecondSection"
import TeamMember from "../../Components/Home/TeamMember"


const About = () => {
  
  return (
    <div className="mt-16">
      <SectionOne/>
      <CountUpSection/>
      <SecondSection/>
      <ContactSection/>
      <TeamMember/>
    </div>
  )
}

export default About