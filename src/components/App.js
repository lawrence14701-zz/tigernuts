import React from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Container from "./Container/Container";
import BowlofTigerNuts from "../assets/images/bowl.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Container id="main">
          <Card img={BowlofTigerNuts} />
        </Container>
      </div>
    </>
  );
}

export default App;
