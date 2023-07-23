import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
`;

export const Title = styled.h2`
  color: #007bff;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
`;

export const Label = styled.label`
  color: #333;
  margin-bottom: 10px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const Error = styled.div`
  color: #ff0000;
  margin-bottom: 15px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
