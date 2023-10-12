import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";

function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isDarkMode } = useContext(DarkModeContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/students/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log("data", data);
      // If sign-in is successful, save the token to local storage and redirect to the patient profile page
      localStorage.setItem("token", data.data.token);
      const studentId = data.data.studentId;
      navigate(`/studentLogin/${studentId}`); // Use backticks for the template string
      console.log("data.data.studentId", data.data.studentId)
    } else {
      // If sign-in fails, display an error message
      alert("username or password are not cortect ");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <Label isDarkMode={isDarkMode}>
          Username
          <Input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Label>
      </Div>
      <Div>
        <Label isDarkMode={isDarkMode}>
          Password
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label>
      </Div>
      <Button isDarkMode={isDarkMode} type="submit">
        Sign In
      </Button>
    </Form>
  );
}

export default StudentLogin;
const Form = styled.form`
  padding: 200px;
`;
const Label = styled.label`
  width: 50%;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
  &:hover {
    color: #db7093;
  }
`;
const Input = styled.input`
  height: 20px;
  width: 70%;
  border: 2px solid #1e3d58;
  margin-top: 5px;
  margin-left: 5px;
`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  margin-left: 380px;
  border-radius: 4px;
  background-color: ${(props) => (props.isDarkMode ? "#bb5a7d" : "#bb5a7d")};
  color: ${(props) => (props.isDarkMode ? "black" : "white")};
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-left: 280px;
`;
