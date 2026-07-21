import running from "../../../assets/running.jpg";
import strengthTraining from "../../../assets/strengthTraining.jpg";
import yoga from "../../../assets/yoga.jpg";
import Reveal from "../../Reveal";
import { useState, useEffect } from "react";
import "./Program.css";
import "../../../hooks/isMobile";
import useIsMobile from "../../../hooks/isMobile";
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
export default function Program() {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <section className="program-section background-gradient">
      <div className="program-title">
        <strong> Our Program</strong>
        <h2>Transform Your Body With Expert Coaching </h2>
        <p>
          Our certified trainers and personalized workout plans help you achieve
          sustainable results while building healthy habits that last.
        </p>
      </div>
      <div className="program-cards">
        {programs.map((program, index) => (
          <Reveal
            distance="50%"
            direction={isMobile ? "left" : "top"}
            delay={index * 800}
            key={program.id}
          >
            <div className="program-card-box">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
