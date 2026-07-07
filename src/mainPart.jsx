import { useState } from "react";
import strength from "./assets/strength.svg";
import community from "./assets/community.svg";
import nutrition from "./assets/nutrition.svg";
import running from "./assets/running.jpg";
import strengthTraining from "./assets/strengthTraining.jpg";
import yoga from "./assets/yoga.jpg";
export default function Main() {
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
  const programs = [
    {
      id: 1,
      image: strengthTraining,
      title: "Strength Training",
      paragraph:
        "Increase muscle mass and improve overall strength through progressive resistance workouts.",
    },
    {
      id: 2,
      image: running,
      title: "Cardio Fitness",
      paragraph:
        "Boost endurance and burn calories with high-energy cardio sessions.",
    },
    {
      id: 3,
      image: yoga,
      title: "Yoga & Recovery",
      paragraph: "Improve flexibility, mobility, and mental focus.",
    },
  ];

  return (
    <>
      <main className="main">
        <div className="main-title">
          <strong> WHY CHOOSE US</strong>
          <h2>Transform Your Body With Expert Coaching </h2>
          <p>
            Our certified trainers and personalized workout plans help you
            achieve sustainable results while building healthy habits that last.
          </p>
        </div>
        <div className="main-cards">
          {cards.map((card) => (
            <div className="card-box choose-us">
              <img src={card.image} />
              <h3>{card.title}</h3>
              <p>{card.paragraph}</p>
            </div>
          ))}
        </div>
        <div className="program-section">
          <div className="program-title">
            <strong> Our Program</strong>
            <h2>Transform Your Body With Expert Coaching </h2>
            <p>
              Our certified trainers and personalized workout plans help you
              achieve sustainable results while building healthy habits that
              last.
            </p>
          </div>
          <div className="program-cards">
            {programs.map((program) => (
              <div className="card-box">
                <div className="image-wrapper">
                  <img src={program.image} />
                </div>
                <h3>{program.title}</h3>
                <p>{program.paragraph}</p>
                <a className="program-link">
                  Learn More
                  <span>⟶</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
