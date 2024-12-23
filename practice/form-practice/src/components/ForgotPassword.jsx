import React from "react";

function ForgotPassword() {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" name="email" placeholder="Enter Email" />
      <br />
      <input type="submit" value="Submit" />
    </div>
  );
}

export default ForgotPassword;
