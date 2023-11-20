import React ,{useContext,useEffect}from "react";
import styled from "@emotion/styled";
import april32023Image from "../2022-09-21-past/april32023.jpg";
import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import {Grid} from "@mui/material";

const Trainee_Talks_Webinar_April3rd=()=>{
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
    
  >     <Grid item xs={12} md={12} lg={12} xl={12}>

            <Main>
            <Subtitle isDarkMode={isDarkMode}
        >
              Trainee Talks Webinar - April 3rd, 2023​
   
        </Subtitle>
        <Img src={april32023Image} alt=" april32023.jpg" />
                <Details isDarkMode={isDarkMode}>
          The Spring Trainee Talks webinar was a huge success and we were
          pleased to have 27 participants join!
        </Details>
        <Details2 isDarkMode={isDarkMode}>
          In this webinar, 2 PhD students from Polytechnique Montréal under
          Prof. Foutse Khomh delivered their research topics. Vahid Majdinasab
          spoke on his topic of Mutation Testing of Deep Reinforcement Learning
          Based on Real Faults, followed by Forough Majidi, who shared her
          Empirical Study on the Usage of Automated Machine Learning Tools. A 10
          min Q&A session followed after each presentation.
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
export default Trainee_Talks_Webinar_April3rd;


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

  }
`;





const Img = styled.img`
width:100%;
text-align:center;
 max-width: 750px; 
 height:400px;
  /* height: 200px; */
  padding-top: 20px;
  padding-bottom:20px;
  @media screen and (max-width: 700px){height:200px;}
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