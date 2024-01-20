import SearchForm from "../../components/search/SearchForm";
import SearchResult from "../../components/searchResult/SearchResult";
import useWindowDimensions from "../../hooks/useWindowDimension.jsx";
import "./search.css";
const Search = () => {
  const { width } = useWindowDimensions();
  return (
    <section className="search">
      {width  && <SearchForm />}
      <SearchResult />
    </section>
  );
};
export default Search;
