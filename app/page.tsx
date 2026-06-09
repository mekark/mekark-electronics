import Hero from "@/Components/HeroSection";
import TrustedBar from "@/Components/TrustedBar";
import Testimonials from "@/Components/TestimonialSection";
import AboutMekark from "@/Components/About";
import ServicesSection from "@/Components/Services";
import CTASection from "@/Components/CTASection";``
import AdvantageSection from "@/Components/Advantage";
import ProcessTimeline from "@/Components/ProcessTimeline";
import FaqSection from "@/Components/Faq";
import Footer from "@/Components/Footer";

export default function Page() {
  return (
    <main className="bg-[#060606] overflow-hidden">
      <Hero />
      <TrustedBar />
      <AboutMekark />
      <ServicesSection />
      <CTASection />
      <AdvantageSection />
      <ProcessTimeline />
      <Testimonials />
      <FaqSection />
      <Footer />
    </main>
  );
}