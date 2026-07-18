import { AsteriskIcon } from "lucide-react";
import { Check } from "lucide-react";
import Reveal from "../Reveal";
import useIsMobile from "../../hooks/isMobile";
export default function PricingCard({ biling, setBiling }) {
  const pricing = [
    {
      id: 1,
      title: "Basic",
      price: {
        monthly: 19,
        yearly: 39,
      },
      features: ["Workout Plans", "Nutrition Guide", "Email Support"],
      popular: false,
    },

    {
      id: 2,
      title: "Pro",
      price: {
        monthly: 39,
        yearly: 89,
      },
      features: [
        "Everything in Basic",
        "Personal Coach",
        "Weekly Progress",
        "Priority Support",
      ],
      popular: true,
    },

    {
      id: 3,
      title: "Elite",
      price: {
        monthly: 69,
        yearly: 159,
      },
      features: [
        "Everything in Pro",
        "1-on-1 Coaching",
        "Unlimited Classes",
        "VIP Support",
      ],
      popular: false,
    },
  ];
  return (
    <>
      <div className="plan-button">
        choose your perfect plan:
        <div className="plan-button-container">
        <button
          className={biling === "monthly" ? "active" : ""}
          onClick={() => setBiling("monthly")}
        >
          Monthly
        </button>
        <button
          className={biling === "yearly" ? "active" : ""}
          onClick={() => setBiling("yearly")}
        >
          Yearly
        </button>
        </div>
      </div>
      <div className="plan-section">
        {pricing.map((plan) => (
          <div
            className={
              plan.popular === true ? "plan-card popularplan" : "plan-card"
            }
            key={plan.id}
          >
            <h5 className={plan.popular === true ? "popular" : null}>
              {plan.title}
              <strong>
                {plan.popular === true ? <AsteriskIcon size={30} /> : null}
              </strong>
            </h5>
            <p>Price:{plan.price[biling]}$</p>
            <ul className="ppp">
              {plan.features.map((feature) => (
                <li className="plan-card-list">
                  <Check size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
