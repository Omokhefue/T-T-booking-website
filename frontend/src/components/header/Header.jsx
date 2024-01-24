import "./header.css";

import {
  faHouse,
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimension";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const Header = () => {
  const [display, setDisplay] = useState(true);
  const { width } = useWindowDimensions();
  const location = useLocation();
  useEffect(() => {
    if (width < 580) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [width]);
  return (
    <header style={{ height: location.pathname === "/" ? "50vh" : "10vh" }}>
      {location.pathname === "/" && (
        <>
          <h2>Let's travel the world together</h2>
          <p>Find awesome apartments,hotels, and cabins. Just for you!</p>
        </>
      )}

      <div className="headerItems">
        <div className="searchPropertyTypes">
          <div className="searchPropertyTypeItem">
            <FontAwesomeIcon icon={faHouse} />
            <p>Houses</p>
          </div>
          <div className="searchPropertyTypeItem">
            <FontAwesomeIcon icon={faHouse} />
            <p>Apartments</p>
          </div>
          <div className="searchPropertyTypeItem">
            <FontAwesomeIcon icon={faHouse} />
            <p>Cabins</p>
          </div>
        </div>
        {location.pathname === "/" && display && (
          <form className="header-form">
            <div className="option">
              <FontAwesomeIcon icon={faBed} />
              <input type="text" placeholder="Where are you going?" />
            </div>
            <div className="option">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>26/02/13 - 34/12/34</span>
            </div>
            <div className="option">
              <FontAwesomeIcon icon={faPerson} />
              <span>1 adult 0 child 1 room </span>

              {/* <div>
              <div>
                <span>Adult</span>
                <div>
                  <button>-</button>
                  <span>3</span>
                  <button>+</button>
                </div>
              </div>
              <div>
                <span>Children</span>
                <div>
                  <button>-</button>
                  <span>8 </span>
                  <button>+</button>
                </div>
              </div>
              <div>
                <span>Room</span>
                <div>
                  <button>-</button>
                  <span className="optionCounterNumber">56</span>
                  <button>+</button>
                </div>
              </div>
            </div> */}
            </div>
            <div>
              <Link>Search</Link>
            </div>
          </form>
        )}
      </div>
    </header>
  );
};
export default Header;
