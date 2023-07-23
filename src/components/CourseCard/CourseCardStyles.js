import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

export const CardPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;
