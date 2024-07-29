// src/components/Header.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaBars } from "react-icons/fa";
import Button from "./Button";

// Import Google Fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

  body {
    font-family: 'Nunito', sans-serif;
  }
`;

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;

  @media (max-width: 768px) {
    margin-left: -55%;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 10px;
    margin-left: -60%;
  }
`;

const DropdownIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 60%;
    margin-top: -69px;
  }
`;

const Header = () => (
  <>
    <GlobalStyle />
    <HeaderWrapper>
      <Logo>
        <b>Lyf-)</b>
        <span style={{ fontSize: "16px" }}>
          {" "}
          <b>/isurance@tiropay.au</b>
        </span>
      </Logo>
      <Nav>
        <Button
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            backgroundColor: "white",
            color: "black",
            border: "gray 1px solid",
            borderRadius: "50px",
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: "bold",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ccc")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
        >
          Log In
        </Button>

        <Button style={{ fontFamily: "'Nunito', sans-serif" }}>
          <b>Get Started</b>
        </Button>
        <DropdownIcon>
          <FaBars size={24} />
        </DropdownIcon>
      </Nav>
      <MobileMenuIcon>
        <FaBars size={24} />
      </MobileMenuIcon>
    </HeaderWrapper>
  </>
);

export default Header;
