import React from "react";
import "./Thanks.css";
import { FaGreaterThan } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <div className="auth-contain">
      <div className="auth-white">
        <div className="logo-white">
          <img className="lg" src="../src/assets/icon.png" />
          <h4 className="lg-txt">Candleaf</h4>
        </div>
        <span className="sp-green">
          Cart <FaGreaterThan size={13} />
        </span>
        <span className="sp-bold">
          Details <FaGreaterThan size={13} />
        </span>
        <span className="ship-txt">
          Shipping <FaGreaterThan size={13} />{" "}
        </span>
        <span className="pay-txt">
          Payment
          <FaGreaterThan size={13} />
        </span>
        <span className="chk-cnfrm">
          {" "}
          <IoIosCheckmarkCircleOutline size={90} />
        </span>
        <h1 className="pay-cnfrm">Payment Confirmed</h1>
        <span className="ord-no">ORDER #2039</span>
        <span className="ord-txt">
          {" "}
          Thank you Joe for buying Candleaf. The nature is grateful to you. Now
          that your order is confirmed it will be ready to ship in 2 days.
          Please check your inbox in the future for your order updates.
        </span>
        <a className="bck-cart" href="#">
          Print receipt
        </a>
        <Link to="/home">
          <button className="go-ship"> Back to shopping</button>
        </Link>
      </div>
      <div className="auth-gray">
        <img
          className="sml-img-2"
          src="../src/assets/small-card/image.png"
          alt=""
        />
        <h4 className="smc-small">Spiced Mint Candleaf®</h4>
        <h3 className="dol-gray-green">$ 9.99</h3>

        <hr className="hr-gray" />
        <span className="subto">Subtotal</span>
        <span className="ship">Shipping</span>
        <span className="dol-gray-sm">$ 9.99</span>
        <span className="drk-gray">Free Shipping</span>
        <hr className="hr-gray" />
        <span className="to-gray">Total</span>
        <span className="dol-tot">$ 9.99</span>
      </div>
    </div>
  );
}
