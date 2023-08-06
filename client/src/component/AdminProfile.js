import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { isDarkMode } = useContext(DarkModeContext);

  const { adminId } = useParams();

  useEffect(() => {
    // Fetch the admin information from the backend
    fetch(`/api/admins/${adminId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setAdmin(data.data); // Assuming data.data contains the admin information
          setLoading(false);
        } else {
          setError("Admin not found");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch admin's information");
        setLoading(false);
      });
  }, [adminId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const imageData = `data:image/jpeg;base64,${admin.Image}`;

  return (
    <Profile>
      <Header>Admin Profile</Header>
      {admin && (
        <MiniContainer className="emadContainer " isDarkMode={isDarkMode}>
          <Img src={imageData} alt={admin.Name} />
          <Name>{admin.Name}</Name>
          <Job>{admin.Job}</Job>
          <University>{admin.University}</University>
          <Links>
            <SocialMedia isDarkMode={isDarkMode}>
              <li>
                <a
                  href={admin.Website}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <SmallIcon isDarkMode={isDarkMode}>
                    <FaArrowUpRightFromSquare />
                  </SmallIcon>
                  <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
                </a>
              </li>

              <li>
                <a href={admin.LinkedIn} target="_blank">
                  <SmallIcon isDarkMode={isDarkMode}>
                    <AiFillLinkedin />
                  </SmallIcon>
                </a>
              </li>
              <li>
                <a href={admin.Twitter} target="_blank">
                  <SmallIcon isDarkMode={isDarkMode}>
                    <BsTwitter />
                  </SmallIcon>
                </a>
              </li>
              <li>
                <a href={`mailto:${admin.Email}`}>
                  <SmallIcon isDarkMode={isDarkMode}>
                    <MdEmail />
                  </SmallIcon>
                </a>
              </li>
            </SocialMedia>
          </Links>
        </MiniContainer>
      )}
    </Profile>
  );
};

export default AdminProfile;

const Profile = styled.div`
  margin-top: 50px;
  margin-left: 15px;
`;

const Header = styled.div`
  padding-left: 3px;
  font-weight: bold;
  font-size: 30px;
  width: 200px;
`;

const Table = styled.table`
  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const MiniContainer = styled.div`
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 10px;
  border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"};
  background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  padding-top: 0px;
  width: 270px;
  height: 400px;
  &.emadContainer {
    height: 450px;
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 15px;
`;

const Job = styled.div`
  background-color: #bb5a7d;
  color: white;
  border-radius: 5px;
  width: 80px;
  text-align: center;
  font-weight: bold;
  padding: 2px 2px;
  margin-left: 15px;
`;

const University = styled.div`
  margin-left: 15px;
`;

const Links = styled.div`
  color: #404040;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #404040;
  }
  /* li {
    width: 80px;
  } */
`;

const SocialMedia = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  height: 50px;
  margin-left: 15px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  a {
    display: flex;
    /* align-items: center; */
    text-align: center;
    text-decoration: none;
    color: #404040;
    padding: 5px 5px;
    transition: background-color 0.3s;
    border-radius: 5px;
    /* margin-right: 5px; */
  }

  a:hover {
    background-color: #e8e8e8;
  }
`;

const SmallIcon = styled.span`
  font-size: 20px;
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
  font-weight: bold;
  margin-right: 7px;
`;

const KnowMore = styled.span`
  margin-right: 3px;
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
  font-size: 15px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;
const Img = styled.img`
  width: 270px;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
