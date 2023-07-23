import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Error,
  ButtonWrapper,
  Button,
} from "./LoginStyles";

const Login = () => {
  const navigate = useNavigate();
  const [{ Token }, setCookie] = useCookies("Token");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const callbackToken = (TokenData) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 24 * 1000); // Set expiration time to 1 day

    setCookie("Token", TokenData.token, { expires: expirationDate });
    navigate("/");
  };

  const callBackData = (Data) => {
    Data.json().then(callbackToken);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform login logic here
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username/email and password.");
    } else {
      setError(""); // Clear any previous error

      fetch("http://localhost:3005/admin/login", {
        method: "POST",
        headers: {
          username,
          password,
        },
      }).then(callBackData);
    }
  };

  const handleCreateAccount = () => {
    // Redirect to create account page or perform create account logic
    navigate("/signup");
  };

  useEffect(() => {
    console.log(Token);

    if (Token !== undefined) {
      navigate("/");
    }
  }, []);

  return (
    <Wrapper>
      <Title>Admin Login</Title>
      <Form onSubmit={handleLogin}>
        <div>
          <Label>Username or Email:</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <Error>{error}</Error>}
        <ButtonWrapper>
          <Button type="submit">Login</Button>
          <Button type="button" onClick={handleCreateAccount}>
            Create Account
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default Login;
