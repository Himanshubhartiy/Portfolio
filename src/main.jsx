import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";

import "animate.css/animate.min.css";
import WOW from "wowjs";

const wow = new WOW.WOW({
  live: false,
});
wow.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);