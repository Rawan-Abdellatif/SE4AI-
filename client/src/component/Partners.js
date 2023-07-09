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
  return (
    <Container>
      <Title>Our Partners</Title>
      <ParticipatingSection>
        <RedText>P</RedText>articipating Universities
      </ParticipatingSection>
      <Choices>
        <ChoiceItem>
          <Link href="https://www.concordia.ca/" target="_blank">
            <ParticipatingImg src={Concordia} alt={Concordia} />
          </Link>
        </ChoiceItem>

        <ChoiceItem>
          <Link href="https://www.polymtl.ca/en/" target="_blank">
            <ParticipatingImg src={PolyMtl} alt={PolyMtl} />
          </Link>
        </ChoiceItem>

        <ChoiceItem>
          <Link href="https://www.queensu.ca/" target="_blank">
            <ParticipatingImg src={Queens} alt={Queens} />
          </Link>
        </ChoiceItem>

        <ChoiceItem>
          <Link href="https://www.ualberta.ca/index.html" target="_blank">
            <ParticipatingImg src={Alberta} alt={Alberta} />
          </Link>
        </ChoiceItem>
      </Choices>
      <IndustrialSection>
        <RedText>I</RedText>ndustrial Partners
      </IndustrialSection>

      <Choices>
        <ChoiceItem>
          <Link href="https://www.nbc.ca/" target="_blank">
            <ParticipatingImg src={NBC} alt={NBC} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://www.ibm.com/ca-en" target="_blank">
            <ParticipatingImg src={IBM} alt={IBM} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://www.cisco.com/" target="_blank">
            <ParticipatingImg src={Cisco} alt={Cisco} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link
            href="https://www.td.com/ca/en/personal-banking"
            target="_blank"
          >
            <CollaboratorsImg src={TD} alt={TD} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://www.ericsson.com/en" target="_blank">
            <ParticipatingImg src={Ericsson} alt={Ericsson} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://airudi.com/en/" target="_blank">
            <ParticipatingImg src={Airudi} alt={Airudi} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://www.giro.ca/en-ca/" target="_blank">
            <IndustrialImg src={GIRO} alt={GIRO} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://cbc.radio-canada.ca/" target="_blank">
            <ParticipatingImg src={Radio} alt={Radio} />
          </Link>
        </ChoiceItem>
      </Choices>

      <CollaboratorsSection>
        <RedText>C</RedText>ollaborators and Supporters{" "}
      </CollaboratorsSection>
      <Choices>
        <ChoiceItem>
          <Link
            href="https://www.nserc-crsng.gc.ca/index_eng.asp"
            target="_blank"
          >
            <CollaboratorsImg src={NSER} alt={NSER} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://ivado.ca/en/" target="_blank">
            <CollaboratorsImg src={IVADO} alt={IVADO} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://observatoire-ia.ulaval.ca/en/" target="_blank">
            <CollaboratorsImg src={OBVIA} alt={OBVIA} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://montrealethics.ai/" target="_blank">
            <CollaboratorsImg src={MAIEI} alt={MAIEI} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link href="https://www.uni-graz.at/en/" target="_blank">
            <CollaboratorsImg src={Graz} alt={Graz} />
          </Link>
        </ChoiceItem>
        <ChoiceItem>
          <Link
            href="https://vercel.com/?utm_source=se4ai&utm_campaign=oss"
            target="_blank"
          >
            <CollaboratorsImg src={Vercel} alt={Vercel} />
          </Link>
        </ChoiceItem>
      </Choices>
    </Container>
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
  padding-top: 45px;
  font-size: 45px;
  color: #484848;
  padding-bottom: 50px;
  border-bottom: 2px solid #f0f0f0;
`;

const ParticipatingSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
`;

const IndustrialSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
`;

const CollaboratorsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
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
const Link = styled.a`
  text-decoration: none;
  color: inherit;
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
