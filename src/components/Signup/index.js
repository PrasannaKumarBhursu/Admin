import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Wrapper,
  Title,
  Form,
  Label,
  Error,
  Input,
  ButtonWrapper,
  Button,
} from "./SignupStyles";

const Signup = () => {
  const navigate = useNavigate();
  const [adminName, setName] = useState("");
  const [adminMail, setEmail] = useState("");
  const [adminPassword, setPassword] = useState("");
  const [error, setError] = useState("");

  const callbackToken = (TokenData) => {
    console.log(TokenData);
    navigate("/login");
  };

  const callBackData = (Data) => {
    Data.json().then(callbackToken);
  };

  const handleSignup = () => {
    // Perform signup logic here
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
    } else {
      setError(""); // Clear any previous error
      console.log(
        JSON.stringify({
          username: adminName,
          password: adminPassword,
        })
      );
      fetch("http://localhost:3001/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: adminName,
          password: adminPassword,
        }),
      }).then(callBackData);
      // Redirect to another page after successful signup
    }
  };

  const validateInputs = () => {
    if (
      adminName.trim() === "" ||
      adminMail.trim() === "" ||
      adminPassword.trim() === ""
    ) {
      return "Please enter all fields.";
    }

    if (!validateEmail(adminMail)) {
      return "Invalid email address.";
    }

    return ""; // No validation error
  };

  const validateEmail = (email) => {
    // Basic email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Wrapper>
      <Title>Admin Signup</Title>
      <Form>
        <div>
          <Label>Name:</Label>
          <Input
            type="text"
            value={adminName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label>Email:</Label>
          <Input
            type="email"
            value={adminMail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label>Password:</Label>
          <Input
            type="password"
            value={adminPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <Error>{error}</Error>}
        <ButtonWrapper>
          <Button type="button" onClick={handleSignup}>
            Signup
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default Signup;
