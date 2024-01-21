import SearchForm from "../../components/search/SearchForm";
import SearchResult from "../../components/searchResult/SearchResult";
import useWindowDimensions from "../../hooks/useWindowDimension.jsx";
import "./search.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchPageContext } from "../../context/SearchPageContext.jsx";
import { useContext, useEffect, useState } from "react";

const Search = () => {
  const { state, dispatch } = useContext(SearchPageContext);
  const { width } = useWindowDimensions();

  const [display, setDisplay] = useState(state.formDisplay);

  const handleClick = () => {
    dispatch({
      type: "FORM_OPEN",
    });
  };
  useEffect(() => {
    if (width > 576) {
      dispatch({ type: "FORM_OPEN" });
    } else {
      dispatch({ type: "FORM_CLOSE" });
    }
  }, [width]);
  useEffect(() => {

    setDisplay(state.formDisplay);
  }, [state.formDisplay]);

  return (
    <section className="search">
      {display && <SearchForm />}
      <SearchResult />
      {!display && (
        <div className="searchIcon" onClick={handleClick}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      )}
    </section>
  );
};
export default Search;
