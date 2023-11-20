import React ,{useContext,useEffect}from "react";
import styled from "styled-components";
import retreat_groupImage from "../2022-09-21-past/retreat_group.jpg";
import brainstormImage from "../2022-09-21-past/brainstorm.jpg";
import group1Image from "../2022-09-21-past/group1.jpg";
import group2Image from "../2022-09-21-past/group2.jpg";
import group3Image from "../2022-09-21-past/group3.jpg";
import group4Image from "../2022-09-21-past/group4.jpg";
import {Grid} from "@mui/material";

import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const CREATE_SE4AI_Retreat_June3=()=>{
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
              CREATE SE4AI Retreat - June 3, 2022​
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          Our 1st annual CREATE SE4AI Program Retreat is a wrap! It was an
          inspiring day of celebrating our collective accomplishments and
          exchanging ideas amongst an amazing team of students, professors and
          industry partners, live and in person at the Chateau Vaudreuil. The
          future is so bright for this group of talented trainees, they’re gonna
          need shades…
        </Details2>
        <Group>
          <HoverContainer>
            <Img3 src={retreat_groupImage} alt="retreat_group.jpg" />
            <HoverImg3 src={retreat_groupImage} alt="retreat_group.jpg" />
          </HoverContainer>
          <HoverContainer>
            <Img3 src={brainstormImage} alt=" brainstorm.jpg" />
            <HoverImg3 src={brainstormImage} alt=" brainstorm.jpg" />
          </HoverContainer>
          <HoverContainer>
            <Img3 src={group1Image} alt="  group1.jpg" />
            <HoverImg3 src={group1Image} alt="  group1.jpg" />
          </HoverContainer>

          <HoverContainer>
            <Img3 src={group2Image} alt="  group2.jpg" />
            <HoverImg3 src={group2Image} alt="  group2.jpg" />
          </HoverContainer>

          <HoverContainer>
            <Img3 src={group3Image} alt="  group3.jpg" />
            <HoverImg3 src={group3Image} alt="  group3.jpg" />
          </HoverContainer>

          <HoverContainer>
            <Img3 src={group4Image} alt="  group4.jpg" />
            <HoverImg3 src={group4Image} alt="  group4.jpg" />
          </HoverContainer>
        </Group>
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

export default CREATE_SE4AI_Retreat_June3;


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
const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:800px; 
   @media screen and (max-width: 480px) {width:100%;
   }
`;
const ImgContainer = styled.div`
  position: relative;
  margin: 2px;
  margin-bottom: 5px;
 
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

const HoverContainer = styled(ImgContainer)`
  &:hover ${HoverImg3} {
    opacity: 1;
  }
`;