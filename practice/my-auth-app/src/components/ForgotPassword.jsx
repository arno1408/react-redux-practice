import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (!email) {
      alert("Please enter a valid email");
      return;
    }

    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
    setGeneratedOtp(otp);

    emailjs
      .send(
        "service_2zsyiwg", // Replace with your EmailJS service ID
        "template_tawqb3d", // Replace with your EmailJS template ID
        {
          to_email: email,
          otp,
        },
        "px21w0iIzqFw7o2zG" // Replace with your EmailJS user ID
      )
      .then(() => {
        alert(`OTP sent to ${email}`);
      })
      .catch(() => {
        alert("Error sending OTP.");
      });
  };

  const handleVerifyOtp = () => {
    if (parseInt(otp, 10) === generatedOtp) {
      alert("OTP verified");
      navigate("/reset-password", { state: { email } });
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>
      <br />
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
};

export default ForgotPassword;
