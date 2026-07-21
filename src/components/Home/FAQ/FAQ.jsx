import { useState } from "react";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "How often should I work out?",
      answer:
        "There’s no one-size-fits-all answer, but for most people, training 3 to 5 times a week is the sweet spot. The key is staying consistent and giving your body enough time to recover between workouts.",
    },
    {
      id: 2,
      question: "Can I lose weight without going to the gym?",
      answer:
        "Absolutely! You don't need expensive equipment to get great results. A combination of home workouts, daily movement, and healthy eating habits can be just as effective as going to the gym.",
    },
    {
      id: 3,
      question: "How long will it take to see results?",
      answer:
        "Everyone's journey is different, but many people start feeling stronger and more energetic within the first couple of weeks. Visible changes usually appear after 6 to 8 weeks of consistent training and balanced nutrition.",
    },
    {
      id: 4,
      question: "Do I need to follow a strict diet?",
      answer:
        "Not at all. We believe in building healthy habits, not following extreme diets. Eating balanced meals, staying hydrated, and being consistent will always beat short-term restrictions.",
    },
    {
      id: 5,
      question: "Is this program suitable for beginners?",
      answer:
        "Yes! Whether you're just getting started or getting back into fitness after a break, our programs are designed to help you progress safely at your own pace.",
    },
  ];
  const [openedId, setOpened] = useState(null);
  return (
    <section className="faq-container">
      <h5>Frequently Asked Questions</h5>
      <p>Everything you need to know before starting your fitness journey.</p>
      <div className="faq-box">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            isOpen={openedId === faq.id}
            onToggle={() => setOpened(openedId === faq.id ? null : faq.id)}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
