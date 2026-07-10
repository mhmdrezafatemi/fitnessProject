import Hero from "../components/Hero/Hero";
import Program from "../components/Program/Program";
import Result from "../components/Result/Result";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
export default function Home() {
  return (
    <>
    <header>
      <Hero />
      </header>
      <main>
      <WhyChooseUs />
      <Program />
      <Result/>
      <Testimonials/>
      </main>
    </>
  );
}
