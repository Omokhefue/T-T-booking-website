import "./choose.css";

import {
  faBalanceScale,
  faGlobe,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyChooseUsSection = () => {
  return (
    <section className="section choose-section">
      <h2 className="section-heading">Why Choose Us</h2>
      <span className="section-span"></span>
      <div className="chooseList">
        <div className="chooseListItem">
          <FontAwesomeIcon icon={faGlobe} />
          <h5>Worldwide Coverage</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cupiditate amet
          </p>
        </div>
        <div className="chooseListItem">
          <FontAwesomeIcon icon={faTrophy} className="fa-2x" />

          <h5>Award Winning Service</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cupiditate amet magnam vitae aliquam
          </p>
        </div>
        <div className="chooseListItem">
          <FontAwesomeIcon icon={faBalanceScale} />

          <h5>Competitive Pricing</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cupiditate amet magnam vitae
          </p>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUsSection;
