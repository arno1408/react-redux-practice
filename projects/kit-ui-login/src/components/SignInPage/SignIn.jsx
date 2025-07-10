import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignIn({
      ...signIn,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");

    const payload = {
      email: signIn.email,
      password: signIn.password,
    };

    axios
      .post("http://65.1.110.186:8000/signin/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("Login success");
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="signin-body">
      <form onSubmit={handleSubmit} className="sign-in">
        <div>
          <h2>Sign in to your account</h2>
        </div>
        <div className="bx1">
          <label className="lbl1" htmlFor="email">
            Email address
          </label>
          <br />

          <input
            className="inpt"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </div>
        <br />
        <label className="lbl2" htmlFor="password">
          Password{" "}
          <a className="link1" href="#">
            Forgot Password?
          </a>
        </label>
        <br />
        <input
          className="inpt"
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <br />
        <button className="btn1" type="submit">
          Sign In
        </button>
        <p className="gray">
          Not a member?
          <Link className="lnk1" to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
