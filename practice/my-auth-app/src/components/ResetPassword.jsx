import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation(); // Extract email passed from the OTP page

  const onSubmit = async (data) => {
    const email = location.state?.email; // Retrieve email from the previous step
    if (!email) {
      alert("No email provided. Please try again.");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:5000/users/${email}`,
        {
          password: data.password,
        }
      );

      if (response.status === 200) {
        alert("Password reset successfully! Redirecting to login...");
        navigate("/login");
      } else {
        alert("Error resetting password.");
      }
    } catch (error) {
      alert("Server error. Unable to reset password.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Reset Password</h2>
      <div>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          placeholder="New Password"
          type="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
