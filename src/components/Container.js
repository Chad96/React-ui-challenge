// src/components/Container.js
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
    max-width: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-bottom: 40px; /* Extra space between content and footer */
`;

export { Container, Content };
