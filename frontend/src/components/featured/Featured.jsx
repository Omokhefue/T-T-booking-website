import { faStar, faMap } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./featured.css";
import { useState } from "react";

const Featured = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    setClicked(index);
  };

  return (
    <section className="section featured">
      <h2 className="section-heading">Top Rated</h2>
      <span className="section-span"></span>
      <div className="featuredType">
        <h5
          onClick={() => handleClick(0)}
          className={clicked === 0 ? "clicked" : ""}
        >
          Hotels
        </h5>
        <h5
          onClick={() => handleClick(1)}
          className={clicked === 1 ? "clicked" : ""}
        >
          Apartments
        </h5>
        <h5
          onClick={() => handleClick(2)}
          className={clicked === 2 ? "clicked" : ""}
        >
          Cabins
        </h5>
      </div>
      <div className="featuredList">
        <div className="featuredListItem">
          <div className="details">
            <img src="Monsieur-de-North.jpg" alt="" />
            <p className="pricing">
              From <big>$500</big>
            </p>
          </div>
          <div className="g">
            <p className="location">
              <FontAwesomeIcon icon={faMap} />
              Lagos,Nigeria
            </p>
            <p className="description">
              Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Omnis, ipsum.
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} />
              <small>48 reviews</small>
            </div>
          </div>
        </div>
        <div className="featuredListItem">
          <div className="details">
            <img src="Monsieur-de-North.jpg" alt="" />
            <p className="pricing">
              From <big>$500</big>
            </p>
          </div>
          <div className="g">
            <p className="location">
              <FontAwesomeIcon icon={faMap} />
              Lagos,Nigeria
            </p>
            <p className="description">Lorem ipsum dolor sit amet,</p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} />
              <small>48 reviews</small>
            </div>
          </div>
        </div>
        <div className="featuredListItem">
          <div className="details">
            <img src="Monsieur-de-North.jpg" alt="" />
            <p className="pricing">
              From <big>$500</big>
            </p>
          </div>
          <div className="g">
            <p className="location">Lagos,Nigeria</p>
            <p className="description">
              Forest location with extreme activities
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} />
              <small>48 reviews</small>
            </div>
          </div>
        </div>
        <div className="featuredListItem">
          <div className="details">
            <img src="Monsieur-de-North.jpg" alt="" />
            <p className="pricing">
              From <big>$500</big>
            </p>
          </div>
          <div className="g">
            <p className="location">Lagos,Nigeria</p>
            <p className="description">
              Forest location with extreme activities
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} />
              <small>48 reviews</small>
            </div>
          </div>
        </div>
        <div className="featuredListItem">
          <div className="details">
            <img src="Monsieur-de-North.jpg" alt="" />
            <p className="pricing">
              From <big>$500</big>
            </p>
          </div>
          <div className="g">
            <p className="location">Lagos,Nigeria</p>
            <p className="description">
              Forest location with extreme activities
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} />
              <small>48 reviews</small>
            </div>
          </div>
        </div>
        <div className="featuredListItem">
          <div className="details">
            <img src="Monsieur-de-North.jpg" alt="" />
            <p className="pricing">
              From <big>$500</big>
            </p>
          </div>
          <div className="g">
            <p className="location">Lagos,Nigeria</p>
            <p className="description">
              Forest location with extreme activities
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} />
              <small>48 reviews</small>
            </div>
          </div>
        </div>
        <div className="featuredListItem">
          <div className="details">
            <img src="Monsieur-de-North.jpg" alt="" />
            <p className="pricing">
              From <big>$500</big>
            </p>
          </div>
          <div className="g">
            <p className="location">Lagos,Nigeria</p>
            <p className="description">
              Forest location with extreme activities
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} />
              <small>48 reviews</small>
            </div>
          </div>
        </div>
        <div className="featuredListItem">
          <div className="details">
            <img src="Monsieur-de-North.jpg" alt="" />
            <p className="pricing">
              From <big>$500</big>
            </p>
          </div>
          <div className="g">
            <p className="location">Lagos,Nigeria</p>
            <p className="description">
              Forest location with extreme activities
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} />
              <small>48 reviews</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
