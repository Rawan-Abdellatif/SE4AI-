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

const Partners = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
      <Title isDarkMode={isDarkMode}>Our Partners</Title>
      <Main isDarkMode={isDarkMode}>
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
    </Container>
  );
};

export default Partners;

const Container = styled.div`
  margin-top: 0px;
  margin-left: -10px;
  margin-right: -10px;
  /* margin-left: 100px; */
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  @media (min-width: 1600px) { 
height:100vh;
margin-left:300px;
width:1300px;
line-height:7rem;
/* padding-bottom: 200px; */

 }
`;

const Main = styled.div`
  margin-top: 20px;
  padding-left: 100px;
   width: 1400px;
/* text-align:center; */
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};
  @media (max-width: 995px) {
    flex-direction:column;
width:90vw;
margin-left:5px; 
border-left:none;

 }
`;

const Title = styled.div`
  font-weight: bold;
  margin-top: 0;
  padding-left: 100px;
  padding-top: 45px;
  font-size: 45px;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  padding-bottom: 50px;
  border-bottom: 2px solid
    ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  @media (max-width: 995px) {max-width:995px;
    margin-left:-30px; 
  padding-left:60px;}
  @media (min-width: 1600px) {
min-width:1600px;
margin-left:-350px;
padding-left:500px;
background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
} `;

const ParticipatingSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
@media (max-width: 995px) {
  .flex-container {
    display: flex;
    align-items: center;
  }

  .university {
    order: 2;
  }

  .flex-container,
  .university {
    font-size: 35px;
    margin-left: -70px;
    width: 85vw;
    height: 70px;
  }
}

`;

const IndustrialSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  @media (max-width: 995px) {
    display: flex;
    align-items: center;
    margin-left: -70px;
    font-size: 35px;
    margin-left: -70px;
    width: 85vw;
    height: 70px;
  }
`

const CollaboratorsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  @media (max-width: 995px) {
  .flex-container {
    display: flex;
    align-items: center;
  }

  .supporters {
    order: 2;
  }

  .flex-container,
  .supporters {
    font-size: 35px;
    margin-left: -70px;
    width: 85vw;
    height: 70px;
  }
}
`;

const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  /* margin-left: 120px; */
  /* padding-left: 20px; */
`;

const ChoiceItem = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? " #c0c0c0" : "white")};
height:60px;
  padding: 20px 5px;
  width: 250px;
  margin-right:20px;
  margin-top: 15px;
margin-left:20px;  
  border-radius: 9px;
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    width: 200px;
    height: 50px;
    padding-left: 30px;
    text-align: center;
    border-radius: 15px;
  }
  @media (max-width:995px) {
    flex-direction: column; /* Display items in a column on mobile */
width:95% ;
margin-left:-75px;  
text-align:center;
margin-top:20px;

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
  padding: 20px 5px;
  width: 250px;
  margin-right:20px;
  margin-top: 15px;
  /* font-size: 16px; */
margin-left:20px;  /* padding-left: 2px; */
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
  @media (max-width:995px) {
    flex-direction: column; /* Display items in a column on mobile */
    width:80% ;
margin-left:-75px;
padding-left:60px;
margin-top:20px;
/* padding-top:-100px; */
}
 `
 const ChoiceItem3 = styled.div`
  /* background-color: #db7093; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* background-color: ${(props) => (props.isDarkMode ? " red" : "#c0c0c0")}; */
  background-color: ${(props) => (props.isDarkMode ? " #c0c0c0" : "white")};
height:60px;
  padding: 20px 5px;
  width: 250px;
  margin-right:20px;
  margin-top: 15px;
  /* font-size: 16px; */
margin-left:20px;  /* padding-left: 2px; */
  /* margin: 20px; */
  border-radius: 9px;
 a {
   text-decoration: none;
   color: inherit;
 }
 img {
   width: 100px; /* Adjust the width as needed */
 height: auto; /* Maintain aspect ratio */
   padding-left: 80px;
   text-align: center;
   border-radius: 15px;
 }
 @media (max-width:995px) {
    flex-direction: column; /* Display items in a column on mobile */
    width:85% ;
margin-left:-75px; 
padding-left:40px;
margin-top:20px;


}
`