import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RoleContext } from "./RoleProvider";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { setUser } = useContext(RoleContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      setError("Please enter all fields");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${data.email}&password=${data.password}`
      );

      if (response.data.length === 0) {
        setError("Invalid credentials");
      } else {
        const user = response.data[0];
        setUser(user); // Store user info in context

        if (user.role === "admin") {
          navigate("/admin");
        } else if (user.role === "user") {
          navigate("/user");
        }
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
