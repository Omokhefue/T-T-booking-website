import { createContext, useReducer ,useEffect} from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const initialState = {
    isAuthenticated: user ? true : false,
    user: user ? user : null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
