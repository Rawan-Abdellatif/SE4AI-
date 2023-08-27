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
    style={{ flex: 1, padding: "20px" }}
    
  >     

    <Grid item xs={12} md={12} lg={12} xl={12}>

      <Main isDarkMode={isDarkMode}>
      <Grid item xs={6} md={6} lg={12} xl={12}>

      <Title isDarkMode={isDarkMode}>Our Partners</Title>
</Grid>
      <ParticipatingSection isDarkMode={isDarkMode}>
  <div className="flex-container">
    <RedText>P</RedText>articipating
  </div>
  <div className="university">Universities</div>
</ParticipatingSection>

        <Choices>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.concordia.ca/" target="_blank">
              <img src={Concordia} alt={Concordia} />
            </a>
          </ChoiceItem>

          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.polymtl.ca/en/" target="_blank">
              <img src={PolyMtl} alt={PolyMtl} />
            </a>
          </ChoiceItem>

          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.queensu.ca/" target="_blank">
              <img src={Queens} alt={Queens} />
            </a>
          </ChoiceItem>

          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.ualberta.ca/index.html" target="_blank">
              <img src={Alberta} alt={Alberta} />
            </a>
          </ChoiceItem>
        </Choices>
        <IndustrialSection isDarkMode={isDarkMode}>
          <RedText>I</RedText>ndustrial Partners
        </IndustrialSection>


        <Choices>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.nbc.ca/" target="_blank">
              <img src={NBC} alt={NBC} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.ibm.com/ca-en" target="_blank">
              <img src={IBM} alt={IBM} />
            </a>
          </ChoiceItem>
          <ChoiceItem3 isDarkMode={isDarkMode}>
            <a href="https://www.cisco.com/" target="_blank">
              <img src={Cisco} alt={Cisco} />
            </a>
          </ChoiceItem3>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.td.com/ca/en/personal-banking" target="_blank">
              <img src={TD} alt={TD} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.ericsson.com/en" target="_blank">
              <img src={Ericsson} alt={Ericsson} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://airudi.com/en/" target="_blank">
              <img src={Airudi} alt={Airudi} />
            </a>
          </ChoiceItem>
          <ChoiceItem2 isDarkMode={isDarkMode}>
            <a href="https://www.giro.ca/en-ca/" target="_blank">
              <img src={GIRO} alt={GIRO} />
            </a>
          </ChoiceItem2>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://cbc.radio-canada.ca/" target="_blank">
              <img src={Radio} alt={Radio} />
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
              <img src={NSER} alt={NSER} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://ivado.ca/en/" target="_blank">
              <img src={IVADO} alt={IVADO} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://observatoire-ia.ulaval.ca/en/" target="_blank">
              <img src={OBVIA} alt={OBVIA} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://montrealethics.ai/" target="_blank">
              <img src={MAIEI} alt={MAIEI} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a href="https://www.uni-graz.at/en/" target="_blank">
              <img src={Graz} alt={Graz} />
            </a>
          </ChoiceItem>
          <ChoiceItem isDarkMode={isDarkMode}>
            <a
              href="https://vercel.com/?utm_source=se4ai&utm_campaign=oss"
              target="_blank"
            >
              <img src={Vercel} alt={Vercel} />
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
  font-family: "Open Sans", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};


  /* width: 100%; */

`;

const Main = styled.div`
 width: 100%;

  max-width: 1500px;
  padding-top: -40px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  margin: 0 auto;
height:100%;
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};

`;

const Title = styled.div`
  font-weight: bolder;
  display: flex;
  flex-wrap: wrap;
 margin-top:-20px;
  padding-top:60px;
  font-size: 45px;
  padding-bottom: 60px;
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  width: 100%; /* Set the width to 100% */
  min-width:100vw;
  /* margin-right:-750px; */
  margin-left:-600px;
padding-left:600px;
 `;

const ParticipatingSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  /* margin-left:120px; */
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};


`;

const IndustrialSection = styled.div`
display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  /* margin-left:120px; */
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};

`

const CollaboratorsSection = styled.div`
display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  /* margin-left:120px; */
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};



`;

const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 100%;
  /* max-width: 1300px;  */
   /* padding-left: 20px; */
`;

const ChoiceItem = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? " #c0c0c0" : "white")};
height:60px;
  padding: 20px 50px;
  width:250px;
  margin-right:20px;
  margin-top: 15px;
  border-radius: 9px;
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    width: 150px;
    height: 50px;
    padding-left: 50px;
    /* text-align: center; */
  }

`

const RedText = styled.span`
  color: #bb5a7d;  
`;
const ChoiceItem2 = styled.div`
  /* background-color: #db7093; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* background-color: ${(props) => (props.isDarkMode ? " red" : "#c0c0c0")}; */
  background-color: ${(props) => (props.isDarkMode ? " #c0c0c0" : "white")};
height:60px;
  padding: 20px 50px;
  width: 250px;
  margin-right:20px;
  margin-top: 15px;
  /* font-size: 16px; */
  /* margin: 20px; */
  border-radius: 9px;
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    width: 60px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
    padding-left: 80px;
    text-align: center;
    border-radius: 15px;
  }

 `
 const ChoiceItem3 = styled.div`
  /* background-color: #db7093; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* background-color: ${(props) => (props.isDarkMode ? " red" : "#c0c0c0")}; */
  background-color: ${(props) => (props.isDarkMode ? " #c0c0c0" : "white")};
height:60px;
  padding: 20px 50px;
  width: 250px;
  margin-right:20px;
  margin-top: 15px;
  /* margin: 20px; */
  border-radius: 9px;
 a {
   text-decoration: none;
   color: inherit;
 }
 img {
   width: 120px; /* Adjust the width as needed */
 height: auto; /* Maintain aspect ratio */
   padding-left: 60px;
   border-radius: 15px;
 }

`