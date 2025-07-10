import React from "react";
import Title from "./Title";
import "./SectionD.css";
import Card from "./Card";

export default function SectionD() {
  return (
    <section className="sec-d">
      <div className="header2">
        <Title
          header="Popular"
          text="Our top selling product that you may like"
        />
      </div>
      <div className="row2">
        <Card>
          <img
            className="img1"
            src="../src/assets/product-card/pc1/product-card.png"
            alt=""
          />
        </Card>
        <Card>
          <img
            className="img1"
            src="../src/assets/product-card/pc2/product-card.png"
            alt=""
          />
        </Card>
        <Card>
          <img
            className="img1"
            src="../src/assets/product-card/pc3/product-card.png"
            alt=""
          />
        </Card>
        <Card>
          <img
            className="img1"
            src="../src/assets/product-card/pc4/product-card.png"
            alt=""
          />
        </Card>
      </div>
    </section>
  );
}
