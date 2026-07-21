import "./ProgramCategory.css";
import categoryData from './CategoryData';
export default function ProgramCategory() {
  return (
    <section className="category-section">
      <h2>Choose Your Training Style</h2>
      <span>
        Every fitness journey is different. Select the program that matches your
        goals.
      </span>
      <div className="category-card-box">
        {categoryData.map(card=>
            <div className="category-card">
                <img className="category-image" src={card.image}/>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <em>{card.level}</em>
            </div>
        )}
      </div>
    </section>
  );
}
