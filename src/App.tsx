import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateAccount from "./CreateAccount";
import AboutMe from "./AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
