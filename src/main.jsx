import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CardProvider } from "./Context/CardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CardProvider>
        <App />
      </CardProvider>
    </Router>
  </React.StrictMode>
);
