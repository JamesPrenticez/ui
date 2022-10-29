import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './styles/globals.css'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)