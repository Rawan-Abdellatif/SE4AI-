import React, { useState } from "react";
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
const Partners = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <Container>
      <Title>Our Partners</Title>
      <SectionButtons>
        <SectionButton
          active={selectedSection === "Participating"}
          onClick={() => handleSectionClick("Participating")}
        >
          Participating Universities
        </SectionButton>
        <SectionButton
          active={selectedSection === "Industrial"}
          onClick={() => handleSectionClick("Industrial")}
        >
          Industrial Partners
        </SectionButton>
        <SectionButton
          active={selectedSection === "Collaborators"}
          onClick={() => handleSectionClick("Collaborators")}
        >
          Collaborators and Supporters
        </SectionButton>
      </SectionButtons>
      {selectedSection && (
        <SectionContent>
          {selectedSection === "Participating" && <ParticipatingChoices />}
          {selectedSection === "Industrial" && <IndustrialChoices />}
          {selectedSection === "Collaborators" && <CollaboratorsChoices />}
        </SectionContent>
      )}
    </Container>
  );
};

const ParticipatingChoices = () => {
  return (
    <Choices>
      <ChoiceItem>
        <Link href="https://www.concordia.ca/" target="_blank">
          <Img src={Concordia} alt={Concordia} />{" "}
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        <Link href="https://www.polymtl.ca/en/" target="_blank">
          <Img src={PolyMtl} alt={PolyMtl} />{" "}
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        {" "}
        <Link href="https://www.queensu.ca/" target="_blank">
          <Img src={Queens} alt={Queens} />
        </Link>
      </ChoiceItem>

      <ChoiceItem>
        {" "}
        <Link href="https://www.ualberta.ca/index.html" target="_blank">
          <Img src={Alberta} alt={Alberta} />
        </Link>
      </ChoiceItem>
    </Choices>
  );
};

const IndustrialChoices = () => {
  return (
    <Choices>
      <ChoiceItem>
        {" "}
        <Link href="https://www.nbc.ca/" target="_blank">
          <Img src={NBC} alt={NBC} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        <Link href="https://www.ibm.com/ca-en" target="_blank">
          <Img src={IBM} alt={IBM} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        <Link href="https://www.cisco.com/" target="_blank">
          <Img src={Cisco} alt={Cisco} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        <Link href="https://www.td.com/ca/en/personal-banking" target="_blank">
          <Img src={TD} alt={TD} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        <Link href="https://www.ericsson.com/en" target="_blank">
          <Img src={Ericsson} alt={Ericsson} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        <Link href="https://airudi.com/en/" target="_blank">
          <Img src={Airudi} alt={Airudi} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        <Link href="https://www.giro.ca/en-ca/" target="_blank">
          <Img src={GIRO} alt={GIRO} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        <Link href="https://cbc.radio-canada.ca/" target="_blank">
          <Img src={Radio} alt={Radio} />
        </Link>
      </ChoiceItem>
    </Choices>
  );
};

const CollaboratorsChoices = () => {
  return (
    <Choices>
      <ChoiceItem>
        <Link
          href="https://www.nserc-crsng.gc.ca/index_eng.asp"
          target="_blank"
        >
          <Img src={NSER} alt={NSER} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        {" "}
        <Link href="https://ivado.ca/en/" target="_blank">
          <Img src={IVADO} alt={IVADO} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        {" "}
        <Link href="https://observatoire-ia.ulaval.ca/en/" target="_blank">
          <Img src={OBVIA} alt={OBVIA} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        {" "}
        <Link href="https://montrealethics.ai/" target="_blank">
          <Img src={MAIEI} alt={MAIEI} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        {" "}
        <Link href="https://www.uni-graz.at/en/" target="_blank">
          <Img src={Graz} alt={Graz} />
        </Link>
      </ChoiceItem>
      <ChoiceItem>
        <Link
          href="https://vercel.com/?utm_source=se4ai&utm_campaign=oss"
          target="_blank"
        >
          <Img src={Vercel} alt={Vercel} />
        </Link>
      </ChoiceItem>
    </Choices>
  );
};

export default Partners;

const Container = styled.div`
  margin-top: 10px;
  margin-left: 100px;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  padding-top: 20px;
  font-size: 30px;
`;

const SectionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SectionButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 0 10px;
  background-color: ${({ active }) => (active ? "#db7093" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#000000")};
  border: 1px solid #db7093;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #db7093;
    color: #ffffff;
  }
`;

const SectionContent = styled.div`
  margin-top: 40px;
`;

const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 150px;
`;

const ChoiceItem = styled.div`
  /* background-color: #db7093; */
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 20px;
  border-radius: 4px;
`;
const Img = styled.img`
  background-color: #c0c0c0;
  padding: 30px 30px;
  width: 150px;
  height: 60px;
  margin: 20px;
  text-align: center;
  border-radius: 15px;
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
