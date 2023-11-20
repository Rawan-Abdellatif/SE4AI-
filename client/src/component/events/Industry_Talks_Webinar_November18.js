import React ,{useContext,useEffect}from "react";
import styled from "@emotion/styled";
import telecom2Image from "../2022-09-21-past/telecom2.jpg";
import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import {Grid} from "@mui/material";

const Industry_Talks_Webinar_November18=()=>{
    const { isDarkMode } = useContext(DarkModeContext);
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);

    return(
        <Container isDarkMode={isDarkMode}>
           
            <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1, padding: "15px" }}
    
  >     <Grid item xs={12} md={12} lg={12} xl={12}> <Main>
            <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="industry-talks-webinar---november-18-2022"
        >
          Industry Talks Webinar - November 18, 2022{" "}
          <a href="#industry-talks-webinar---november-18-2022"/>
          <Img src={telecom2Image} alt=" telecom2.jpg" />
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          CREATE SE4AI is pleased to present{" "}
          <Bold isDarkMode={isDarkMode}>AI Adoption in Telecom Networks</Bold>{" "}
          as part of our Industry Talks webinar series.
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          Did you know that revenue generated from AI automation in telecom
          networks is expected to reach USD 200 billion by 2027? What are some
          of the current challenges Ericsson, a global leader in ICT solutions
          faces as they adopt new technologies in AI and ML in their products
          and services, and how are they overcoming them?
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          In his presentation, Karthikeyan Premkumar, Data Scientist at Ericsson
          used case studies to highlight several touchpoints involving the ML
          model development process, tools, data quality, ML Ops (monitoring and
          retraining) and deployment as part of model industrialization.
        </Details2>
        <Bold2 isDarkMode={isDarkMode}>About the Speaker</Bold2>
        <Details isDarkMode={isDarkMode}>
          Karthik Premkumar has 18 years of experience in the telecom industry.
          His expertise lies in industrializing AI/ML solutions, designing
          system and solution architectures in BSS, Cloud and infrastructure
          platforms for telecom networks.
        </Details>
        <Details2 isDarkMode={isDarkMode}>
          In his current role as Data Scientist at Ericsson in Montreal, QC,
          Karthik Premkumar designs knowledge models and machine reasoning
          technologies for cognitive networks. He has published over 10 patents
          and papers on telecom analytics.
        </Details2>
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>
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
export default Industry_Talks_Webinar_November18;


const Container = styled.div`
   display: flex;
   flex-direction: column;
  font-family: "Open Sans", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    /* height:100%; */
    /* margin-left:350px; */
/* text-align:center; */
align-items:center;
  width: 100%;  
  @media screen and (max-width: 480px) {margin-left:-3px;
  /* border:2px solid green; */
  max-width:387px;}
  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(27% - 150px); 
    /* margin-bottom:calc(13% - 150px); */

  }`;





const Img = styled.img`
width:100%;
text-align:center;
 max-width: 750px; 
 height:400px;
margin-left:-670px;
  padding-top: 50px;
  padding-bottom:20px;
  @media screen and (max-width: 480px) 
{
  margin-left:0px;
  height:200px;}
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
const Bold2 = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* line-height: 2em; */
  margin-bottom: -15px;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";


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


const YoutubeChannel = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
margin-top:15px;
/* border:2px solid green; */

/* max-width:900px; */
  a {
    margin-left:6px;
    /* width:105%; */
/* width:100%; */
    color: #bb5a7d;
    text-decoration: none;
  line-height: 2em;
    /* @media screen and (max-width: 500px){margin-top:30px;} */
}

 
  a:hover {
    text-decoration: underline;
  }
`;
const Main =styled.div`
margin-left:0px;
/* text-align:center; */
/* border:2px solid orange; */
`
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
/* margin-left:-2px; */
  flex-wrap: wrap;
  margin-top: 55px;
width:100%;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; `