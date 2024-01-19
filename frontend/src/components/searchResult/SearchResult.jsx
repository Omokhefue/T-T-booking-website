import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "./searchResult.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const SearchResult = () => {
  return (
    <section className="searchResultContainer">
      <div className="result">
        <div className="resultImg">
          <img src="Monsieur-de-North.jpg" alt="Charming Parisian Loft" />
        </div>
        <div className="details">
          <h4>Le Secret du Marais</h4>
          <p className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
            (280 reviews)
          </p>
          <p className="distance">10-minute walk from Notre Dame</p>
          <p className="feature">Private balcony with panoramic city views</p>
          <p className="amenities">
            Fully equipped kitchen • Exposed brick walls • Rooftop terrace
          </p>
        </div>
        <div className="price-and-action">
          <div className="price">
            <p>
              <small>From</small> $180
              <br />
              <small>per night</small>
            </p>
          </div>
          <Link to="/search">Book your romantic getaway</Link>
        </div>
      </div>
      <div className="result">
        <div className="resultImg">
          <img src="Monsieur-de-North.jpg" alt="Charming Parisian Loft" />
        </div>
        <div className="details">
          <h4>Hôtel Emile</h4>
          <p className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            (1200 reviews)
          </p>
          <p className="distance">Steps from the Louvre Museum</p>
          <p className="feature">
            Stylishly furnished rooms with marble bathrooms
          </p>
          <p className="amenities">
            On-site spa • Gourmet restaurant • 24-hour concierge
          </p>
        </div>
        <div className="price-and-action">
          <div className="price">
            <p>
              <small>From</small> $250
              <br />
              <small>per night</small>
            </p>
          </div>
          <Link to="/search">Experience Parisian luxury</Link>
        </div>
      </div>
      <div className="result">
        <div className="resultImg">
          <img src="Monsieur-de-North.jpg" alt="Charming Parisian Loft" />
        </div>{" "}
        <div className="details">
          <h4>Chez Pierre</h4>
          <p className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            (150 reviews)
          </p>
          <p className="distance">Quiet street in Montmartre</p>
          <p className="feature">
            Charming self-catering studio with rooftop access
          </p>
          <p className="amenities">
            Modern kitchen • Laundry facilities • Fast Wi-Fi
          </p>
        </div>
        <div className="price-and-action">
          <div className="price">
            <p>
              <small>From</small> $80
              <br />
              <small>per night</small>
            </p>
          </div>
          <Link to="/search">Live like a local in Paris</Link>
        </div>
      </div>
      <div className="result">
        <div className="resultImg">
          <img src="Monsieur-de-North.jpg" alt="Charming Parisian Loft" />
        </div>
        <div className="details">
          <h4>Le Jardin Fleuri</h4>
          <p className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
            (600 reviews)
          </p>
          <p className="distance">Spacious apartment near Luxembourg Gardens</p>
          <p className="feature">
            Separate bedrooms for families with private balcony
          </p>
          <p className="amenities">
            Kid-friendly amenities • Play area • Babysitting services (upon
            request)
          </p>
        </div>{" "}
        <div className="price-and-action">
          <div className="price">
            <p>
              <small>From</small> $80
              <br />
              <small>per night</small>
            </p>
          </div>
          <Link to="/search">Live like a local in Paris</Link>
        </div>
      </div>
    </section>
  );
};
export default SearchResult;
