import React, { useState,useEffect } from "react";
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
import AdminLogin from "./component/AdminLogin";
import AdminProfile from "./component/AdminProfile";
import Contact from "./component/Contact";
import Favicon from "./component/img/favicon.svg";
import Header from "./component/Header"
const App = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbarVisibility = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const [AppointmentId, setAppointmentId] = useState("");
  const [adminId, setAdminId] = useState("");
  
  const GlobalStyle = createGlobalStyle`
  /* Add your global styles here */
  body {
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
   /* Apply responsive styles for smaller screens */
  /* Apply responsive styles for smaller screens */
  @media (max-width: 768px) {
    position: absolute;
    z-index: 1;
    /* Adjust Routes component to prevent horizontal scrolling */
    #root {
      overflow-x: hidden;
    }
  }
`;


useEffect(() => {
  const img = new Image();
  img.src = Favicon;
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const favicon = canvas.toDataURL("image/png");
    document.querySelector("link[rel='icon']").href = favicon;

    let title = "CREAT SE4AI"; // Default title
    const routePrefix = {
      "/team": "Team",
      "/blog": "Blog",
      "/training-program/objectives":"Program Objectives",
"/training-program/components":"Program Components",
"/partners":"Partners",
"/apply":"Apply Now",
"/governance":"Governance",
"/blog":"Blog",

"/blog/past":"Past Events",
"/blog/upcoming":"Upcoming Events",
"/adminlogin":"Adminlogin",
"/intro":"Program Overview",
"/contact":"Contact"


      // Add more routes and their corresponding prefixes here
    }[window.location.pathname]; // Get the route-specific prefix

    if (routePrefix) {
      title = `${routePrefix} | ${title}`;
    }

    document.title = title;
  };
}, []);

  return (
    <DarkModeProvider>
      <BrowserRouter >
      <GlobalStyle />
      
      {/* {window.innerWidth <= 995 ? (
          <Header  />
        ) : ( */}
          <Navbar />
          
           <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/intro" element={<Program />} />
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
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminlogin/:adminId" element={<AdminProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
