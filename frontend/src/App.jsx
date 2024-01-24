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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="rooms/room" element={<Room />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
