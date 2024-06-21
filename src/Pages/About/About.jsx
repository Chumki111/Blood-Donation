import SectionOne from "../../Components/About/SectionOne"
import ContactSection from "../../Components/Home/ContactSection"
import TeamMember from "../../Components/Home/TeamMember"


const About = () => {
  return (
    <div className="mt-16">
      <SectionOne/>
      <ContactSection/>
      <TeamMember/>
    </div>
  )
}

export default About