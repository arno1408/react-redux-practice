import React from "react";
import "./Payment.css";
import { FaGreaterThan } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Payment() {
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
        <h3 className="pay-met">Payment method</h3>
        <div className="credit-card">
          <div className="credit-title">Credit Card</div>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Holder Name" />
          <input type="text" placeholder="Expiration (MM/YY)" />
          <input type="text" placeholder="CVV" />
        </div>
        <div className="tax-info">
          <h3 className="tax-head">Tax Informations</h3>
          <input type="text" />
          <input type="text" />
        </div>
        <div className="bill-address">
          <h3 className="bill-head">Billing Address</h3>
          <span>
            <MdRadioButtonUnchecked size={13} />
            Same as the shipping address
          </span>
          <hr />
          <span>
            <MdRadioButtonUnchecked size={13} />
            Use a different address for billing
          </span>
        </div>
        <Link to="/shipping">
          <a className="bck-cart" href="#">
            Back to shipping
          </a>
        </Link>
        <Link to="/thanks">
          <button className="go-ship"> Pay now</button>
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
