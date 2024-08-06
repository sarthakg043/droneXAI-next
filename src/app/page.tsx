// import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <LogoTicker />
      <Services />
    </div>
  );
}
