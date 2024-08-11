import { Banner } from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar/Navbar";
import Processes from "@/components/Processes/Processes";
import Services from "@/components/Services/Services";
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';

export default function Home() {

  return (
    <div>
      <SmoothScrollWrapper>
          <Navbar />
          <Banner />
          <Hero id='home'/>
          <LogoTicker id='partners' />
          <Services id='services' />
          <Processes id='process' />
      </SmoothScrollWrapper>
    </div>
  );
}
