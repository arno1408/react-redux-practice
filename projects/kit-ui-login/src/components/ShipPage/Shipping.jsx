import React from "react";
import "./Shipping.css";
import { FaGreaterThan } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Shipping() {
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
        <div className="add-ress">
          <span className="con-gray">Contact</span>
          <span className="con-mail">joe.spagnuolo@uxbly.com</span>
          <span className="ed-green-one">Edit</span>
          <hr />
          <span className="con-gray-two">Ship to</span>
          <br />
          <span className="con-mail-two">Campobello di Licata AG, Italia</span>
          <span className="ed-green-two">Edit</span>
        </div>
        <h2 className="ship-header">Shipping Method</h2>
        <div className="std-ship">
          <span className="std-ship-left">
            <MdRadioButtonUnchecked /> Standard Shipping
          </span>
          <span className="free-std">Free</span>
        </div>
        <Link to="/auth">
          <a className="bck-cart" href="#">
            Back to details
          </a>
        </Link>
        <Link to="/payment">
          <button className="go-ship">Go to payment</button>
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
        <input className="coup" type="text" placeholder="Coupon code" />
        <button className="add-gray">Add code</button>
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
