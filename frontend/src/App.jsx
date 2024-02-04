import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext, useMemo } from "react";
import { AuthContext } from "./context/AuthContext";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Room from "./pages/room/Room";
import Apartments from "./pages/apartment/Apartments";
import Hotels from "./pages/hotel/Hotels";
import Cabins from "./pages/cabin/Cabins";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const router = (user) =>
  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route
            path="signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="rooms/room" element={<Room />} />
          <Route path="apartments" element={<Apartments />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="cabins" element={<Cabins />} />
        </Route>
      </>
    )
  );

function App() {
  const { user } = useContext(AuthContext);

  return <RouterProvider router={router(user)} />;
}

export default App;
