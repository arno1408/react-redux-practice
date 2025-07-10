import React from "react";
import "./Main.css";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";

const Main = () => {
  return (
    <div className="main">
      <SectionA></SectionA>
      <SectionB></SectionB>
      <SectionC></SectionC>
      <SectionD></SectionD>
    </div>
  );
};

export default Main;
