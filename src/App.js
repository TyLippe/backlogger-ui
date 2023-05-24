import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./organisms";
import { HomeScreen, GamesScreen } from "./pages";
import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/games" element={<GamesScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
