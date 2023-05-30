import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./organisms";
import { PrivateRoutes } from "./PrivateRoutes";
import { HomeScreen, GamesScreen, LoginScreen, UserScreen } from "./screens";

import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/games" element={<GamesScreen />} />
            <Route path="/user" element={<UserScreen />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
