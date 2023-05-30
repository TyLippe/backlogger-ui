import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header } from "./organisms";
import { HomeScreen, GamesScreen, LoginScreen, UserScreen } from "./screens";

import "./App.scss";

export const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Header />
      {user.loggedIn ? (
        <div>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/games" element={<GamesScreen />} />
              <Route path="/user" element={<UserScreen />} />
            </Routes>
          </div>
        </div>
      ) : (
        <LoginScreen />
      )}
    </BrowserRouter>
  );
};
