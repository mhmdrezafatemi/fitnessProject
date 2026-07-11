import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import "./FAQ.css";
export default function FAQItem({ answer, question, isOpen, onToggle }) {
  return (
    <div className="each-faq">
      <button className="chevron-button" onClick={onToggle}>
        <p className="question">{question}</p>
        <ChevronUp
          className={`chevron-icon ${isOpen ? "faq-close" : "faq-open"}`}
        />
      </button>
      <div className={`answer ${isOpen ? " open" : ""}`}>
        <p className="answer-self">{answer}</p>
      </div>
    </div>
  );
}
