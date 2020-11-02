import React from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Container from "./Container/Container";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Container id="main">
          <Card />
        </Container>
      </div>
    </>
  );
}

export default App;
