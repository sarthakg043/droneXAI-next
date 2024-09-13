import { Banner } from "@/components/Banner/Banner";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar/Navbar";
import Processes from "@/components/Processes/Processes";
import Services from "@/components/Services/Services";
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {

  return (
    <div className="overflow-hidden">
      <SmoothScrollWrapper>
          <Navbar />
          <Banner />
          <Hero id='home'/>
          <LogoTicker id='partners' />
          <Services id='services' />
          <Processes id='process' />
          <Testimonials id='testimonials' />
          <ContactUs id='contact' />
          <Footer />
      </SmoothScrollWrapper>
    </div>
  );
}
