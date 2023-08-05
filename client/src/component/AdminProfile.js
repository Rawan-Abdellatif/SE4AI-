import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { adminId } = useParams();

  useEffect(() => {
    // Fetch the admin information from the backend
    fetch(`/api/admins/${adminId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setAdmin(data.data);
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

  return (
    <Profile>
      <Header>Admin Profile</Header>
      {admin && (
        <Table>
          <tbody>
            <tr>
              {/* You can add an <Img /> component here if you want to display the admin's image */}
            </tr>
            <tr>
              <td>Name: {admin.Name}</td>
            </tr>
            <tr>
              <td>Job: {admin.Job}</td>
            </tr>
            <tr>
              <td>Phone: {admin.phone}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Profile>
  );
};

export default AdminProfile;

const Profile = styled.div`
  margin-top: 200px;
  text-align: center;
  margin-bottom: 100px;
`;

const Header = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const Table = styled.table`
  text-align: left;
  margin: 0 auto;

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
