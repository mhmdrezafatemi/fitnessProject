import "./Result.css";

export default function Result() {
  const results = [
    { id: 1, number: "5000+", title: "Member" },
    { id: 2, number: "10+", title: "Years Exp" },
    { id: 3, number: "95%", title: "Sucess" },
    { id: 4, number: "24/7", title: "Support" },
  ];
  return (
    <>
      <section className="result-section-container">
        <h4> Results That Speak For Themselves</h4>
        <p>
          Thousands of people have transformed their lives through our
          personalized fitness programs.
        </p>
        <div className="result-container">
        {results.map((result)=>
        <div className="numbers">
        <strong className="result-number">{result.number}</strong>
        <strong className="result-text">{result.title}</strong>
        </div>)}
        </div>
      </section>
    </>
  );
}
