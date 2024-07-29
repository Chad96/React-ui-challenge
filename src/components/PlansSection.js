// src/components/PlansSection.js
import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  padding: 20px 0;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ExploreAll = styled.a`
  font-size: 16px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    align-self: flex-end;
    margin-right: 12%;
    margin-top: -12.5%;
  }
`;

const PlanCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PlanCard = styled.div`
  background-color: ${(props) => props.bgColor || "white"};
  padding: 20px;
  border-radius: 10px;
  width: calc(25% - 15px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    width: 81%;
    margin-left: 0%;
    margin-right: -3%;
  }
`;

const PlanTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 30px;
`;

const PlanDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const PlanDetail = styled.p`
  font-size: 16px;
  font-weight: ;
  margin-bottom: 10px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 30%;
  background-color: ${(props) => (props.color === "white" ? "black" : "white")};
  color: ${(props) => (props.color ? props.color : "black")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.color ? props.color : "black")};
    color: ${(props) => (props.color === "black" ? "white" : "black")};
  }
`;

const PlansSection = () => (
  <Section>
    <Heading>
      <Title>Featured Plans</Title>
      <ExploreAll href="#">Explore All</ExploreAll>
    </Heading>
    <PlanCards>
      <PlanCard bgColor="#7EDFA5">
        <PlanTitle>
          <h5
            style={{
              color: "grey",
              marginBottom: "0",
              position: "relative",
              top: "-18px",
            }}
          >
            STRATEGY
          </h5>
          Money Momentum
        </PlanTitle>

        <PlanDescription>
          Tract Premium helps you start saver investments insights covering.
          <hr></hr>
        </PlanDescription>
        <PlanDetail>3 yrs CAGR</PlanDetail>
        <PlanDetail>
          <b style={{ fontSize: "24px" }}>7.20%</b>{" "}
          {/* Adjust the value as needed */}
        </PlanDetail>

        <ArrowContainer color="white">
          <FaArrowRight />
        </ArrowContainer>
      </PlanCard>
      <PlanCard bgColor="#000000" style={{ color: "white" }}>
        <PlanTitle>
          <h5
            style={{
              color: "grey",
              marginBottom: "0",
              position: "relative",
              top: "-18px",
            }}
          >
            PLANS
          </h5>
          Long-Term
        </PlanTitle>

        <PlanDescription>
          Create a vision. To get started, imagine your dream life.
          <hr></hr>
        </PlanDescription>
        <PlanDetail>25 yrs CAGR</PlanDetail>
        <PlanDetail>
          <b style={{ fontSize: "24px" }}>14.20%</b>{" "}
          {/* Adjust the value as needed */}
        </PlanDetail>
        <ArrowContainer color="black">
          <FaArrowRight />
        </ArrowContainer>
      </PlanCard>
      <PlanCard bgColor="#DAB8FF">
        <PlanTitle>
          <h5
            style={{
              color: "grey",
              marginBottom: "0",
              position: "relative",
              top: "-18px",
            }}
          >
            STRATEGY
          </h5>
          Focussed
        </PlanTitle>

        <PlanDescription>
          Be focused Life planning, however, can serve as a roadmap or guide.
          <hr></hr>
        </PlanDescription>
        <PlanDetail>1 yr returns</PlanDetail>
        <PlanDetail>
          <b style={{ fontSize: "24px" }}>11.20%</b>{" "}
          {/* Adjust the value as needed */}
        </PlanDetail>
        <ArrowContainer color="white">
          <FaArrowRight />
        </ArrowContainer>
      </PlanCard>
      <PlanCard bgColor="#FFFFA8">
        <PlanTitle>
          <h5
            style={{
              color: "grey",
              marginBottom: "0",
              position: "relative",
              top: "-18px",
            }}
          >
            PLANS
          </h5>
          Fixed Income
        </PlanTitle>

        <PlanDescription>
          Get multiple benefits, and lumpsum option & Guaranteed Returns.
          <hr></hr>
        </PlanDescription>
        <PlanDetail>5 yrs CAGR</PlanDetail>
        <PlanDetail>
          <b style={{ fontSize: "24px" }}>8.20%</b>{" "}
          {/* Adjust the value as needed */}
        </PlanDetail>
        <ArrowContainer color="white">
          <FaArrowRight />
        </ArrowContainer>
      </PlanCard>
    </PlanCards>
  </Section>
);

export default PlansSection;
