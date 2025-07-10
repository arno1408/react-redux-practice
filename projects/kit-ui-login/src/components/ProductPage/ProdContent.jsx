import React from "react";
import "./ProdContent.css";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ProdContent() {
  return (
    <div className="prod-content">
      <div className="prod-content-left">
        <img src="../src/assets/spiced-mint/image.png" alt="" />
        <p className="txt-1">All hand-made with natural soy wax, Candleaf is</p>
        <p className="txt-2">made for your pleasure moments.</p>
        <p className="txt-3">🚚 FREE SHIPPING</p>
      </div>
      <div className="prod-content-right">
        <h2 className="main-head">Spiced Mint Candleaf®</h2>
        <div className="prod-inner-content">
          <div className="prod-inner-left">
            <h2 className="dollar">$ 9.99</h2>
            <span className="qty">Quantity</span>
            <div className="qty-btn">+1-</div>
          </div>
          <div className="prod-inner-right">
            <div className="radio-one">
              <MdRadioButtonUnchecked className="radio-button" size={13} />
              <span className="one-time">One time purchase</span>
            </div>

            <div className="inner-bx">
              <MdRadioButtonUnchecked size={13} />
              <span className="aligned-text">
                Subscribe and delivery every{" "}
              </span>
              <div className="wk">
                4 weeks
                <RiArrowDownSLine className="radio-button" />
              </div>
              <p className="dmy-txt">
                Subscribe now and get the 10% of discount
              </p>
              <p className="dmy-txt">
                on every recurring order. The discount will
              </p>
              <p className="dmy-txt">
                be applied at checkout.{" "}
                <span className="dmy-txt-green">See details</span>
              </p>
            </div>
          </div>
          <Link to="/cart">
            <button className="cart-btn">
              <BsCart3 />+ Add to cart
            </button>
          </Link>
          <div className="info-box">
            <p>
              <strong> Wax:</strong> Top grade Soy wax that delivers a smoke
              less, consistent burn
            </p>
            <p>
              <strong>Fragrance:</strong> Premium quality ingredients with
              natural essential oils{" "}
            </p>
            <p>
              <strong>Burning Time:</strong>Burning Time: 70-75 hours{" "}
              <strong> Dimension:</strong> 10cm x 5cm <strong> Weight:</strong>{" "}
              400g{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
