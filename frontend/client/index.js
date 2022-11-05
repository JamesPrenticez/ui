import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './styles/globals.css'
import "core-js/stable" // support older browsers
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)