import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Homepage from "./component/Homepage";
import Program from "./component/Program";
import Team from "./component/Team";
import Events from "./component/Events";
import Partners from "./component/Partners";
import Apply from "./component/Apply";
import Governance from "./component/Governance";
import PastEvents from "./component/PastEvents";
import UpcomingEvents from "./component/UpcomingEvents";
import ProgramObjectives from "./component/ProgramObjectives";
import ProgramComponents from "./component/ProgramComponents";
import { DarkModeProvider } from "./component/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/intro/" element={<Program />} />
          <Route
            path="/training-program/objectives"
            element={<ProgramObjectives />}
          />
          <Route
            path="/training-program/components"
            element={<ProgramComponents />}
          />
          <Route path="/blog" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog/past" element={<PastEvents />} />
          <Route path="/blog/upcoming" element={<UpcomingEvents />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
