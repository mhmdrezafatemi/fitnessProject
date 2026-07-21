import FAQ from "../components/Home/FAQ/FAQ";
import Footer from "../components/Shared/Footer/Footer";
import Hero from "../components/Home/Hero/Hero";
import Pricing from "../components/Home/Pricing/Pricing";
import Program from "../components/Home/Program/Program";
import Result from "../components/Home/Result/Result";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import WhyChooseUs from "../components/Home/WhyChooseUs/WhyChooseUs";
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
