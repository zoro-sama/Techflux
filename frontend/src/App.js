import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageAnimated from "./pages/LandingPageAnimated";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageAnimated />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
