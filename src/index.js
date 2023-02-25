import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import My from "./pages/my.js";
import Home from "./components/home";
import header from "./components/header";
import MyApp from "./App";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyApp />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <React.StrictMode>
// <App />
// </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
