import React ,{useContext,useEffect}from "react";
import styled from "styled-components";
import olivierImage from "../2022-09-21-past/olivier.jpg"
import {Grid} from "@mui/material";

import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const Guest_Speaker_Webinar_April12=()=>{
    const { isDarkMode } = useContext(DarkModeContext);
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
    return(
        <Container isDarkMode={isDarkMode}>           <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flex: 1, padding: "15px" }}
        
      >     <Grid item xs={12} md={12} lg={12} xl={12}>
            <Main>
            <Subtitle  isDarkMode={isDarkMode}
        >
              Guest Speaker Webinar - April 12, 2022​
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          CREATE SE4AI trainees, profs and partners enjoyed a webinar presented
          by Olivier Blais, co-founder and VP of Decision Science at Moov AI in
          Montréal. Olivier spoke about "Delivering High Quality Machine
          Learning Models" including:
        </Details>
        <Group2 isDarkMode={isDarkMode}>
          <Ol isDarkMode={isDarkMode}>
            <Li isDarkMode={isDarkMode}>
              What it means to develop high quality artificial intelligence
            </Li>
            <Li isDarkMode={isDarkMode}>
              A better approach to ML model evaluation
            </Li>
            <Li isDarkMode={isDarkMode}>
              Existing and future certifications for AI systems
            </Li>
            <Details isDarkMode={isDarkMode} style={{ display: 'flex', width:'100%' }}>
  <Span>Bio:</Span>
  <a href="https://moov.ai/en/olivier-blais" >
    https://moov.ai/en/olivier-blais/
  </a>
</Details>

          </Ol>
          <Img4 src={olivierImage} alt="olivier.jpg" />
        </Group2>{" "}
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>{" "}
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

export default Guest_Speaker_Webinar_April12;


const Container = styled.div`
   display: flex;
   flex-direction: column;
  font-family: "Open Sans", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;
    margin-left:350px;
/* text-align:center;
align-items:center; */
  width: 100%;  
  @media screen and (max-width: 480px) {margin-left:-3px;
  /* border:2px solid green; */
  max-width:387px;}
  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(27% - 150px); 
    /* margin-bottom:calc(13% - 150px); */

  }`;

const Group2 = styled.div`
  display: flex;
  flex-direction:row;
  /* flex-direction: row; */
  margin-right: 5px;
  padding-top: 10px;

  Li {
    color: ${(props) => (props.isDarkMode ? "white" : "black")};
    font-size: 15px;
    margin-bottom: 20px;
    max-width: 400px;  
    @media screen and (max-width: 480px) { max-width: 120px;  
    }

  }
`;

const Img4 = styled.img`
  max-width: 200px;
  height: 180px;
  margin-left:120px;
  @media screen and (max-width: 480px) {   margin-left:-80px;
  
  }`;
const ImgContainer = styled.div`
  position: relative;
  margin: 2px;
  margin-bottom: 5px;
  /* border:2px solid green; */
`;
const Ol = styled.ol`
  list-style-type: decimal;
  padding-top: 5px;
  font-size: 15px;
  /* line-height: 1.8em; */
  max-width: 600px;
  /* margin-left: 5px; */
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;
const Li = styled.li`
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  font-size: 15px;
  margin-bottom: 20px;
  max-width: 580px;
`;
const Details = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
width:100%; 
max-width: 740px;
  line-height: 1.7em;
  font-size: 16px;  
padding-top:20px;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

  a {  

    color: #bb5a7d;
    text-decoration: none; 
   

  }

  a:hover {
    text-decoration: underline;
  }
`
const YoutubeChannel = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* line-height: 2em; */
margin-top:15px;
  a {
    color: #bb5a7d;
    text-decoration: none;

  }
  a:hover {
    text-decoration: underline;
  }
`;
const Span = styled.span`
  margin-right: 2px;
  margin-left: -1px;
  padding-left: 0;
  margin-top:5px;
  `;

const Main =styled.div`
margin-left:0px;`
const Button = styled.button`
display: flex;
flex-wrap: wrap;
max-width: 370px;
/* width:100%; */
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
const Icon = styled.div`
  padding-top: 3px;

  color: #bb5a7d;
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

const HoverImg3 = styled(Img3)`
  position: absolute;
  top: 10;
  left: -10;
  z-index: 2;
  transform: scale(2);
  opacity: 0;
`;

