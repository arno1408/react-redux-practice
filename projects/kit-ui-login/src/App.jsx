import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignInPage/SignIn";
import SignUp from "./components/SignUpPage/SignUp";
import Home from "./components/HomePage/Home";
import Product from "./components/ProductPage/Product";
import Cart from "./components/CartPage/Cart";
import Auth from "./components/AuthPage/Auth";
import Shipping from "./components/ShipPage/Shipping";
import Thanks from "./components/Thanks/Thanks";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/product" element={<Product />} />
        </Routes>
        <Routes>
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
        <Routes>
          <Route exact path="/shipping" element={<Shipping />} />
        </Routes>
        <Routes>
          <Route exact path="/thanks" element={<Thanks />} />
        </Routes>
        <Routes>
          <Route exact path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
