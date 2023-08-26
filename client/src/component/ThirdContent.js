import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { Grid } from "@mui/material";
import styled from "styled-components";
import Concordia from "./png/Concordia.png";
import PolyMtl from "./png/PolyMTL.png";
import Queens from "./png/Queens.png";
import Alberta from "./png/Alberta.png";
import NBC from "./png/NBC.png";
import Airudi from "./png/Airudi.png";
import Cisco from "./png/Cisco.png";
import Ericsson from "./png/Ericsson.png";
import GIRO from "./png/GIRO.png";
import Graz from "./png/Graz.png";
import IBM from "./png/IBM.png";
import NSER from "./png/NSERC_RGB.png";
import OBVIA from "./png/OBVIA.png";
import Radio from "./png/Radio-Canada.png";
import TD from "./png/TD.png";
import Vercel from "./png/Vercel.png";
import MAIEI from "./png/MAIEI.png";
import IVADO from "./png/IVADO.png";
const ThirdContent = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>
      <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1, padding: "20px" }}
    
  >     

    <Grid item xs={12} md={12} lg={12} xl={12}>
      
<Main>
<Grid item xs={12} md={12} lg={12} xl={12}>

  <Text   isDarkMode={isDarkMode}>
        In Collaboration with World-renowned <RedText>Researchers</RedText> and
        <RedText>Technology Leaders</RedText>
      </Text>   </Grid> 
      <ImgContainer >
        <Link href="https://www.concordia.ca/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Concordia} alt={Concordia} />{" "}
        </Link>
        </ImgContainer >


      <ImgContainer >
        <Link href="https://www.polymtl.ca/en/" target="_blank">
          <Img  isDarkMode={isDarkMode}  src={PolyMtl} alt={PolyMtl} />{" "}
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link href="https://www.queensu.ca/" target="_blank">
          <Img   isDarkMode={isDarkMode} src={Queens} alt={Queens} />
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link href="https://www.ualberta.ca/index.html" target="_blank">
          <Img src={Alberta}  isDarkMode={isDarkMode} alt={Alberta} />
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link href="https://www.nbc.ca/" target="_blank">
          <Img  isDarkMode={isDarkMode}  src={NBC} alt={NBC} />
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link href="https://www.ibm.com/ca-en" target="_blank">
          <Img src={IBM} alt={IBM}  isDarkMode={isDarkMode} />
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link href="https://www.cisco.com/" target="_blank">
          <Img   isDarkMode={isDarkMode} src={Cisco} alt={Cisco} />
        </Link>
        </ImgContainer >
      
      <ImgContainer >
        <Link href="https://www.td.com/ca/en/personal-banking" target="_blank">
          <Img   isDarkMode={isDarkMode} src={TD} alt={TD} />
        </Link>
        </ImgContainer >

        <ImgContainer >
        <Link href="https://www.ericsson.com/en" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Ericsson} alt={Ericsson} />
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link href="https://airudi.com/en/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Airudi} alt={Airudi} />
        </Link>
        </ImgContainer >

        <ImgContainer2  isDarkMode={isDarkMode}>
        <Link href="https://www.giro.ca/en-ca/" target="_blank">
          <img  isDarkMode={isDarkMode} src={GIRO} alt={GIRO} />
        </Link>
        </ImgContainer2 >

        <ImgContainer >
        <Link href="https://cbc.radio-canada.ca/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Radio} alt={Radio} />
        </Link>
        </ImgContainer >

        <ImgContainer >
        <Link
          href="https://www.nserc-crsng.gc.ca/index_eng.asp"
          target="_blank"
        >     
  
          <Img  isDarkMode={isDarkMode}  src={NSER} alt={NSER} />
        </Link>
        </ImgContainer >

        <ImgContainer >
        <Link href="https://ivado.ca/en/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={IVADO} alt={IVADO} />
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link href="https://observatoire-ia.ulaval.ca/en/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={OBVIA} alt={OBVIA} />
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link href="https://montrealethics.ai/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={MAIEI} alt={MAIEI} />
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link href="https://www.uni-graz.at/en/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Graz} alt={Graz} />
        </Link>
        </ImgContainer >

      <ImgContainer >
        <Link
          href="https://vercel.com/?utm_source=se4ai&utm_campaign=oss"
          target="_blank">
<Img  isDarkMode={isDarkMode} src={Vercel} alt={Vercel} />
        </Link>
      </ImgContainer>
</Main>
</Grid></Grid>
    </Container>
  );
};
export default ThirdContent;

const Container = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#282828" : " #F0F0F0")};
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;

  width: 100%;
`

const Text = styled.div`
  padding-top: 30px;
  display: inline-block;
    font-size: 2rem;
    margin-bottom: 3rem;
    max-width: 900px;
    width:100%;
  font-weight:900;
  color: ${(props) => (props.isDarkMode ? "white": "#484848")};



`;
const RedText = styled.span`
  color: #BB5A7D;
`;
const ImgContainer = styled.div`
height: 90px;
max-width:550px;
 /* width:100%; */
 align-items: center;
margin-top:20; 
/* padding-left:10px; */
/* margin-left:5px; */
padding-right:50px;
padding-top:0px;
padding-bottom:20px;
/* border:4px solid orange; */
  line-height:1.5;
  /* text-align: center; */
border-radius:5px;
color: ${(props) => (props.isDarkMode ? "black" : "#f7f7f7")}; 
`;

const Img = styled.img`
    height: 50px;
    width: 140px;
    padding:20px 100px;
    background-color: ${(props) => (props.isDarkMode ?  "	#BEBEBE":"inharit" )};
    border-radius:10px;

`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  `;

const Main=styled.div`   
 display: flex;
/* flex-direction: row; */
flex-wrap: wrap;
/* width:100% ; */
max-width:1600px;
/* border:4px solid red; */
  margin: 0 auto;
  padding-top: -40px;
  /* padding-left:100px; */
  /* text-align:center; */

`

//// This part for Giro Partner
const ImgContainer2=styled.div`  /* background-color: #db7093; */
height: 90px;
 width:240px;
  /* width:100%; */
 align-items: center;
margin-top:20; 
/* margin-right:2px; */
/* margin-left:5px; */
/* padding-left:10px; */
padding-right:150px;
padding-top:0px;
margin-bottom:20px;
/* border:4px solid blue; */
  line-height:1.5;
border-radius:5px;
color: ${(props) => (props.isDarkMode ? "black" : "#f7f7f7")}; 
img{

    height: 55px;
    width: 50px;
    padding:20px  145px;
    background-color: ${(props) => (props.isDarkMode ?  "	#BEBEBE":"inharit" )};
    border-radius:10px;
/* border:3px solid purple; */
}

`;
