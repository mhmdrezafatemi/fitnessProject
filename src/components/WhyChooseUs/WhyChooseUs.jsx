import strength from "../../assets/strength.svg";
import community from "../../assets/community.svg";
import nutrition from "../../assets/nutrition.svg";
import "./WhyChooseUs.css";
export default function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      image: strength,
      title: "Strength Training",
      paragraph: "Build muscle, increase power and improve overall fitness",
    },
    {
      id: 2,
      image: nutrition,
      title: "Nutrition Plans",
      paragraph: "Personalized meal guidance to maximize your progress.",
    },
    {
      id: 3,
      image: community,
      title: "Community Support",
      paragraph: "Train with motivated people who inspire you every day.",
    },
  ];
  return (
    <>
      <div className="choose-us">
        <strong> WHY CHOOSE US</strong>
        <h2>Transform Your Body With Expert Coaching </h2>
        <p>
          Our certified trainers and personalized workout plans help you achieve
          sustainable results while building healthy habits that last.
        </p>
        <div className="choose-us-section">
          {cards.map((card) => (
            <div className="card-box choose-us-section-card">
              <img src={card.image} />
              <h3>{card.title}</h3>
              <p>{card.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
