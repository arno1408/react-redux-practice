import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
    user_account_type_id: 1,
    invited_referral_code: null,
    // invited_referral_code: UserInputs.invited_referral_code == "" ? null : UserInputs.invited_referral_code
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: signUp.email,
      first_name: signUp.first_name,
      last_name: signUp.last_name,
      password: signUp.password,
      confirm_password: signUp.confirm_password,
      user_account_type_id: signUp.user_account_type_id,
      invited_referral_code: signUp.user_account_type_id,
      // invited_referral_code: UserInputs.invited_referral_code == "" ? null : UserInputs.invited_referral_code
    };

    console.log(payload);

    axios
      .post("http://65.1.110.186:8000/signup/", payload)
      .then((res) => {
        console.log(res);
        alert("User Successfully created");
        localStorage.setItem("accessToken", res.data.message.token.access);
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="signup-body">
      <form onSubmit={handleSubmit} className="sign-up">
        <div>
          <h3>Sign Up</h3>
        </div>
        <label className="lbl3" htmlFor="email">
          Email address
        </label>
        <br />
        <input
          className="inpt1"
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br />
        <label className="lbl3 fn" htmlFor="text">
          First Name
        </label>
        <br />
        <input
          className="inpt1"
          type="text"
          id="text"
          name="first_name"
          placeholder="Enter First Name"
          onChange={handleChange}
        />
        <br />
        <label className="lbl3 ln" htmlFor="text">
          Last Name
        </label>
        <br />
        <input
          className="inpt1"
          type="text"
          id="text"
          name="last_name"
          placeholder="Enter Last Name"
          onChange={handleChange}
        />
        <br />
        <label className="lbl3 p" htmlFor="password">
          Password
        </label>
        <br />
        <input
          className="inpt1"
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <br />
        <label className="lbl3 cp" htmlFor="confirm">
          Confirm Password
        </label>
        <br />
        <input
          className="inpt1"
          type="password"
          id="confirm"
          name="confirm_password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <br />
        <button className="btn2" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <Link className="lnk3" to="/">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}
