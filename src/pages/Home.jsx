import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import Program from "../components/Program/Program";
import Result from "../components/Result/Result";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Program />
      <Result />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
}
