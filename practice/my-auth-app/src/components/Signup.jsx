import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/users", {
        email: data.email,
        password: data.password,
      });

      if (response.status === 201) {
        alert("Signup successful! Redirecting to login...");
        navigate("/login");
      }
    } catch (error) {
      alert("User already exists or server error!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Signup</h2>
      <div>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          placeholder="Password"
          type="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Sign Up</button>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </form>
  );
};

export default Signup;
