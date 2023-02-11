import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

import { UserProvider } from "~/data/userContext";
import { ProductProvider } from "~/data/productContext";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ProductProvider>
  </React.StrictMode>
);
