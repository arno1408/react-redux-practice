import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: { email: data.email, password: data.password },
      });

      if (response.data.length > 0) {
        localStorage.setItem("token", "your-jwt-token");
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("Error logging in");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
      <p>
        Don't have an account? <a href="/signup">Signup here</a>
      </p>
      <p>
        Forgot your password? <a href="/forgot-password">Reset it here</a>
      </p>
    </form>
  );
};

export default Login;
