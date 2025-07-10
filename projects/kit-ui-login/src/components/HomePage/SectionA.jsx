import React from "react";
import Card from "./Card";
import "./SectionA.css";
import Title from "./Title";

function SectionA() {
  return (
    <section className="sec-a">
      <Title
        header="Products"
        text="Order it for you or for your beloved ones"
      />
      <div className="card-container">
        <div className="row">
          <Card>
            <img
              className="img"
              src="../src/assets/product-card/pc1/product-card.png"
            ></img>
          </Card>
          <Card>
            <img
              className="img"
              src="../src/assets/product-card/pc2/product-card.png"
            ></img>
          </Card>
          <Card>
            <img
              className="img"
              src="../src/assets/product-card/pc3/product-card.png"
            ></img>
          </Card>
          <Card>
            <img
              className="img"
              src="../src/assets/product-card/pc4/product-card.png"
            ></img>
          </Card>
        </div>
        <div className="row">
          <Card>
            <img
              className="img"
              src="../src/assets/product-card/pc5/product-card.png"
            ></img>
          </Card>
          <Card>
            <img
              className="img"
              src="../src/assets/product-card/pc6/product-card.png"
            ></img>
          </Card>
          <Card>
            <img
              className="img"
              src="../src/assets/product-card/pc7/product-card.png"
            ></img>
          </Card>
          <Card>
            <img
              className="img"
              src="../src/assets/product-card/pc8/product-card.png"
            ></img>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default SectionA;
