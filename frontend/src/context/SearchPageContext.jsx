import { createContext, useReducer } from "react";
import useWindowDimensions from "../hooks/useWindowDimension";

export const SearchPageContext = createContext();

const searchReducer = (state, action) => {
  switch (action.type) {
    case "FORM_CLOSE":
      return { ...state, formDisplay: false };
    case "FORM_OPEN":
      return { ...state, formDisplay: true };
    default:
      return state;
  }
};
const SearchPageContextProvider = ({ children }) => {
  const { width } = useWindowDimensions();

  const [state, dispatch] = useReducer(searchReducer, {
    formDisplay: width > 576 ? true : false,
  });
  return (
    <SearchPageContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchPageContext.Provider>
  );
};
export default SearchPageContextProvider;
