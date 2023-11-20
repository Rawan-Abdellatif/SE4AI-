import React ,{useContext,useEffect}from "react";
import styled from "styled-components";
import sumon_biswasImage from "../2022-09-21-past/sumon_biswas.jpg";
import {Grid} from "@mui/material";

import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const Guest_Speaker_Webinar_February3=()=>{
    const { isDarkMode } = useContext(DarkModeContext);
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
    return(
        <Container > <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flex: 1, padding: "15px" }}
        
      >     <Grid item xs={12} md={12} lg={12} xl={12}>
            <Main isDarkMode={isDarkMode}>
            <Subtitle  isDarkMode={isDarkMode}
        >
              Guest Speaker Webinar - February 3, 2022​
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          CREATE SE4AI hosted a webinar by Sumon Biswas, PhD Candidate at Iowa
          State University on "Understanding and Reasoning Fairness of Machine
          Learning Pipeline".
        </Details2>
        <Details2>
          <Bold isDarkMode={isDarkMode}>Link to presentation: </Bold>
        
          <a href="https://www.youtube.com/channel/UCjCS6a_K301Ocg9z5Qd1GWA/videos">
             https://www.youtube.com/channel/UCjCS6a_K301Ocg9z5Qd1GWA/videos
          </a>
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          <Bold isDarkMode={isDarkMode}>About the Speaker</Bold>
        </Details2>
        <Group3>
          {" "}
          <Details3 isDarkMode={isDarkMode}><Img5 src={sumon_biswasImage} alt="sumon_biswas.jpg" />
            Sumon Biswas is a Computer Science Ph.D. candidate at Iowa State
            University (ISU) and a Research Assistant in Laboratory for Software
            Design at ISU under the supervision of Professor Hridesh Rajan. His
            research interests are in the intersection of Software Engineering,
            Programming Languages, and Artificial Intelligence. He has worked on
            Machine Learning (ML) software repository mining and analysis in
            large-scale using the Boa framework. He worked on building Python
            language support for Boa to analyze ML programs and Jupyter
            Notebooks. Currently, he is working in the D4 (Dependable
            Data-Driven Discovery) initiative at ISU towards increasing the
            dependability of data-driven software. Specifically, he is
            conducting research on understanding the societal bias in ML models
            and reasoning about fairness property and its mitigation in ML
            pipelines. His research results appeared in reputed software
            engineering venues including ICSE and ESEC/FSE.
          </Details3>{" "}
          
        </Group3>
        <Details2>
          <Bold isDarkMode={isDarkMode}>Homepage:</Bold>

          <a href="https://sumonbis.github.io/">https://sumonbis.github.io</a>
        </Details2>
        <Button isDarkMode={isDarkMode}>
     
         <div>  <a href="/blog">
       
            <Icon>
              <MdKeyboardDoubleArrowLeft />
            </Icon>
           <div> Past Events</div>
          </a></div>
        
        </Button>{" "}
        </Main></Grid>
      </Grid>
        </Container>
    )

} 

export default Guest_Speaker_Webinar_February3;

const Container = styled.div`
   display: flex;
   flex-direction: column;
  font-family: "Open Sans", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;
    margin-left:350px;

  width: 100%;  
  @media screen and (max-width: 480px) {margin-left:-3px;
  /* border:2px solid green; */
  max-width:387px;}
  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(27% - 150px); 
    /* margin-bottom:calc(13% - 150px); */

  }`;
const Main =styled.div`
margin-left:0px;
max-width:750px;`
const Button = styled.button`
display: flex;
flex-wrap: wrap;
max-width: 370px;
border:2px solid orange;
height: 70px;
background-color: inherit;
margin-bottom: 35px;
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
  margin-top:7px;
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
const Subtitle = styled.div`
display: flex;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

  flex-wrap: wrap;
  margin-top: 55px;
width:100%;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; `
  const Img3 = styled.img`
  width: 200px;
  height: 160px;
  padding-left: 2px;
  padding-top: 4px;
  transition: transform 0.3s;
  z-index: 0;
`;
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
  margin-top: 20px;
  margin-bottom:20px;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";



  a {
    width:100%;
    color: #bb5a7d;
    text-decoration: none;
    margin-left:5px
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
const Details3 = styled.div`
  color: ${(props) => (props.isDarkMode ? 'white' : '#484848')};
  flex: 1;
  width: calc(100% - 220px); /* Adjust width to leave space for the image */
  line-height: 1.7em;
  font-size: 16px;
  margin-top: 0;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";


`;
const Group3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Align items to the top of the container */

  margin: 10px; /* Adjust margin for spacing around the group */

`;
const Img5 = styled.img`
  /* width: 200px; */
  height: 180px;
  margin: 10px; /* Adjust margin for spacing around the image */
  float: right;

 
`;