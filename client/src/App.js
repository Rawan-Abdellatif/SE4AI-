// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Program from "./component/Program";
import Events from "./component/Events";
import Partners from "./component/Partners";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/intro" element={<Program />} />
        <Route path="/events" element={<Events />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
//
