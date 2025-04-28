import HeaderTop from "@/components/HeaderTop";
import MainHeader from "@/components/MainHeader";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/About/page";
import Portfolio from "@/components/Portfolio/page";
import Services from "@/components/Services/page";
import Contact from "@/components/Contact/page";

export default function Home() {
  return (
    <div>
      <HeaderTop />
      <MainHeader />
      <Navbar />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}