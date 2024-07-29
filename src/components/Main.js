import React from "react";
import styled from "styled-components";
import Button from "./Button";

const MainWrapper = styled.main`
  text-align: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
  background-color: white;
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 24px;
    background-color: white;
    margin-right: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    background-color: white;
    margin-right: 20px;
  }
`;

const EmailInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: fit-content;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    left: 10px;
    width: 15px;
    height: 15px;
  }
`;

const EmailInput = styled.input`
  padding: 10px;
  padding-left: 30px;
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 50px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

const Main = () => (
  <MainWrapper>
    <Title>
      <br />
      <b
        style={{
          fontSize: "59px",
          fontWeight: "extrabold",
          fontFamily: "'inter', sans-serif",
        }}
      >
        Life Planning, Making
        <br />
        Easy to Turn Dreams a Reality.
      </b>
    </Title>

    <Subtitle>Get Exclusive offers on purchase of any plans</Subtitle>
    <EmailInputWrapper>
      <InputWrapper>
        <img src="/icon.png" alt="Arrow Icon" />
        <EmailInput type="email" placeholder="Your Email" />
      </InputWrapper>
      <Button>
        <b>Sign Up</b>
      </Button>
    </EmailInputWrapper>
  </MainWrapper>
);

export default Main;
