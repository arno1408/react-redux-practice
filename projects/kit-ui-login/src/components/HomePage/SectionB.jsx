import React from "react";
import "./SectionB.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Title from "./Title";
import Button from "./Button";

const SectionB = () => {
  const styles = {
    color: "green",
  };

  const btnStyles = {
    position: "relative",
    top: "30px",
  };
  return (
    <section className="sectionB">
      <div className="left-content">
        <Title
          header="Clean and fragrant soy wax"
          text="Made for your home and your wellness"
          styles={styles}
        />
        <ul>
          <li>
            <IoIosCheckmarkCircleOutline />
            <strong>Eco-sustainable:</strong> All recyclable materials, 0% CO2
            emissions
          </li>
          <li>
            <IoIosCheckmarkCircleOutline />
            <strong>Hyphoallergenic:</strong> 100% natural, human friendly
            ingredients
          </li>
          <li>
            <IoIosCheckmarkCircleOutline />
            <strong>Handmade:</strong> All candles are craftly made with love.
          </li>
          <li>
            <IoIosCheckmarkCircleOutline />
            <strong>Long burning:</strong> No more waste. Created for last long.
          </li>
        </ul>
        <Button styles={btnStyles} text="Learn More" />
      </div>
      <div className="right-content">
        <img className="soy-wax" src="../src/assets/soy-wax/image.png" alt="" />
      </div>
    </section>
  );
};

export default SectionB;
