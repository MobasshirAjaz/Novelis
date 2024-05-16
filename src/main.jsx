import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function Main() {
  const [active, setActive] = useState("search");

  return (
    <React.StrictMode>
      <App setActive={setActive} active={active} />
    </React.StrictMode>
  );
}

// Render Main component instead of App
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
