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
import StudentLogin from "./component/StudentLogin";
import StudentProfile from "./component/StudentProfile";


import Trainee_Talks_Webinar from "./component/events/Trainee_Talks_Webinar";
import Industry_Talks_Webinar from "./component/events/Industry_Talks_Webinar";
import Trainee_Talks_Webinar_April3rd from "./component/events/Trainee_Talks_Webinar_April3rd";
import Women_in_Engineering from "./component/events/Women_in_Engineering"
import Trainee_Talks_Webinar_February27 from "./component/events/Trainee_Talks_Webinar_February27";
import Industry_Talks_Webinar_February10 from "./component/events/Industry_Talks_Webinar_February10"; 
import Trainee_Talks_Webinar_December13 from "./component/events/Trainee_Talks_Webinar_December13";
import Industry_Talks_Webinar_November18 from "./component/events/Industry_Talks_Webinar_November18";
import Trainee_Talks_Webinar_November4 from "./component/events/Trainee_Talks_Webinar_November4";
import CREATE_SE4AI_Retreat_June3 from "./component/events/CREATE_SE4AI_Retreat_June3";
import Guest_Speaker_Webinar_April12 from "./component/events/Guest_Speaker_Webinar_April12";
import Guest_Speaker_Webinar_February3 from "./component/events/Guest_Speaker_Webinar_February3";  
import  Future_of_AI_Networking_Event from "./component/events/Future of AI Networking Event";


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
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/studentlogin/:studentId" element={<StudentProfile />} />


          <Route path="/blog/Trainee_Talks_Webinar_sptemper25" element={<Trainee_Talks_Webinar />} />
           <Route path="/blog/Industry_Talks_Webinar_April25" element={<Industry_Talks_Webinar />} />
           <Route path="/blog/Trainee_Talks_Webinar_April3rd" element={<Trainee_Talks_Webinar_April3rd />} />
           <Route path="/blog/Women_in_Engineering" element={<Women_in_Engineering />} />
           <Route path="/blog/Trainee_Talks_Webinar_February27" element={< Trainee_Talks_Webinar_February27 />} />
           <Route path="/blog/Industry_Talks_Webinar_February10" element={< Industry_Talks_Webinar_February10 />} />
           <Route path="/blog/Trainee_Talks_Webinar_December13" element={< Trainee_Talks_Webinar_December13 />} />
           <Route path="/blog/Industry_Talks_Webinar_November18" element={< Industry_Talks_Webinar_November18 />} />
           <Route path="/blog/Trainee_Talks_Webinar_November4" element={< Trainee_Talks_Webinar_November4/>} />
           <Route path="/blog/CREATE_SE4AI_Retreat_June3" element={< CREATE_SE4AI_Retreat_June3/>} />
            <Route path="/blog/Guest_Speaker_Webinar_April12" element={<Guest_Speaker_Webinar_April12/>} />
            <Route path="/blog/Guest_Speaker_Webinar_February3" element={<Guest_Speaker_Webinar_February3 />} />
            <Route path="/blog/Future_of_AI_Networking_Event" element={<Future_of_AI_Networking_Event />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
