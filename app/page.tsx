
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
   
    <LeadChange text="Lead The Change" imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&q=90" />
    <OurProjects />
    <Blogs />
    <ExpandReady />
    <Footer />
    </>
  );
}
