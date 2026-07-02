import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <OurProcess />
      <Testimonials />
      <Footer />
    </>
  );
}