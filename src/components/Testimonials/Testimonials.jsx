import { Quote } from "lucide-react";
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import "./Testimonials.css";
export default function Testimonials() {
  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "...",
      rating: 5,
      review:
        "Joining FitLife completely changed my lifestyle. The trainers kept me motivated every step of the way.",
    },
  ];
  return (
    <section className="testimonial-container">
      <div className="testimonial-title">
        <h3>What Our Members Say</h3>
        <p>Hear from people who transformed their lives with us.</p>
      </div>
      <div className="testimonial-card">
        <span className="testimonial-arrow">
          <ArrowLeft className="testimonial-arrow-left" />
          <ArrowRight className="testimonial-arrow-right" />
        </span>
        <div className="star-icon">
          {[...Array(5)].map((_, index) => (
            <Star fill="#FFD700" color="white" strokeWidth={1} />
          ))}
        </div>
        {members.map((member) => (
          <>
            <h5>{member.name}</h5>
            <span>{member.role}</span>
            <p>{member.review}</p>
          </>
        ))}
        <Quote color="white" size={20} strokeWidth={2} className="quote-icon" />
      </div>
    </section>
  );
}
