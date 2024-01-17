import "./travelTips.css";
import travelTips from "./data.json";

const TravelTips = () => {
  const tips = travelTips.tips;

  const randomIndex = Math.floor(Math.random() * tips.length);
  const tip = tips[randomIndex];
  return (
    <section className=" section travel-tips">
      <div className="travel-tips-container">
        <h2>Travel Tips</h2>
        <div className="tip-card">
          <h3 className="tip-title">{tip.title}</h3>
          <p className="tip-description">{tip.description}</p>
        </div>
      </div>
    </section>
  );
};
export default TravelTips;
