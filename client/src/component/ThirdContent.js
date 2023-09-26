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
        <RedText> Technology Leaders</RedText>
      </Text>    </Grid> 
      
<MainRow>

      <Div>
        
      <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://www.concordia.ca/" target="_blank">
          <ConcordiaImage  isDarkMode={isDarkMode} src={Concordia} alt={Concordia} />{" "}
        </Link>
        </ImgContainer >
        </Div>

        <Div>
      <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://www.polymtl.ca/en/" target="_blank">
          <PolyMtlImage  isDarkMode={isDarkMode}  src={PolyMtl} alt={PolyMtl} />{" "}
        </Link>
        </ImgContainer >
        </Div>


        <Div>
      <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://www.queensu.ca/" target="_blank">
          <QueensImage  isDarkMode={isDarkMode} src={Queens} alt={Queens} />
        </Link>
        </ImgContainer >
        </Div>


        <Div>
      <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://www.ualberta.ca/index.html" target="_blank">
          <AlbertaImage src={Alberta}  isDarkMode={isDarkMode} alt={Alberta} />
        </Link>
        </ImgContainer >
        </Div>


        <Div>
      <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://www.nbc.ca/" target="_blank">
          <NBCImage  isDarkMode={isDarkMode}  src={NBC} alt={NBC} />
        </Link>
        </ImgContainer >
        </Div>


        <Div>
      <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://www.ibm.com/ca-en" target="_blank">
          <IBMImage src={IBM} alt={IBM}  isDarkMode={isDarkMode} />
        </Link>
        </ImgContainer >
        </Div>


        <Div>
      <ImgContainer isDarkMode={isDarkMode} >
        <Link href="https://www.cisco.com/" target="_blank">
          <CiscoImage   isDarkMode={isDarkMode} src={Cisco} alt={Cisco} />
        </Link>
        </ImgContainer >
        </Div>
      

        <Div>
      <ImgContainer isDarkMode={isDarkMode} >
        <Link href="https://www.td.com/ca/en/personal-banking" target="_blank">
          <TDImage   isDarkMode={isDarkMode} src={TD} alt={TD} />
        </Link>
        </ImgContainer >
        </Div>


        <Div>
        <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://www.ericsson.com/en" target="_blank">
          <EricssonImage isDarkMode={isDarkMode} src={Ericsson} alt={Ericsson} />
        </Link>
        </ImgContainer ></Div>


        <Div>
      <ImgContainer isDarkMode={isDarkMode} >
        <Link href="https://airudi.com/en/" target="_blank">
          <AirudiImage  isDarkMode={isDarkMode} src={Airudi} alt={Airudi} />
        </Link>
        </ImgContainer >
        </Div>


        <Div>
        <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://www.giro.ca/en-ca/" target="_blank">
          <GIROImage  isDarkMode={isDarkMode} src={GIRO} alt={GIRO} />
        </Link>
        </ImgContainer></Div>


        <Div>
        <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://cbc.radio-canada.ca/" target="_blank">
          <RadioImage  isDarkMode={isDarkMode} src={Radio} alt={Radio} />
        </Link>
        </ImgContainer >
        </Div>


        <Div>
        <ImgContainer isDarkMode={isDarkMode}>
        <Link
          href="https://www.nserc-crsng.gc.ca/index_eng.asp"
          target="_blank"
        >     
          <NSERImage  isDarkMode={isDarkMode}  src={NSER} alt={NSER} />
        </Link>
        </ImgContainer >
        </Div>


        <Div>
        <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://ivado.ca/en/" target="_blank">
          <IVADOImage  isDarkMode={isDarkMode} src={IVADO} alt={IVADO} />
        </Link>
        </ImgContainer >
        </Div>

        <Div>
      <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://observatoire-ia.ulaval.ca/en/" target="_blank">
          <OBVIAImage  isDarkMode={isDarkMode} src={OBVIA} alt={OBVIA} />
        </Link>
        </ImgContainer >
        </Div>


        <Div>
      <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://montrealethics.ai/" target="_blank">
          <MAIEIImage  isDarkMode={isDarkMode} src={MAIEI} alt={MAIEI} />
        </Link>
        </ImgContainer >
        </Div>

        <Div>
      <ImgContainer isDarkMode={isDarkMode}>
        <Link href="https://www.uni-graz.at/en/" target="_blank">
          <GrazImage  isDarkMode={isDarkMode} src={Graz} alt={Graz} />
        </Link>
        </ImgContainer ></Div>

        <Div>
      <ImgContainer isDarkMode={isDarkMode}>
        <Link
          href="https://vercel.com/?utm_source=se4ai&utm_campaign=oss"
          target="_blank">
<VercelImage  isDarkMode={isDarkMode} src={Vercel} alt={Vercel} />
        </Link>
      </ImgContainer></Div>

 </MainRow>     </Main>
   </Grid>
   </Grid>
    </Container>
  );
};
export default ThirdContent;

const Container = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#1c1e21" : " #F0F0F0")};
  text-align: center;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    /* height:100%; */
    display: flex;
  width: 100%; 
`;


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
border-radius:10px;
width:300px ; 
/* max-width:100%; */
height:100px;
position:relative;
text-align: center;
 
background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )};
color: ${(props) => (props.isDarkMode ? "black" : "#f7f7f7")}; 
/* border:2px solid orange; */
margin :16px 0px;
/* padding:16px 0px; */
@media screen and (max-width: 768px) {

    width:350px ; 
  }

  @media screen and (max-width: 480px) {
    width:360px ; 
  }

`;



const Link = styled.a`
  text-decoration: none;
  color: inherit;
  `;

const Main=styled.div`   
 display: flex;
flex-wrap: wrap;
  padding-top: -40px;
  max-width: 1800px;
width:100%;

  margin: 0 auto;
margin-left:40px;
@media screen and (max-width: 768px) {
    /* width:100%; */

  margin-left: -20px; /* Adjust margin for screens up to 768px wide */
  }

  @media screen and (max-width: 480px) {
   margin-left: -20px; /* Adjust margin for screens up to 480px wide */
    /* width:100%; */
  } 
  @media screen and (min-width: 1700px) {
    text-align: center;
    margin-left: calc(17% - 150px); 

  }

`
const MainRow=styled.div`
display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    width:100%;
    max-width: 1400px;

margin:0 auto;


`


const ConcordiaImage=styled.img` 
width:100%;
/* position:absolute; */
border-radius:5px;
max-width:180px;
max-height:40.5px;
margin:25px auto;/* left: 50%; */
/* padding:0px 16px; */
background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )};

`



const PolyMtlImage=styled.img`
width:100%; 
border-radius:5px;
max-height: 60px;
    max-width: 146.05px;
    margin:25px auto;
    /* position:absolute;
top: 50%;
left: 50%; */
`
const QueensImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 53.1px;
    max-width: 180px;
    margin:25px auto;
    /* position:absolute;
top: 50%;
left: 50%; */
`

const AlbertaImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 42.3px;
    max-width: 180px;
    margin:25px auto;
    /* position:absolute;
top: 50%;
left: 50%; */
`


const NBCImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 173.91px; 
    margin:25px auto;
       /* position:absolute;
top: 50%;
left: 50%; */
`

const IBMImage=styled.img`
background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )};
border-radius:5px;
max-height: 60px;
    max-width: 162.15px;
    margin:25px auto;
    /* position:absolute;
top: 50%;
left: 50%; */

`


const CiscoImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 114.28px; 
    margin:25px auto;  
     /* position:absolute;
top: 50%;
left: 50%; */
`


 const TDImage=styled.img`
 /* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 58.5px;
    max-width: 180px; 
    margin:25px auto;  

      /* position:absolute;
top: 50%;
left: 50%; */
`


const EricssonImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 37.8px;
    max-width: 180px;  
    margin:25px auto;  

      /* position:absolute;
top: 50%;
left: 50%; */
`


const AirudiImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;    
max-height: 40.5px;
    max-width: 180px;
    margin:25px auto;  

    /* position:absolute;
top: 50%;
left: 50%; */
    `

const GIROImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 60px;
    margin:20px auto;  

    /* position:absolute;
top: 50%;
left: 50%; */
`


const RadioImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 34.2px;
    max-width: 180px;
    margin:25px auto;  

    /* position:absolute;
top: 50%;
left: 50%; */
`


const NSERImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 124.14px;
    margin:25px auto;  

    /* position:absolute;
top: 50%;
left: 50%; */
`

const IVADOImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 179.21px;
    margin:25px auto;  

    /* position:absolute;
top: 50%;
left: 50%; */
`

const OBVIAImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 44.1px;
    max-width: 180px; 
    margin:25px auto;  

      /* position:absolute;
top: 50%;
left: 50%; */
`

const MAIEIImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 48.6px;
    max-width: 180px;  
    margin:25px auto;  

      /* position:absolute;
top: 50%;
left: 50%; */
`

const GrazImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 49.5px;
    max-width: 180px;
    margin:25px auto;  
   
     /* position:absolute; */
/* top: 50%;
left: 50%; */

  `


const VercelImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 40.5px;
    max-width: 180px;
    margin:25px auto;  

    /* position:absolute;
top: 50%;
left: 50%; */
`

const Div = styled.div`
/* max-width:240px; 
max-height:132px; */
padding:0px 16px;
/* position: absolute; */
`