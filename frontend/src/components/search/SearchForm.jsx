import "./searchForm.css";
import { SearchPageContext } from "../../context/SearchPageContext.jsx";
import { useContext } from "react";
import useWindowDimensions from "../../hooks/useWindowDimension.jsx";

const SearchForm = () => {
  const { state, dispatch } = useContext(SearchPageContext);

  const { width } = useWindowDimensions();
  if (width > 576) {
    const closeIcon = document.querySelector(".search-form > .close-icon");
    if (closeIcon) {
      closeIcon.style.display = "none";
    }
  }
  const handleClick = () => {
    dispatch({ type: "FORM_CLOSE" });
  };
  return (
    <section className="search-form">
      <h3 className="search-form-header">Search</h3>
      <button className="close-icon" onClick={handleClick}>
        x
      </button>
      <form action="" className="search-form-content">
        <div className="form-group form-search-destination">
          <label for="destination">Destination</label>
          <input type="text" id="destination" placeholder="madrid" />
        </div>
        <div className="form-group form-search-date">
          <label for="check-in-date">Check-in date</label>
          <input
            type="text"
            id="check-in-date"
            placeholder="04/23/2034 to 29/45/2013"
          />
        </div>
        <div className="options-group">
          <label for="options">Options</label>
          <div className="options-content">
            <div className="form-group">
              <label for="min-price">Min price per night</label>
              <input type="text" id="min-price" />
            </div>
            <div className="form-group">
              <label for="max-price">Max price per night</label>
              <input type="text" id="max-price" />
            </div>{" "}
            <div className="form-group">
              <label htmlFor="">Adult</label>
              <input type="text" placeholder="1" />
            </div>
            <div className="form-group">
              <label htmlFor="">Children</label>
              <input type="text" placeholder="0" />
            </div>
            <div className="form-group">
              <label htmlFor="">Room</label>
              <input type="text" placeholder="0" />
            </div>
          </div>
          <button type="submit" className="search-btn">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
