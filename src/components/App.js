import React from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Container from "./Container/Container";
import BowlofTigerNuts from "../assets/images/bowl.jpg";
import Nuts from "../assets/images/nuts.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Container id="main">
          <Card
            orientation="left"
            img={BowlofTigerNuts}
            title="What are Tiger Nuts"
            body="Tiger nuts have been cultivated by humans for centuries. Also known as chufa nuts and earth almonds, the earliest records of their use dates back to Neolithic Egypt. From there, its cultivation eventually spread to North Africa and the Iberian Peninsula. What's more, the Spanish have been using it to make horchata (a creamy beverage) since the 18th century."
          />
          <Card
            img={Nuts}
            title="Benifits of Tiger Nuts"
            body="Tiger nuts have been cultivated by humans for centuries. Also known as chufa nuts and earth almonds, the earliest records of their use dates back to Neolithic Egypt. From there, its cultivation eventually spread to North Africa and the Iberian Peninsula. What's more, the Spanish have been using it to make horchata (a creamy beverage) since the 18th century."
          />
        </Container>
      </div>
    </>
  );
}

export default App;
