import React ,{useContext,useEffect}from "react";
import styled from "@emotion/styled";
import wie1Image from "../2022-09-21-past/wie1.jpg";
import wie2Image from "../2022-09-21-past/wie2.jpg";
import wie3Image from "../2022-09-21-past/wie3.jpg";

import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import {Grid} from "@mui/material";

const Women_in_Engineering=()=>{
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
            <Subtitle  isDarkMode={isDarkMode}
        >
Women in Engineering (WIE) - March 18, 2023​
   
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          On March 18th , CREATE SE4AI took part in WIE Inspire WIE Empower, an
          annual event hosted by the
          <a href="https://www.womeninengineeringconcordia.com/ ">
            {" "}
            Women in Engineering (WIE)
          </a>{" "}
          student association at the
          <a href="https://www.concordia.ca/ginacody.html">
            {" "}
            Gina Cody School of Engineering and Computer Science at Concordia
            University.
          </a>{" "}
          Through their various outreach and mentorship activities, WIE
          encourages young women to explore engineering and computer science as
          career options.
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          This year, WIE welcomed over 80 high school girls aged 12-17 to
          Concordia for an exciting day of inspiration and exploration. After a
          welcome address by Dr. Gina Cody, students participated in 4 hands-on,
          industry-led workshops. CREATE SE4AI trainees and Master’s students
          <Bold isDarkMode={isDarkMode}> Divya Kamath</Bold> (Queen’s
          University),
          <Bold isDarkMode={isDarkMode}> Lorena Barreto </Bold>(Concordia
          University) and <Bold isDarkMode={isDarkMode}>Khaled Badran </Bold>
          (Concordia University), along with Program Coordinator{" "}
          <Bold isDarkMode={isDarkMode}>Lori Akiyama </Bold> developed and delivered a fun, interactive
          workshop on AI and Chatbots to 4 groups of students. The goals of the
          workshop were to:
        </Details2>
        <Ol isDarkMode={isDarkMode}>
          <Li isDarkMode={isDarkMode}>
            Introduce the basic concepts of AI and chatbots to the students
          </Li>
          <Li isDarkMode={isDarkMode}>
            Encourage the students to develop confidence interacting with
            technology
          </Li>
          <Li isDarkMode={isDarkMode}>
            Stimulate a discussion of ethics of AI in society through a group
            reflection exercise
          </Li>
        </Ol>
        <Details2 isDarkMode={isDarkMode}>
          At the end of the workshop, the students shared their experiences
          interacting with chatbots and reflected on the importance of creating
          responsible and ethical AI.
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          CREATE was proud to contribute to this important initiative, and we
          look forward to more opportunities to engage with youth and inspire
          them to learn more about software engineering and AI in the future.
        </Details2>
        <Image>
          <Img2 src={wie1Image} alt="wie1Image" />
          <Img2 src={wie2Image} alt="wie2Image" />
          <Img2 src={wie3Image} alt="wie3Image" />
        </Image>
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
export default Women_in_Engineering;


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
  max-width:380px;}
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
const Img2 = styled.img`
  width: 240px;
  /* height: 350px; */
  margin-left: 4px;
  margin-top: 10px;
`;
const Image = styled.div`
flex-wrap: wrap;
width:100%;

 max-width: 740px;  

`;