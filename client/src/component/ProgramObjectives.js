import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import ProgramSidebar from "./ProgramSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import {Grid} from "@mui/material"

const ProgramObjectives = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>


      <ProgramSidebar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flex: 1, padding: "20px" }}
      >
        <Grid item xs={10} md={6} lg={6} xl={12}>
      <MainContent>
      

        <Title isDarkMode={isDarkMode}>Program Objectives</Title>
        <Details isDarkMode={isDarkMode}>
          The objective of the SE4AI CREATE program is to fill the major
          shortage in HQP that can develop, deploy and service AI-based software
          systems and equally provide the HQP with a solid background on ethical
          and social understanding of AI. Our program is driven by six key
          training objectives:
        </Details>
        <Ul isDarkMode={isDarkMode}>
          <Li isDarkMode={isDarkMode}>
            Prepare trainees that are knowledgeable in both technical and social
            aspects needed to develop, deploy and service AI-based software
            systems.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Provide trainees with real-life experiences where they can be
            exposed to challenges and best practices involving the development
            of AI-based software systems.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Bridge the gap between practice and academia by offering trainees
            opportunities to interact closely with practitioners and
            non-technical disciplines in order to train them on effective
            methods to communicate impactful and sustainable academic
            innovations.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Provide trainees with opportunities to develop highly sought-after
            professional skills such as communication, collaboration,
            leadership, entrepreneurship, and mentorship.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Expose trainees to the latest research (both technical and social
            aspects) in the development, deployment, and servicing of AI-based
            software systems and ensure that, by completing world-class research
            projects and theses, they will be prepared to play leadership roles
            in shaping the future of this very important area.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Enable trainees to customize their training program to better suit
            their needs and aspirations.
          </Li>
        </Ul>
        {/* <Button isDarkMode={isDarkMode}> */}
          <Button1 isDarkMode={isDarkMode}>
          <div style={{ width: '50px', marginLeft: '0px' }}>   Previous</div>

            <a href="/intro">
              {" "}
             <div>
              <span><MdKeyboardDoubleArrowLeft style={{paddingTop:'10px',fontSize:'15px' }}/></span>
                
            
              Program Overview
              </div> </a>
          </Button1>{" "}
          <Button2 isDarkMode={isDarkMode}>
          <div style={{ width: '20px', marginRight: '170px' }}>Next</div>

     
            <a href="/training-program/components">
             <div>Program Components
           <span>             <MdKeyboardDoubleArrowRight style={{paddingTop:'10px',fontSize:'15px' }} />
</span>
              
              </div>  </a>
          </Button2>
        {/* </Button> */}
      
      </MainContent>
      </Grid>
      </Grid>
    </Container>
  );
};
export default ProgramObjectives;
// This part for css part
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  /* border:4px solid orange;  */
  width:100%;
`;

const MainContent = styled.div`
  /* border-left: ${props => window.innerWidth <= 1000 ? "none" : "1px solid #e8e8e8"}; */
  /* margin:-20px auto; */
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  display:flex;
  flex-wrap:wrap;
max-width: 1000px; /* Adjust the maximum width as needed */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
/* border:2px solid orange; */
margin:17px -5px;
width:100%;
@media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(20% - 120px); 
    margin-top: calc(10% - 250px);
  }
  @media screen and (max-width: 480px) {
    margin-left: -30px; 
    width:350px;
  }
`;



const Title = styled.h1`
  font-weight: bold;
  font-size: 47px;
margin-top:-20px;
/* padding-top:-25px; */
  color: ${(props) => (props.isDarkMode ? "white" : "black")};  
/* border:2px solid green; */
`;
const Details = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
max-width:880px;
  line-height: 1.7em;
  font-size: 16px; 
  margin-top:-10px; 
  width:100%;

`;
const Ul = styled.ul`
  list-style-type: disc;
  padding-top: 20px;
  font-size: 16px;
  line-height: 1.5em;
  width:820px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};   
margin-top:-5px;
margin-left:-5px;
/* border:2px solid red; */
margin-bottom:45px;
`;
const Li = styled.li`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  font-size: 15px;
  margin-bottom: 10px;
`;
const Button2 = styled.button`
/* width:100%; */
 width: 400px; /* Adjust the maximum width as needed */
  height: 70px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  background-color: inherit;
  margin-bottom: 30px;
  /* padding-right:2px; */
  margin-left: 40px; 
  border-radius: 5px;
  padding-left: 100px; /* Reset padding */
  /* padding-right: 150px; */
  padding-top: -2px;
  font-size: 15px;
  /* line-height: 1.7em; */
  border: 1px solid #606770;
  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  div{
    margin-left:250px;
padding-left:0px;    width:200px;
/* border:2px solid yellow; */
  }

  a {
    /* border:2px solid orange; */
margin-left:-160px;
margin-top:-2px; 
   display: flex;
    flex-direction: row;
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
    /* margin-right:-20px; */
    /* padding-right:0; */
 }
 @media screen and (max-width: 480px) {
    max-width: 160px;  
     height: 90px;  

     /* border:2px solid green; */
    div{     margin-left:-30px; 
      padding-top:7px;
display:flex;
flex-wrap:wrap;
 }

    a {     
      display:flex;
flex-wrap:wrap;  
font-size:15px; 
margin-left:-15px; 
display:flex;     }}
        
`;

const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
const Button1 = styled.button`
   width:400px; /* Adjust the maximum width as needed */
  height: 70px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  background-color: inherit;
  margin-bottom: 30px;
  /* padding-right:2px; */
  margin-right: auto; 
  border-radius: 5px;
  padding-right: 100px; /* Reset padding */
  /* padding-right: 150px; */
  padding-top: -2px;
  font-size: 15px;
  /* line-height: 1.7em; */
  border: 1px solid #606770;
  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  div{
    margin-left:-30px;
padding-right:0px;   
 width:250px;
    /* border:2px solid yellow; */
  }

  a {
    margin-left:-15px;
    /* padding-right:20px; */
    /* border:3px solid blue; */
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
    /* margin-right:-20px; */
    /* padding-right:0; */
 }
 @media screen and (max-width: 480px) {
    max-width: 150px;  
     height: 90px;
    div{
      margin-left:15px;    font-size: 15px;

    }
    a {      

         }}
`;


const Button = styled.div`
  display: flex;
  flex-direction: row; 
  /* padding-left: 2px; */   
`;
