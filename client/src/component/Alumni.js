// This is the ProgramLeaderShip part in Team  Page
import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import images
import ErnestoLangOreamunoImage from "../component/team/photos/Ernesto-Lang-Oreamuno.jpg";
import { Grid } from "@mui/material";

// const Alumni = () => {
//   const { isDarkMode } = useContext(DarkModeContext);

//   return (
//     <MiniContainer isDarkMode={isDarkMode}>
//       <Img src={ErnestoLangOreamunoImage} alt="Ernesto Lang Oreamuno" />{" "}
//       <Name>Ernesto Lang Oreamuno</Name>
//       <University>Queen's University</University>
//     </MiniContainer>
//   );
// };

// export default Alumni;

// const Img = styled.img`
//       width: 100%;

//       display:block;
//   height: 295px;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   @media (max-width: 995px) {
//     flex-direction: column; /* Display items in a column on mobile */

//  }
// `;
// const MiniContainer = styled.div`
//  margin-top: 20px; /* Change this value to decrease the margin */
//   border-radius: 10px;
//   border: ${(props) =>
//     props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"};
//   background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")};
//   color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
//   /* ... other styles ... */
//   /* margin-left: -5px;  */
// width:310px;  /* width:100vw; */
// /* border:5px solid orange;   */
// @media (max-width: 995px) {
//     flex-direction:column;
// width:90vw;
// margin-left:1px; 
// border-left:none;
//  }
// `;

// const Name = styled.div`
//   font-weight: bold;
//   font-size: 20px;
//   margin-top: 20px;
//   margin-left: 15px;
// `;

// const University = styled.div`
//   margin-left: 15px;
// `;
const Alumni=()=>{
  const { isDarkMode } = useContext(DarkModeContext);
  return(
<Container>
<Grid item lg={12} xl={12}    
></Grid>

<Main>
  
<Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={ErnestoLangOreamunoImage} alt="Ernesto Lang Oreamuno" /></CardImage>
    <CardBody><h3>Ernesto Lang Oreamuno</h3>Queen's University</CardBody>
    </SmallDiv>
    </Div>
    </Main></Container>)
}
export default Alumni
const Container=styled.div`
margin-left:0px;


`

const Div=styled.div`
max-width: 25%;
text-align: left;
margin-top:15px;
/* margin-left:-165px; */
margin-right:2rem;
/* flex:0 0 100%; */
@media (max-width: 1000px) {

  max-width:358.4px;
}



`
const SmallDiv=styled.div`
border:${(props) => (props.isDarkMode ? "": "2px solid #eef0f2")};

width:298px; 
/* height:438.2px; */
background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
border-radius:20px;
box-shadow:0 1 2 0 rgb(0 0 0 1);
/* margin-top:20px;
margin-left:100px;  */
display:flex; 
flex-wrap:wrap;
@media (max-width: 1000px) {
    margin-right: 0; /* Remove right margin for mobile screens */
  width:358.4px;
}
`
const CardImage=styled.div`
@media (max-width: 1000px) {
  width:358.4px;
}
  border-radius:20px;`
const CardBody=styled.div`
  padding:0.25rem 1rem;

h3{
  font-size:1.25rem;
  font-weight:700px;
  margin-bottom :0;
}    
padding-bottom: 0;
`
const Image =styled.img`
width:298px; 
height:298px; 
border-top-right-radius :15px; 
border-top-left-radius:15px;
@media (max-width: 1000px) {
 width:358.4px;
 height:358.4px;
 /* width:100%; */
 }
`

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* width:100%; */
  margin-bottom:80px;

  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;