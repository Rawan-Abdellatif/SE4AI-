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
          <RedText>P</RedText>articipating Universities
        </ParticipatingSection>
        <Choices>
          <ChoiceItem>
            <a href="https://www.concordia.ca/" target="_blank">
              <img src={Concordia} alt={Concordia} />
            </a>
          </ChoiceItem>

          <ChoiceItem>
            <a
              isDarkMode={isDarkMode}
              href="https://www.polymtl.ca/en/"
              target="_blank"
            >
              <ParticipatingImg src={PolyMtl} alt={PolyMtl} />
            </a>
          </ChoiceItem>

          <ChoiceItem>
            <a href="https://www.queensu.ca/" target="_blank">
              <ParticipatingImg src={Queens} alt={Queens} />
            </a>
          </ChoiceItem>

          <ChoiceItem>
            <a href="https://www.ualberta.ca/index.html" target="_blank">
              <ParticipatingImg src={Alberta} alt={Alberta} />
            </a>
          </ChoiceItem>
        </Choices>
        <IndustrialSection isDarkMode={isDarkMode}>
          <RedText>I</RedText>ndustrial Partners
        </IndustrialSection>

        <Choices>
          <ChoiceItem>
            <a href="https://www.nbc.ca/" target="_blank">
              <ParticipatingImg src={NBC} alt={NBC} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://www.ibm.com/ca-en" target="_blank">
              <ParticipatingImg src={IBM} alt={IBM} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://www.cisco.com/" target="_blank">
              <ParticipatingImg src={Cisco} alt={Cisco} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://www.td.com/ca/en/personal-banking" target="_blank">
              <CollaboratorsImg src={TD} alt={TD} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://www.ericsson.com/en" target="_blank">
              <ParticipatingImg src={Ericsson} alt={Ericsson} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://airudi.com/en/" target="_blank">
              <ParticipatingImg src={Airudi} alt={Airudi} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://www.giro.ca/en-ca/" target="_blank">
              <IndustrialImg src={GIRO} alt={GIRO} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://cbc.radio-canada.ca/" target="_blank">
              <ParticipatingImg src={Radio} alt={Radio} />
            </a>
          </ChoiceItem>
        </Choices>

        <CollaboratorsSection isDarkMode={isDarkMode}>
          <RedText>C</RedText>ollaborators and Supporters{" "}
        </CollaboratorsSection>
        <Choices>
          <ChoiceItem>
            <a
              href="https://www.nserc-crsng.gc.ca/index_eng.asp"
              target="_blank"
            >
              <CollaboratorsImg src={NSER} alt={NSER} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://ivado.ca/en/" target="_blank">
              <CollaboratorsImg src={IVADO} alt={IVADO} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://observatoire-ia.ulaval.ca/en/" target="_blank">
              <CollaboratorsImg src={OBVIA} alt={OBVIA} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://montrealethics.ai/" target="_blank">
              <CollaboratorsImg src={MAIEI} alt={MAIEI} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a href="https://www.uni-graz.at/en/" target="_blank">
              <CollaboratorsImg src={Graz} alt={Graz} />
            </a>
          </ChoiceItem>
          <ChoiceItem>
            <a
              href="https://vercel.com/?utm_source=se4ai&utm_campaign=oss"
              target="_blank"
            >
              <CollaboratorsImg src={Vercel} alt={Vercel} />
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
  /* width: 100%; */
`;

const Main = styled.div`
  margin-top: 0;
  padding-left: 100px;
  /* width: 100%;
  height: 100%; */
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};
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
`;

const ParticipatingSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;

const IndustrialSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;

const CollaboratorsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;

const ParticipatingImg = styled.img`
  /* background-color: #c0c0c0; */
  padding: 20px 130px;
  width: 170px;
  height: 45px;
  margin-left: -250px;
  text-align: center;
  border-radius: 15px;
`;
/* const Link = styled.a`
  text-decoration: none;
  color: inherit;
  border: 1px solid yellow;
`; */
const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 150px;
`;

const ChoiceItem = styled.div`
  /* background-color: #db7093; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 20px;
  border-radius: 4px;
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    padding: 20px 130px;
    width: 170px;
    height: 45px;
    margin-left: -250px;
    text-align: center;
    border-radius: 15px;
    background-color: ${(props) => (props.isDarkMode ? " #282828" : "white")};
  }
`;
const RedText = styled.span`
  color: #bb5a7d;
`;
const IndustrialImg = styled.img`
  /* background-color: #c0c0c0; */
  padding: 20px 170px;
  width: 70px;
  height: 70px;
  margin-left: -250px;
  text-align: center;
  border-radius: 15px;
`;
const CollaboratorsImg = styled.img`
  /* background-color: #c0c0c0; */
  padding: 20px 130px;
  width: 170px;
  height: 45px;
  margin-left: -250px;
  text-align: center;
  border-radius: 15px;
`;
