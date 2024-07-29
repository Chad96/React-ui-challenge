// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-top: 1px solid #ddd;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NextPageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    align-self: flex-end;
    margin-right: 50%;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <div style={{ display: "flex", alignItems: "center" }}>
      <a href="/terms" style={{ color: "black", textDecoration: "none" }}>
        Terms Policy
      </a>
      <span style={{ margin: "0 8px", fontSize: "24px" }}>•</span>
      <a
        href="/customer-story"
        style={{ color: "black", textDecoration: "none" }}
      >
        Customer Story
      </a>
    </div>

    <NextPageIcon>
      <FaArrowRight />
    </NextPageIcon>
  </FooterWrapper>
);

export default Footer;
