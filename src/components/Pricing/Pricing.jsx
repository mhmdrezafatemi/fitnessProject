import { useState } from "react";
import "./Pricing.css";
import PricingCard from "./PricingCard";
export default function Pricing() {
  const [biling, setBiling] = useState("monthly");

  return (
    <section className="pricing-container">
      <PricingCard biling={biling} setBiling={setBiling} />
    </section>
  );
}
