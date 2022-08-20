import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { menus } from "../utils/constants/menuRoutes.constants";
import "./../assets/scss/App.scss";
import MissingRoute from "./components/MissingRoute";
import Header from "./components/Header/Header";
import Loader from "./features/Loader/Loader";
import Stories from "./pages/Stories";
import StorySearch from "./features/TopStories/Containers/StorySearch/StorySearch";

const App = () => {
  return (
    <div className="use-bootstrap">
      <BrowserRouter basename="/">
        <Header />
        <div className="container">
          <StorySearch />
          <Routes>
            {menus.map((route) => (
              <Route key={route.path} path={route.path} element={<Stories endpoint={route.endpoint} />} />
            ))}
            <Route path="/" element={<Navigate to={menus.length > 0 ? menus[0].path : "/missing"} replace />} />
            <Route path="*" element={<MissingRoute />} />
          </Routes>
        </div>
        <Loader />
      </BrowserRouter>
    </div>
  );
};

export default App;
