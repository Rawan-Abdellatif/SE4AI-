import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import DrLimingZhuImage from "../component/member/Dr. Liming Zhu.jpg";
import DrStefanWagnerImage from "../component/member/Dr. Stefan Wagner.jpg";
import MrDerekTruongImage from "../component/member/Mr. Derek Truong.jpg";
import MrSergeOlignyImage from "../component/member/Mr. Serge Oligny.jpg";
import { Grid } from "@mui/material";
// const CommitteeData = [
//   {
//     name: "Mr. Derek Truong      ",
//     Job: "IBM",
//     img: MrDerekTruongImage,
//     website: "https://se4ai.org/members/derek-truong/",
//     linkedin: "https://www.linkedin.com/in/derek-truong-7233b85/",
//     email: "trong@ca.ibm.com",
//   },
//   {
//     name: "Mr. Serge Oligny      ",
//     Job: "Desjardins",
//     img: MrSergeOlignyImage,
//     website: "https://se4ai.org/members/serge-oligny/",
//     linkedin: "https://www.linkedin.com/in/serge-oligny-0778031/",
//   },
//   {
//     name: "Dr. Stefan Wagner      ",
//     Job: "University of Stuttgart",
//     img: DrStefanWagnerImage,
//     website: "https://www.iste.uni-stuttgart.de/institute/team/Wagner-00017/",
//     email: "stefan.wagner@iste.uni-stuttgart.de; ",
//   },
//   {
//     name: "Dr. Liming Zhu      ",
//     Job: "CSIRO Data61  ",
//     img: DrLimingZhuImage,
//     website: "https://cgi.cse.unsw.edu.au/~limingz/home/?About_Me:Bios",
//     linkedin: "https://www.linkedin.com/in/limingzhu/",
//     twitter: "https://twitter.com/limingz",
//     email: "liming.Zhu@data61.csiro.au",
//   },
// ];
// const SteeringCommittee = () => {
//   const { isDarkMode } = useContext(DarkModeContext);

//   return (
//     <MiddContainer isDarkMode={isDarkMode}>
//       {CommitteeData.map((committee, index) => (
//         <MiniContainer key={index} isDarkMode={isDarkMode}>
//           <Img src={committee.img} alt={committee.name} />
//           <Name>{committee.name}</Name>
//           <Job>{committee.Job}</Job>
//           <Links>
//             <ul>
//               {" "}
//               {committee.website && (
//                 <SocialMedia isDarkMode={isDarkMode}>
//                   <li>
//                     <a
//                       href={committee.website}
//                       style={{ textDecoration: "none" }}
//                     >
//                       <SmallIcon isDarkMode={isDarkMode}>
//                         <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
//                       </SmallIcon>
//                     </a>
//                   </li>
//                 </SocialMedia>
//               )}
//               {committee.linkedin && (
//                 <SocialMedia isDarkMode={isDarkMode}>
//                   {" "}
//                   <li>
//                     <a
//                       href={committee.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <SmallIcon isDarkMode={isDarkMode}>
//                         <AiFillLinkedin isDarkMode={isDarkMode} />
//                       </SmallIcon>
//                     </a>
//                   </li>
//                 </SocialMedia>
//               )}
//               {committee.twitter && (
//                 <SocialMedia isDarkMode={isDarkMode}>
//                   <li>
//                     <a
//                       href={committee.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <SmallIcon isDarkMode={isDarkMode}>
//                         <BsTwitter isDarkMode={isDarkMode} />
//                       </SmallIcon>
//                     </a>
//                   </li>{" "}
//                 </SocialMedia>
//               )}
//               {committee.email && (
//                 <SocialMedia isDarkMode={isDarkMode}>
//                   <li>
//                     <a href={`mailto:${committee.email}`}>
//                       <SmallIcon isDarkMode={isDarkMode}>
//                         <MdEmail />
//                       </SmallIcon>
//                     </a>
//                   </li>
//                 </SocialMedia>
//               )}
//             </ul>
//           </Links>
//         </MiniContainer>
//       ))}
//     </MiddContainer>
//   );
// };
// export default SteeringCommittee;
// const Img = styled.img`
//     width: 100%;
//   height: 295px;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   @media (max-width: 995px) {
//     /* flex-direction: column;  */
//     /* Display items in a column on mobile */
//     height: 350px;
// /* margin-left:-0px;   width: 350px;  height: 320px; */

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
// width:315px;  /* width:100vw; */
// /* border:5px solid orange;  @media (max-width: 768px) { */
// @media (max-width: 995px) {
//   width:370px;
//  };`

// const MiddContainer = styled.div`
//    display: flex;
//    flex-direction:row;
//    flex-wrap:wrap;
// gap:30px;
  
  
//     @media (max-width: 995px) {


//     }
// `;

// const Name = styled.div`
//   font-weight: bold;
//   font-size: 20px;
//   margin-top: 20px;
//   margin-left: 15px;
// `;

// const Job = styled.div`
//   margin-left: 15px;
// `;

// const Links = styled.div`
//   color: #404040;
//   font-weight: bold;
//   width: 30px;

//   ul {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     color: #404040;
//     display: flex;
//     flex-direction: row;
//     width: 300px;
//   }
// `;

// const SocialMedia = styled.div`
//   padding-top: 10px;
//   align-items: center;
//   list-style: none;
//   color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
//   margin-left: 5px;

//   a {
//     text-align: center;
//     text-decoration: none;
//     color: #404040;
//     padding: 5px 5px;
//     padding-top: 10px;
//     transition: background-color 0.3s;
//     border-radius: 5px;
//     margin-right: 6px;
//   }

//   a:hover {
//     background-color: #e8e8e8;
//     border-radius: 5px;
//   }
// `;

// const KnowMore = styled.span`
//   margin-left: 5px; /* Adjust the left margin for spacing */
//   color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
//   font-size: 15px;
// `;

// const SmallIcon = styled.span`
//   font-size: 20px;
//   color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
//   font-weight: bold;
//   /* margin-right: 9px; */
//   padding-left: -70px;
// `;
const SteeringCommitteee=()=>{
  const { isDarkMode } = useContext(DarkModeContext);

   return (

<Container>
<Grid item lg={12} xl={12}    
>
  <Main>
<Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={MrDerekTruongImage} alt= "Mr. Derek Truong"/></CardImage>
    <CardBody><h3>Mr. Derek Truong</h3> IBM</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://se4ai.org/members/derek-truong/">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank" href="https://www.linkedin.com/in/derek-truong-7233b85/">
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    <li>
      <a target="_blank" href="mailto:trong@ca.ibm.com">
        <svg aria-hidden="true"
        width="1em"
         focusable="false"
          data-prefix="fas"
           data-icon="envelope"
            class="svg-inline--fa fa-envelope fa-w-16 " 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path fill="currentColor"
             d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 
             48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></a></li>
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage ><Image src={MrSergeOlignyImage} alt= "Mr. Serge Oligny"/></CardImage>
    <CardBody><h3>Mr. Serge Oligny</h3>Desjardins</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://se4ai.org/members/serge-oligny/">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank" href="https://www.linkedin.com/in/serge-oligny-0778031/">
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
  <Div><SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={DrStefanWagnerImage} alt= "Dr. Stefan Wagner"/></CardImage>
    <CardBody><h3>Dr. Stefan Wagner</h3> University of Stuttgart</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://www.iste.uni-stuttgart.de/institute/team/Wagner-00017/">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>

    <li>
      <a target="_blank" href="mailto:stefan.wagner@iste.uni-stuttgart.de">
        <svg aria-hidden="true"
        width="1em"
         focusable="false"
          data-prefix="fas"
           data-icon="envelope"
            class="svg-inline--fa fa-envelope fa-w-16 " 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path fill="currentColor"
             d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 
             48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></a></li>
</ul></CardFooter>
    </SmallDiv></Div>
  <Div><SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={DrLimingZhuImage} alt= "Dr. Liming Zhu"/></CardImage>
    <CardBody><h3>Dr. Liming Zhu</h3> CSIRO Data61</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://cgi.cse.unsw.edu.au/~limingz/home/?About_Me:Bios">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank" href="https://www.linkedin.com/in/limingzhu/">
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    <li><a target="_blank" href="https://twitter.com/limingz">
      <svg aria-hidden="true" 
        width=" 0.875em"
      focusable="false" 
      data-prefix="fab"
       data-icon="twitter"
       class="svg-inline--fa fa-twitter fa-w-16 " 
       role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"><path fill="currentColor"
         d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
      </path></svg>
      </a></li>
    <li>
      <a target="_blank" href="mailto:liming.Zhu@data61.csiro.au">
        <svg aria-hidden="true"
        width="1em"
         focusable="false"
          data-prefix="fas"
           data-icon="envelope"
            class="svg-inline--fa fa-envelope fa-w-16 " 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path fill="currentColor"
             d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 
             48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></a></li>
</ul></CardFooter>
    </SmallDiv></Div>
    
    </Main></Grid>
</Container>
   )


}
export default SteeringCommitteee;
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

width:298px; 
/* height:438.2px; */
background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
border-radius:calc(0.4rem*2);
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
  border-radius:calc(0.4rem*2);`
const CardBody=styled.div`
  padding:0.25rem 1rem;

h3{
  font-size:1.25rem;
  font-weight:700px;
  margin-bottom :0;
}    
padding-bottom: 0;
`
const CardFooter=styled.div` 
font-weight:700;
  margin-top: auto;
  padding:0.25rem 1rem;
ul{
  /* border:2px solid green; */
  margin-left:-0.75rem;
  padding-left:0.15rem;

}
li{
  border-radius: 0.5rem;
  /* border:2px solid yellow; */

    cursor: pointer;
    display: inline-block;
    margin-left:0rem;
    padding: 0.25rem 1rem;
    :hover {
 
    background-color: ${(props) => (props.isDarkMode ? "#484848" : "#f1f2f5")};

    border-radius: 0.5rem;
  }
}
a {
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
text-decoration:none;
  /* margin-left:-30px; */
 
}`
const Image =styled.img`
width:298px; 
height:298px; 
border-top-right-radius :5px; 
border-top-left-radius:5px;
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

  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
