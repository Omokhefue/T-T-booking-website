import "./travelTips.css";
import travelTips from "./data.json";

const TravelTips = () => {
  const tips = travelTips.tips;

  const randomIndex = Math.floor(Math.random() * tips.length);
  const tip = tips[randomIndex];
  return (
    <div className="travel-tips-container">
      {/* <div className="a"> */}
        {/* <h2 className="travel-tips-heading">Travel Tips</h2> */}
        <div className="tip-card">
          <h3 className="tip-title">{tip.title}</h3>
          <p className="tip-description">{tip.description}</p>
        </div>
      {/* </div> */}
    </div>
  );
};
export default TravelTips;
