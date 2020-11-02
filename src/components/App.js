import React from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Container from "./Container/Container";
import BowlofTigerNuts from "../assets/images/bowl.jpg";
import Nuts from "../assets/images/nuts.jpg";

import "./App.css";
import Buy from "./Buy/Buy";

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
            body="Tiger nuts have been cultivated by humans for centuries. Also known as chufa nuts and earth almonds, the earliest records of their use dates back to Neolithic Egypt. From there, its cultivation eventually spread to North Africa and the Iberian Peninsula. What's more, the Spanish have been using it to make horchata (a creamy beverage) since the 18th century. Despite its name, the tiger nut is actually a tuber, not a nut. A tuber is a portion of a plant's stem that usually sits beneath the surface of the soil. Tubers look similar to roots, but are generally thicker. "
          />
          <Card
            img={Nuts}
            title="Benifits of Tiger Nuts"
            body="Like all nuts, tiger nuts have an intensely concentrated energy content. Per unit volume, they contain an extraordinarily high amount of healthy fats and protein to support your body. As a protein-rich food, tiger nuts are a great way to stave off hunger pangs and stabilize blood sugar."
          />
        </Container>
        <Container id="buy">
          <Buy />
        </Container>
      </div>
    </>
  );
}

export default App;
