import React from "react";
import Title from "./Title";
import "./SectionC.css";
import Card from "./Card";

export default function SectionC() {
  return (
    <section className="sec-c">
      <div className="header1">
        <Title
          header="Testimonials"
          text="Some quotes from our happy customers"
        />
      </div>
      <div className="row1">
        <Card>
          <img
            className="testi1"
            src="../src/assets/testimonials/test1/cards-testimonial.png"
            alt=""
          />
        </Card>
        <Card>
          <img
            className="testi2"
            src="../src/assets/testimonials/test2/cards-testimonial.png"
            alt=""
          />
        </Card>
        <Card>
          <img
            className="testi3"
            src="../src/assets/testimonials/test3/cards-testimonial.png"
            alt=""
          />
        </Card>
      </div>
    </section>
  );
}
