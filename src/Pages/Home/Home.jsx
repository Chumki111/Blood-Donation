import BlogsSection from "../../Components/Home/BlogsSection";
import ContactSection from "../../Components/Home/ContactSection";
import Countup from "../../Components/Home/Countup";
import DonationProcess from "../../Components/Home/DonationProcress";
import SecondSection from "../../Components/Home/SecondSection";
import ServicesSection from "../../Components/Home/ServicesSection";
import TeamMember from "../../Components/Home/TeamMember";
import Testimonial from "../../Components/Home/Testimonial";
import Banner from "./Banner";


const Home = () => {
 return (
    <div>
      <Banner />
      <DonationProcess/>
      <SecondSection />
      <Countup />
      <ServicesSection />
      <ContactSection />
      <Testimonial />
      <TeamMember />
      <BlogsSection/>
    </div>
  );
}

export default Home;
