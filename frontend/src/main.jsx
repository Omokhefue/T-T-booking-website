import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SearchContextProvider from "./context/SearchContext.jsx";
import SearchPageContextProvider from "./context/SearchPageContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <SearchContextProvider>
      <SearchPageContextProvider>
        <App />
      </SearchPageContextProvider>
    </SearchContextProvider>
  </AuthContextProvider>
);
