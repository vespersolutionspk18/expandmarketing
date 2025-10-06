
import AboutUs from "./home/AboutUs";
import Hero from "./home/Hero";
import OurServices from "./home/OurServices";

import LeadChange from "./components/LeadChange";
import OurProjects from "./home/OurProjects";
import Blogs from "./home/Blogs";
import ExpandReady from "./components/ExpandReady";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <>
    <Hero />
    <AboutUs />
    <OurServices />
   
    <LeadChange text="Lead The Change" imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&q=90" />
    <OurProjects />
    <Blogs />
    <ExpandReady />
    <Footer />
    </>
  );
}
