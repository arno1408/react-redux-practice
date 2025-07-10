import React from "react";
import "./CartContent.css";
import { Link } from "react-router-dom";

export default function CartContent() {
  return (
    <div className="cart-content">
      <h2 className="hd-above">Your cart items</h2>
      <Link to="/home">
        <a className="back-link" href="#">
          Back to shopping
        </a>
      </Link>
      <div className="bld-heads">
        <span className="pro">Product</span>
        <span className="pri">Price</span>
        <span className="qua">Quantity</span>
        <span className="to">Total</span>
      </div>
      <hr className="hr-gray" />
      <div className="contain">
        <h1 className="spi-head">Spiced Mint Candleaf®</h1>

        <img
          className="sml-pic"
          src="../src/assets/small-card/image.png"
          alt=""
        />

        <a className="rmv" href="#">
          Remove
        </a>
        <span className="dol-1">$ 9.99</span>
        <div className="qty-again">+1-</div>
        <span className="dol-2">$ 9.99</span>
      </div>
      <hr className="hr-gray" />
      <div>
        <h2 className="sb-to">Sub-total</h2>
        <h2 className="dol-to">$ 9.99</h2>
        <p className="tx-gray">
          Tax and shipping cost will be calculated later
        </p>
        <Link to="/auth">
          <button className="chk-btn">Check-out</button>
        </Link>
      </div>
    </div>
  );
}
