import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Room from "./pages/room/Room";
import Register from "./components/register/Register";
import Apartments from "./pages/apartment/Apartments";
import Hotels from "./pages/hotel/Hotels";
import Cabins from "./pages/cabin/Cabins";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
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
  return <RouterProvider router={router} />;
}

export default App;
