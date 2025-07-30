// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlacesProvider } from "./context/PlacesContext";

import "leaflet/dist/leaflet.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlacesProvider>
      <App />
    </PlacesProvider>
  </React.StrictMode>

);
