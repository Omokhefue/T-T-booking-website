import "./navbar.css";

import {
  faSearch,
  faEllipsisVertical,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { width } = useWindowDimensions();

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (width > 920) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [width]);

  return (
    <nav>
      <div className="nbHeading">
        <h1 className="logo">T&T Bookings</h1>
        <div className="nbSearch">
          <div>
            <input type="text" placeholder="Select Your Destination..." />
            <FontAwesomeIcon icon={faSearch} />
          </div>

          {!display && (
            <>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                onClick={() => setDisplay(!display)}
                className="nbIcon"
              />
            </>
          )}

          {width < 920 && display && (
            <>
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => {
                  setDisplay(!display);
                }}
                className="nbIcon"
              />
            </>
          )}
        </div>
      </div>
      <div className="nbList">
        {display && (
          <>
            <div className="nbListItems">
              <NavLink to="hotels">hotels</NavLink>
              <NavLink to="apartments">apartments</NavLink>
              {/* <NavLink to="villa">villa</NavLink> */}
              <NavLink to="cabin">cabin</NavLink>
              {/* <NavLink to="houses">houses</NavLink> */}
            </div>
            <div className="nbListItems a">
              <NavLink to="Register">Register</NavLink>
              <NavLink to="login">Login</NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
