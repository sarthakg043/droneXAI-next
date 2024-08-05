// import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Banner /> */}
      <Navbar />
      <Hero />
    </div>
  );
}
