import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {
 

  return (
    <SidebarContainer >
      
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  background-color: #fff;
  color: #333;
  width: ${({ isExpanded }) => (isExpanded ? "280px" : "80px")};
  height: 100vh;
  position: fixed;
  top: 5;
  left: 0;
  padding: 30px;
  transition: width 0.3s;
  z-index: 100;
  overflow-x: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// const SidebarToggle = styled.div`
//   cursor: pointer;
//   display: flex;
//   justify-content: flex-end;
//   margin-bottom: 30px;
// `;

// const ToggleIcon = styled.div`
//   width: 18px;
//   height: 18px;

//   background-repeat: no-repeat;
//   background-size: contain;
//   transition: transform 0.3s;

//   &.expanded {
//     transform: rotate(180deg);
//   }
// `;

// const Logo = styled.h1`
//   font-size: 24px;
//   margin-bottom: 30px;
// `;

// const NavLinksContainer = styled.div`
//   margin-top: 30px;
// `;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   color: #333;
//   font-size: 18px;
//   font-weight: bold;
//   margin-bottom: 20px;
//   display: block;

//   &.active {
//     color: #1e88e5;
//   }
// `;

// const Dropdown = styled.div`
//   position: relative;
//   margin-bottom: 20px;
// `;

// const DropdownToggle = styled.div`
//   cursor: pointer;
//   font-size: 18px;
//   font-weight: bold;
// `;

// const DropdownContent = styled.div`
//   display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #f5f8fa;
//   padding: 10px;
//   border-radius: 4px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//   /* Rest of the code */

//   &::before {
//     content: "";
//     position: absolute;
//     top: -8px;
//     left: 50%;
//     transform: translateX(-50%);
//     border-width: 0 8px 8px;
//     border-style: solid;
//     border-color: transparent transparent #f5f8fa;
//   }
// `;

// const DropdownLink = styled(Link)`
//   text-decoration: none;
//   color: #333;
//   font-size: 16px;
//   display: block;
//   padding: 5px 0;

//   &:hover {
//     color: #1e88e5;
//   }
// `;

export default Sidebar;
