// import React, { useContext,useState,useEffect,useRef } from "react";
// import styled from "styled-components";
// import logo from "./img/logo.svg";
// import logoDark from "./img/logo_dark.svg";
// import { DarkModeContext } from "./DarkModeContext";
// import HomePageSidebar from "./HomePageSidebar";
// import ProgramSidebarMedia from "./ProgramSidebarMedia";
// import { useLocation } from "react-router-dom";

//  const Header= ({})=>{  
//     const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
//     const [selectedLink, setSelectedLink] = useState(""); // Track the selected link
//     const [activeLink, setActiveLink] = useState(""); // Track the active link
//     const sidebarRef = useRef(null);
  
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track whether the sidebar is open or closed
//     const location = useLocation(); // Get the current route location

//     // Function to toggle the sidebar
//     const toggleSidebar = () => {
//       console.log("Toggle Sidebar Clicked");
//       toggleDarkMode();
//       setIsSidebarOpen(!isSidebarOpen);
//     };
    
  
    

//     return ( 
//       <Container isDarkMode={isDarkMode}>
     
//       <SidebarButton isDarkMode={isDarkMode} onClick={toggleSidebar} >
  
//   <svg width="30" height="30" viewBox="0 0 30 30"
//    aria-hidden="true">
//     <path stroke="currentColor"
//      stroke-linecap="round"
//      stroke-miterlimit="10" 
//   stroke-width="2"
//    d="M4 7h22M4 15h22M4 23h22">
//     </path></svg>
//   </SidebarButton> 
//   <Nav isDarkMode={isDarkMode} className="logo-nav">
//       <a href="/">
//         <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
//       </a>
//       <Creat>
//       <a href="/">CREATE SE4AI</a></Creat>
//       </Nav>
//       {isSidebarOpen &&
//           (location.pathname === "/intro" ? (
//             <ProgramSidebarMedia
//               isDarkMode={isDarkMode}
//               toggleSidebar={toggleSidebar}
//               isOpen={isSidebarOpen} // Pass isSidebarOpen as a prop
//             />
//           ) : (
//             <HomePageSidebar
//               isDarkMode={isDarkMode}
//               toggleSidebar={toggleSidebar}
//               isOpen={isSidebarOpen} // Pass isSidebarOpen as a prop
//             />
//           ))}



      
//        </Container>)

//  }
//  export default Header; 
//  const Container = styled.div`
//   display: flex;
//   /* width:100%; */
//   height: 60px;
//     /* border:2px solid green; */


// `;
// const Creat=styled.div`
// /* margin-top:-25px; */
// width:110px;
//     font-weight: bold;/* margin-left:10px; */
// font-size:16px ; 
// text-overflow:ellipsis;
// margin-right:-3px;
// `
//  const SidebarButton = styled.button`
//  font-size: 15px;
//  cursor: pointer;
//  border:none;
//  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
// color: ${(props) => (props.isDarkMode ?"white": "#474748" )};
// margin-left:10px;
// margin-top:5px;
// /* border:2px solid green; */
//  @media (min-width: 995px) {
//    display: none;
//    border:none;
// margin-right:15px;
// padding-right:20px;
//  }
// `;
// const Nav = styled.li`
// display: flex;
//  cursor: pointer;
// width:170px ;
// /* margin-top: -25px ;  */
// margin-right:8px; 
// font-weight:500; 
// align-items:center;
// /* border:2px solid red; */
// img {
// padding-top:7px;    height: 32px;
//  cursor: pointer;
// margin-right:10px;
// margin-left:2px;
// width:32px; 
//  }
//  a {
//    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
//    text-decoration: none;
//    font-family:   "-apple-system", "Segoe UI", sans-serif;
//   font-size: 16px;
//  margin-top: -2px; 
//  /* padding-left:-20px; */
// /* padding-left:-10px; */
// /* width:80px; */
// &.selected {
//  color: #BB5A7D;
//    }
//  &:hover {
//      color: #BB5A7D;
//    }
 
   
//  }
//  @media (min-width: 995px) {
//    /* Hide all Nav elements */
   
//      display: none;


//    /* Override display for the first Nav element (logo) */
 
//  }
// `;

  
 