import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { DarkModeContext } from "./DarkModeContext";
import { Link, useNavigate } from "react-router-dom";
import HomePageSidebar from "./HomePageSidebar";
import { useLocation } from "react-router-dom";
import ProgramSidebarMedia from "./ProgramSidebarMedia";
import { Grid } from "@mui/material";
import { width } from "@mui/system";

const Navbar = () => {
  const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const shouldShowSidebar =
  location.pathname !== "/intro" &&
  location.pathname !== "/training-program/objectives" &&
  location.pathname !== "/training-program/components";



  const shouldShowProgramSidebar =
  location.pathname === "/intro" ||
  location.pathname === "/training-program/objectives" ||
  location.pathname === "/training-program/components";

  const handleLoginToggle = () => {
    setShowDropdown(!showDropdown); // Toggle the visibility of the dropdown
  };

  const handleDropdownOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false); // Close the dropdown when an option is selected
  };
  const handleToggle = () => {
    toggleDarkMode(); // Toggle the dark mode state in the context
  };

  const handleStudentClick = () => {
    // Use navigate to redirect to the /adminlogin route
    navigate("/Studentlogin");
  };
  return (
    // <NavbarStickyContainer>
    <NavbarContainer isDarkMode={isDarkMode} style={{ zIndex: 1 }}>  
    {shouldShowProgramSidebar &&<ProgramSidebarMedia/>}    
        {shouldShowSidebar && <HomePageSidebar />}
     

 
        <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1}}
    
  >     

    <Grid item xs={12} md={12} lg={12} xl={12}>
    <NavMenu  >
      <NavmenuLeft>
        <Nav isDarkMode={isDarkMode} className="logo-nav">
          <a href="/">
            <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
          </a>
          <Creat>
          <a href="/">CREATE SE4AI</a></Creat>
          </Nav>
      

        <Nav isDarkMode={isDarkMode}>
          <a href="/intro"   
               className={location.pathname === "/intro" ? "selected" : ""}>
               Program</a>
        </Nav>
    

        <Nav isDarkMode={isDarkMode}>
          <a href="/team"
          className={location.pathname === "/team" ? "selected" : ""}>Team</a>
        </Nav>
      

        <Nav isDarkMode={isDarkMode}>
          <a href="/blog" className={location.pathname === "/blog" ? "selected" : ""}>Events</a>
        </Nav>
      

        <Nav isDarkMode={isDarkMode}>
          <a href="/governance" className={location.pathname === "/governance" ? "selected" : ""}>Governance</a>
        </Nav>


        <Nav isDarkMode={isDarkMode}>
          <a href="/partners" className={location.pathname === "/partners" ? "selected" : ""}>Partners</a>
        </Nav>
        <Nav isDarkMode={isDarkMode}>
          <a href="/apply" className={location.pathname === "/apply" ? "selected" : ""}>Apply</a>
        </Nav>
     

        {/* <Nav isDarkMode={isDarkMode} style={{ width: "80px" }}>
          <LoginLink onClick={handleStudentClick}>Login</LoginLink> */}
{/*          
       {showDropdown && (
            <DropdownMenuWrapper isDarkMode={isDarkMode}>
              <DropdownMenu isDarkMode={isDarkMode}>
                <DropdownItem onClick={handleStudentClick}>Student</DropdownItem>
              </DropdownMenu>
            </DropdownMenuWrapper>
          )} */}
        {/* </Nav>  */}


</NavmenuLeft>


        <RightNav isDarkMode={isDarkMode} className="right-nav">
        <Nav isDarkMode={isDarkMode} className="right-nav">
          <Contact isDarkMode={isDarkMode}>
            <a href="/contact">Contact</a>
          </Contact>
          <SwitchLabel>
            <SwitchInput
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggle} onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <Slider
              className={isDarkMode ? "slider round active" : "slider round"}
              checked={isDarkMode} 
            ><div className="circle-wrapper">
          </div></Slider>
     
          </SwitchLabel>   </Nav>
        </RightNav>

    </NavMenu>
</Grid>
</Grid>
    </NavbarContainer>
    // </NavbarStickyContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  border-bottom: ${(props) => (props.isDarkMode ? "" : "2px solid #eef0f2")};
position:static;  
margin-top:-15px;
flex-direction:row;
    /* z-index: 5; */
/* border:2px solid blue; */
 flex-direction:row; 
  color: #fff;
  height: 60px;
/* z-index:2;   */
align-items: center;
text-align:center;
  font-size: 16px;
/* padding-bottom:2px; */
  font-family:   "-apple-system", "Segoe UI", sans-serif;
  background-color: ${(props) => (props.isDarkMode ? "#242526" : "white")};
  /* border-bottom: 1px solid #dcdcdc; */
  /* position: ${(props) => (props.scrollPosition > 20 ? "sticky" : "relative")}; */
  top: ${(props) => (props.scrollPosition > 20 ? "20px" : "0")};
  /* border:2px solid red; */
padding-bottom:13px; 
 @media screen and (min-width: 1700px) {
    align-items: center;
    width:100%;
  }
  @media (max-width: 995px) {
/* z-index:-1; */
}
`;

const NavMenu = styled.ul`
  display: flex; /* Display its children in a row */
  align-items: center; /* Vertically center children */
  /* z-index:5;   */
/* height:60px; */
  list-style: none;
margin-left:-5px;  
cursor: pointer;
padding-left:0px;
/* border:2px solid red; */
/* align-items: center; */
    flex: 1;
    min-width: 0;
    /* width:100%; */
    margin-top:-45px;
font-weight:bold;  
padding-bottom:20px;
/* border:2px solid yellow; */

/* @media (max-width: 1000px) {
margin-left:35px;
}   */
  /* @media (max-width: 995px) {
z-index:1;
} */
@media (max-width: 1000px) {
    /* Hide all Nav elements */
    
      display: none;


    /* Override display for the first Nav element (logo) */
  
  }

 `

const Nav = styled.li`
 display: flex;
  cursor: pointer;
  z-index:5;
  /* position: relative; */
margin-right:23px; 
font-weight:500; 
align-items:center;
/* border:2px solid blue; */
 img {
padding-top:10px;    height: 32px;
  cursor: pointer;
margin-right:10px;
margin-left:10px;
width:32px; 

  }
  a {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    text-decoration: none;
    font-family:   "-apple-system", "Segoe UI", sans-serif;
   font-size: 16px;
  margin-top: -2px; 
  /* padding-left:-20px; */
/* padding-left:-10px; */
/* width:80px; */
 &.selected {
  color: #BB5A7D;
    }
  &:hover {
      color: #BB5A7D;
    }

    
  }
  &.right-nav {
    margin-left: auto; /* This will push the last Nav to the right */
  }
  @media (max-width: 1000px) {
    /* Hide all Nav elements */
    
      display: none;


    /* Override display for the first Nav element (logo) */
  &.logo-nav {
      display: flex;
    }
  }
  @media (max-width: 995px) {
    display: none;
}
`;

const Creat=styled.div`
/* z-index:2; */
width:120px;
    font-weight: bold;
    margin-left:-10px;
font-size:16px ; 
text-overflow:ellipsis;
`

const Contact = styled.div`
margin-right:12px;
/* border:2px solid green; */
`;

const SwitchLabel = styled.label`
  position: relative;
  margin-right:-10px;

  display: inline-block;
  width: 48px;
  height: 24px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0px;
  height:0px;
  
 

  &:checked + .slider {
    background-color: #404040;
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:#4d4d4d;
  transition: 0.2s;
  border-radius: 33px;
  
    .circle-wrapper {
    position: absolute;
    height: 20px;
    width: 18px;
    left: ${(props) => (props.checked ? "2px" : "2px")};
    bottom: 3px;
    top: 2px;
    /* background-color: ${(props) => (props.checked ? "white" : "white")}; */
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
/* border:2px solid blue; */
    /* Add box-shadow for hover effect */
    &:hover {
      box-shadow: "2px 2px 2px 2px #bb5a7d";
      box-shadow: ${(props) => (props.checked ? "0px 0px 3px 3px #bb5a7d" : "2px 2px 2px 2px #bb5a7d")};
      -webkit-box-shadow:"0px 0px 3px 3px #bb5a7d";
    }
    transform: translateX(${(props) => (props.checked ? "27px" : "0px")});
  }
  &:before {
    /* Add a shadow to the slider when the label is hovered */

    position: absolute;
    content: "${(props) => (props.checked ? "" : "")}";
  
    height: 20px;
    width: 18px;
    left: ${(props) => (props.checked ? "2px" : "2px")};
    bottom: 3px;
    top:2px;
    background-color: ${(props) => (props.checked ? " white" : " white")};
    transition: 0.2s;
    border-radius:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: ${(props) => (props.checked ? "white" : "black")};

  }

  &:after {
    position: absolute;
    content: "${(props) => (props.checked ? "🌜" : "🌞")}";
    color: ${(props) => (props.isDarkMode ? "white" : "black")};
    font-size: 16px;
    left: ${(props) => (props.checked ? "1px" : "23px")};
    bottom: 2px;
   
  }

  &.active {
    background-color: #4d4d4d;  
  }
   /* Add styles for checked state */
  
  

`
const LoginLink = styled.a`
  cursor: pointer;
/* border:2px solid orange; */
  // Add any additional styling for the login link here if needed
`;

const DropdownMenuWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: -60px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  /* border: 2px solid green; */
  margin-top:20px;
  border-radius: 4px;
  /* padding: 8px; */
  z-index: 1; /* Ensure the dropdown menu appears above other elements */
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
`;

const DropdownItem = styled.div`
  cursor: pointer;
  font-size: 16px;
  /* margin-top:16px; */
/* border:2px solid red; */
  padding: 6px 12px;
  /* color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")}; */
  /* transition: background-color 0.2s; */

  &:hover {
    background-color: #f0f0f0;
    color: #BB5A7D;
  }
`;
const NavmenuLeft=styled.div`  display:flex;
flex-direction:row;
width:85%;
height:60px; 
/* border:2px solid green; */
margin-left:10px;
`
const RightNav=styled.div`
 display:flex;

  flex-direction:row;
  list-style: none; 
text-align:center ;
cursor: pointer;
margin-left:1px;
/* border:2px solid purple; */
margin-left:85px;
/* align-items: center; */
    /* flex: 1;
width:5%;
/* a{
margin-right:12px;
margin-left:300px;

} */
@media screen and (min-width: 1500px) {
 margin-left:170px;
  }

`





