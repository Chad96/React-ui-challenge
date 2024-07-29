// src/App.js
import React from "react";
import { Container, Content } from "./components/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import PlansSection from "./components/PlansSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Main />
        <PlansSection />
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
