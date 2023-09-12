import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
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
import { Grid } from "@mui/material";
const Partners = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
         <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1}}
    
  >     

    <Grid item xs={12} md={12} lg={12} xl={12}>

      <Main isDarkMode={isDarkMode}>
      <Grid item xs={6} md={6} lg={12} xl={12}>

      <Title isDarkMode={isDarkMode}>Our Partners</Title>
</Grid>
      <ParticipatingSection isDarkMode={isDarkMode}> 
       <div className="flex-container">

    <RedText>P</RedText>articipating   Universities

    </div>
   {/* Universities */}

</ParticipatingSection>

        <Choices>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.concordia.ca/" target="_blank">
              <ConcordiaImage src={Concordia} alt={Concordia} />
            </a>
          </ChoiceItem>

          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.polymtl.ca/en/" target="_blank">
              <PolyMtlImage src={PolyMtl} alt={PolyMtl} />
            </a>
          </ChoiceItem>

          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.queensu.ca/" target="_blank">
              <QueensImage src={Queens} alt={Queens} />
            </a>
          </ChoiceItem>

          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.ualberta.ca/index.html" target="_blank">
              <AlbertaImage src={Alberta} alt={Alberta} />
            </a>
          </ChoiceItem>
        </Choices>
        <IndustrialSection isDarkMode={isDarkMode}>
          <RedText>I</RedText>ndustrial Partners
        </IndustrialSection>


        <Choices>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.nbc.ca/" target="_blank">
              <NBCImage src={NBC} alt={NBC} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.ibm.com/ca-en" target="_blank">
              <IBMImage src={IBM} alt={IBM} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.cisco.com/" target="_blank">
              <CiscoImage src={Cisco} alt={Cisco} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.td.com/ca/en/personal-banking" target="_blank">
              <TDImage src={TD} alt={TD} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.ericsson.com/en" target="_blank">
              <EricssonImage src={Ericsson} alt={Ericsson} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://airudi.com/en/" target="_blank">
              <AirudiImage src={Airudi} alt={Airudi} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.giro.ca/en-ca/" target="_blank">
              <GIROImage src={GIRO} alt={GIRO} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://cbc.radio-canada.ca/" target="_blank">
              <RadioImage src={Radio} alt={Radio} />
            </a>
          </ChoiceItem>
        </Choices>

        <CollaboratorsSection isDarkMode={isDarkMode}>
  <div className="flex-container">
    <RedText>C</RedText>ollaborators
  </div>
  <div className="supporters">and Supporters</div>
</CollaboratorsSection>

        <Choices>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a
              href="https://www.nserc-crsng.gc.ca/index_eng.asp"
              target="_blank"
            >
              <NSERImage src={NSER} alt={NSER} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://ivado.ca/en/" target="_blank">
              <IVADOImage src={IVADO} alt={IVADO} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://observatoire-ia.ulaval.ca/en/" target="_blank">
              <OBVIAImage src={OBVIA} alt={OBVIA} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://montrealethics.ai/" target="_blank">
              <MAIEIImage src={MAIEI} alt={MAIEI} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.uni-graz.at/en/" target="_blank">
              <GrazImage src={Graz} alt={Graz} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a
              href="https://vercel.com/?utm_source=se4ai&utm_campaign=oss"
              target="_blank"
            >
              <VercelImage src={Vercel} alt={Vercel} />
            </a>
          </ChoiceItem>
        </Choices>
      </Main>
      </Grid>
      </Grid>
    </Container>
  );
};

export default Partners;

const Container = styled.div`
   display: flex;
   font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "#EBEDF0" : "#484848")};

margin-left:150px;
@media screen and (max-width: 768px) {
    margin-left: 150px; /* Adjust margin for screens up to 768px wide */
  }

  @media screen and (max-width: 480px) {
    margin-left: 70px; /* Adjust margin for screens up to 480px wide */
  }

`;

const Main = styled.div`
 width: 100%;
 margin-bottom:80px;

  max-width: 1500px;
  /* padding-top: -50px; */
  color: ${(props) => (props.isDarkMode ? "#EBEDF0" : "#484848")};
  /* margin: 10 auto; */
height:100%;
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};

`;

const Title = styled.h1`
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
 margin-top:0.7px;
  padding-top:80px;
  font-size: 50px;
  padding-bottom: 70px;
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  width: 100%; /* Set the width to 100% */
  min-width:100vw;
  /* margin-right:-750px; */
  margin-left:-600px;
padding-left:550px;

 `;

const ParticipatingSection = styled.div`
  display: flex;
  /* flex-direction :row; */
  flex-wrap: wrap;
  margin-top: 40px;
max-width:400px;
/* border:2px solid green; */
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  margin-left:-50px;
padding-left:-600px;
@media screen and (max-width: 768px) {
  max-width:350px;
  width:100%;

}

  @media screen and (max-width: 480px) {
  max-width:350px;  width:100%;

  }

`;

const IndustrialSection = styled.div`
  display: flex;
  /* flex-direction :row; */
  flex-wrap: wrap;
  margin-top: 40px;
max-width:400px;
/* border:2px solid green; */
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  margin-left:-50px;
padding-left:-600px;
`

const CollaboratorsSection = styled.div`
  display: flex;
  /* flex-direction :row; */
  flex-wrap: wrap;
  margin-top: 40px;
max-width:450px;
/* border:2px solid green; */
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  margin-left:-50px;
padding-left:-600px;

`;

const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  /* width: 100%; */
  margin-left:-600px;
padding-left:550px;   /* padding-left: 20px; */

`;

const ChoiceItem = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? " #BEC3C9" : "white")};
height:60px;
  padding: 20px 50px;
  width:200px;
  margin-right:20px;
  margin-top: 30px;
  border-radius: 10px;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 768px) {
    width:100%;

  }

  @media screen and (max-width: 480px) {
    width:100%;
  }

`

const RedText = styled.span`
  color: #bb5a7d;  
 
 
`;

const ConcordiaImage=styled.img` 

/* position:absolute; */
border-radius:5px;
max-width:180px;
max-height:40.5px;
padding:5px 5px;
background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )};

`



const PolyMtlImage=styled.img`

border-radius:5px;
max-height: 60px;
    max-width: 146.05px;
    padding:0px 16px;
/* align-items:center; */
    /* margin:25px auto; */
    /* position:absolute;
top: 50%;
left: 50%; */
`
const QueensImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 53.1px;
    max-width: 180px;
    padding:0 16px;
    /* position:absolute;
top: 50%;
left: 50%; */
`

const AlbertaImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 42.3px;
    max-width: 180px;
    padding:0 16px;
    /* position:absolute;
top: 50%;
left: 50%; */
`


const NBCImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 173.91px; 
    padding:0 16px;
       /* position:absolute;
top: 50%;
left: 50%; */
`

const IBMImage=styled.img`
background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )};
border-radius:5px;
max-height: 60px;
    max-width: 162.15px;
    padding:0 16px;
    /* position:absolute;
top: 50%;
left: 50%; */

`


const CiscoImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 114.28px; 
    padding:0 40px;
     /* position:absolute;
top: 50%;
left: 50%; */
`


 const TDImage=styled.img`
 /* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 58.5px;
    max-width: 180px; 
    padding:0 16px;

      /* position:absolute;
top: 50%;
left: 50%; */
`


const EricssonImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 37.8px;
    max-width: 180px;  
    padding:0 16px;

      /* position:absolute;
top: 50%;
left: 50%; */
`


const AirudiImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;    
max-height: 40.5px;
    max-width: 180px;
    padding:4px 15px;

    /* position:absolute;
top: 50%;
left: 50%; */
    `

const GIROImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 60px;
    padding:0 70px;

    /* position:absolute;
top: 50%;
left: 50%; */
`


const RadioImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 34.2px;
    max-width: 180px;
    padding:10px 16px;

    /* position:absolute;
top: 50%;
left: 50%; */
`


const NSERImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 124.14px;
    padding:0px 16px;

    /* position:absolute;
top: 50%;
left: 50%; */
`

const IVADOImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 60px;
    max-width: 179.21px;
    padding:0px 16px;

    /* position:absolute;
top: 50%;
left: 50%; */
`

const OBVIAImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 44.1px;
    max-width: 180px; 
    padding:0px 16px;

      /* position:absolute;
top: 50%;
left: 50%; */
`

const MAIEIImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 48.6px;
    max-width: 180px;  
    padding:0px 16px;

      /* position:absolute;
top: 50%;
left: 50%; */
`

const GrazImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 49.5px;
    max-width: 180px;
    padding:0px 16px;
   
     /* position:absolute; */
/* top: 50%;
left: 50%; */

  `


const VercelImage=styled.img`
/* background-color: ${(props) => (props.isDarkMode ?  "	#bec3c9":"inharit" )}; */
border-radius:5px;
max-height: 40.5px;
    max-width: 180px;
    padding:5px 16px;

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