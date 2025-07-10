import React from "react";
import "./Auth.css";
import { FaGreaterThan } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Auth() {
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
        <h2 className="conta">Contact</h2>
        <span className="do-you">
          Do you have an account? <span className="lgn-green"> Login</span>
        </span>
        <input
          className="em-mob"
          type="text"
          placeholder="Email or mobile phone number"
        />
        <span className="add-me">
          <MdCheckBoxOutlineBlank size={16} />
          Add me to Candleaf newsletter for a 10% discount
        </span>
        <h2 className="ship-add">Shipping Address</h2>
        <input className="nam-white" type="text" placeholder="Name" />
        <input className="nam-sec" type="text" placeholder="Second Name" />
        <input
          className="nam-add"
          type="text"
          placeholder="Address and number"
        />
        <input
          className="ship-note"
          type="text"
          placeholder="Shipping note (optional)"
        />
        <input className="city" type="text" placeholder="City" />
        <inpu className="po-code" type="text" placeholder="Postal Code" />
        <input className="provi" type="text" placeholder="Postal Code" />
        <input className="country" type="text" placeholder="Province" />
        <input className="con-2" type="text" placeholder="Country/Region" />
        <span className="chk-2">
          <MdCheckBoxOutlineBlank size={16} />
          Save this informations for a future fast checkout
        </span>
        <Link to="/cart">
          <a className="bck-cart" href="#">
            Back to cart
          </a>
        </Link>
        <Link to="/shipping">
          <button className="go-ship">Go to shipping</button>
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
        <span className="drk-gray">Calculated at the next step</span>
        <hr className="hr-gray" />
        <span className="to-gray">Total</span>
        <span className="dol-tot">$ 9.99</span>
      </div>
    </div>
  );
}
