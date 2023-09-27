import React, { useContext,useEffect,useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import traineeSeptemberImage from "../component/upcoming/traineeSeptember.jpg"
import UpcomingRightSidebar from "./UpcomingRightSidebar";
const UpcomingEvents = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [activeLink, setActiveLink] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      const subtitles = document.querySelectorAll(".subtitle");
  
      subtitles.forEach((subtitle) => {
        const rect = subtitle.getBoundingClientRect();
        const linkId = subtitle.getAttribute("id");
    
        console.log("Subtitle ID:", linkId);
        console.log("Subtitle Rect Top:", rect.top);
    
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveLink(linkId);
          console.log("Updated activeLink:", linkId);
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll once on mount to initialize the active link
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleLinkClick = (id) => {
    setActiveLink(id);
    console.log ("setActineLink in PastEvent ",setActiveLink)
  };
  return (
    <Container>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
     
      {/* <Grid
    container
    justifyContent="center"
    alignItems="center"
    // style={{ flex: 1, padding: "20px" }}
    
  >      */}

    {/* <Grid item xs={12} md={12} lg={12} xl={12}> */}
      <MainContent isDarkMode={isDarkMode}>
      {/* <Grid item xs={12} md={12} lg={12} xl={12}> */}



        <Title isDarkMode={isDarkMode}>Upcoming Events</Title>     
        {/* </Grid> */}
       
        {/* <Subtitle
          isDarkMode={isDarkMode}
          id="Trainee Talks Webinar - September 25, 2023​
          "
          className="subtitle"
        >
Trainee Talks Webinar - September 25, 2023​
          <a href="#Trainee Talks Webinar - September 25, 2023​
"> #</a>
          <Img src={traineeSeptemberImage} alt=" traineeSeptemberImage" />
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
        Join us for the first Trainee Talks webinar 
        of the academic year. Trainee Talks is a monthly webinar 
        series featuring CREATE SE4AI trainees sharing their individual
         research topics in software engineering 
        and AI with fellow program students
        and our program's industry partners.</Details>
        <Details isDarkMode={isDarkMode}>On <Bold isDarkMode={isDarkMode}> Monday, September 25th at 11:30AM EDT</Bold> we will feature
         Divya Kamath, Master's candidate from Queen's. 
         Divya recently completed a successful thesis defense 
         and will be sharing with us her research on 
         "Pragmatic Approaches to Schedule Less Builds 
         in Continuous Integration". Immediately following,
          University of Alberta 3rd year PhD student Mohayeminul 
          Islam will
         speak on the topic of "Characterizing Python Library Migrations".</Details>
<Details isDarkMode={isDarkMode}>Each trainee will talk for 20 minutes, followed by a 10 minute Q&A session.

</Details>
<Details isDarkMode={isDarkMode}>For more information and to register, go to our 
  <Bold isDarkMode={isDarkMode}> Eventbrite</Bold> link:</Details>
  <Details2 isDarkMode={isDarkMode}>
  <a href="https://www.eventbrite.ca/e/continuous-integration-and-characterizing-python-library-migrations-tickets-709463914667?aff=oddtdtcreator" target="_blank">https://www.eventbrite.ca/e/continuous-integration-and-characterizing-python-library-migrations-tickets-709463914667?aff=oddtdtcreator</a>  
        
  </Details2>
  <Details2 isDarkMode={isDarkMode}><Bold isDarkMode={isDarkMode}>Join the webinar via Zoom: </Bold> <a href="https://concordia-ca.zoom.us/j/87363841329?pwd=a3hnOVRLc0lJZUJkR3J1aWxmR1FLdz09" target="_blank">https://concordia-ca.zoom.us/j/87363841329?pwd=a3hnOVRLc0lJZUJkR3J1aWxmR1FLdz09</a>  
 </Details2>
 <Details isDarkMode={isDarkMode}><Bold isDarkMode={isDarkMode}>Meeting ID: </Bold>873 6384 1329</Details>
 <Details isDarkMode={isDarkMode}><Bold isDarkMode={isDarkMode}>Passcode: </Bold>576685</Details> */}
        <Button1 isDarkMode={isDarkMode}>
         <div>New Post</div> 
         <div>  <a href="/blog/past">
       
            <Icon>
              <MdKeyboardDoubleArrowLeft />
            </Icon>
           <div> Past Events</div>
          </a></div>
        
        </Button1>{" "}

        </MainContent>
        {/* </Grid></Grid> */}
        {/* <UpcomingRightSidebar
  activeLink={activeLink}
  handleLinkClick={handleLinkClick}
/> */}
    </Container>
  );
};
export default UpcomingEvents;
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  /* margin-bottom: 20px;  */

  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    /* height:100%; */

 `;

const MainContent = styled.div`
  /* flex: 1; */
/* border:2px solid orange; */
  /* padding-top: 10px; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
 max-width: 750px;
height:100%;  
   width: 100%;

margin-top:10px; 
 /* margin: 0 auto; */
  margin-left:55px;
  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(25% - 30px); 
    margin-bottom:calc(13% - 50px);

  }
`;

const Title = styled.h1`
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
margin-bottom:5px;
  font-weight: 750;
  font-size: 47px;
  a {
    color: #bb5a7d;
    text-decoration: none;
  }
  a:hover {
    color: #bb5a7d;
    text-decoration: underline;
  }   

`;
const Button1 = styled.button`
  display: flex;
  flex-wrap: wrap;
  max-width: 370px;
  /* width:100%; */
  height: 70px;
  background-color: inherit;
  /* margin-bottom: 5px; */
  margin-left: 2px;
  padding-right: 200px;
  border-radius: 5px;
  /* padding-left: 270px; */
margin-top: 45px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.7em;
  border: ${(props) => (props.isDarkMode ? "1px solid #606770":"1px solid #dadde1")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  div{
    margin-left:0;
    padding-left:0;
    /* display:flex;
    margin-left:0;
    padding-left:0;    width:100%;
    /* width:400px; */
    /* border:5px solid orange; */
  }
  a {
    display: flex;
    flex-direction: row;
    max-width:400px;
    margin-left:0;
    padding-left:0;
    /* border:5px solid yellow; */
    /* padding-right:200px; */
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
  }
`;
const Icon = styled.div`
  padding-top: 3px;

  color: #bb5a7d;
`;
const SidebarContainer = styled.div`

  height:250px;  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left:-150px; 
    margin-bottom: 20px; 
  }

`;
const Subtitle = styled.div`
display: flex;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

  flex-wrap: wrap;
  margin-top: 55px;
width:100%;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 


  a {
    margin-left:5px;
    color: ${(props) => (props.isDarkMode ? "#181818" : "white")};
    font-weight: bold;
  }
  a:hover {
    color: #bb5a7d;
    text-decoration: underline;
  }

`;
const Img = styled.img`
  width: 738px;
  /* width:100%; */
  height: 370px;
  padding-top: 20px;
  padding-bottom:15px;
`;
const Details = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
width:100%; 
max-width: 740px;
  line-height: 1.7em;
  font-size: 16px;  
padding-top:10px;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

  a {  

    color: #bb5a7d;
    text-decoration: none;  

  }

  a:hover {
    text-decoration: underline;
  }
`
const Bold = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
width:100%;  
padding-top:500px;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
/* a{
  margin-left:15px;
  } */
`;
const Details2 = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  width:100%; 
max-width: 738px;
  line-height: 1.8em;
  font-size: 16px;
  /* margin-top: 20px; */
  margin-bottom:20px;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";



  a {
    width:100%;
    color: #bb5a7d;
    text-decoration: none;
    /* margin-left:5px */
  }
  a:hover {
    text-decoration: underline;
  }
`;