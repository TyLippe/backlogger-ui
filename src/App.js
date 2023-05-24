import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  const [welcomeStr, setWelcomeStr] = useState("");
  const getHello = async () => {
    const res = await axios.get("http://localhost:3000/", { headers });
    return res.data;
  };

  useEffect(() => {
    (async () => {
      const res = await getHello();
      setWelcomeStr(res);
    })();
  }, [welcomeStr]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{welcomeStr}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
