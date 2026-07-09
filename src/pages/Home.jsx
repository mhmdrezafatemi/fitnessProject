import Hero from "../components/Hero/Hero";
import Program from "../components/Program/Program";
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
      </main>
    </>
  );
}
