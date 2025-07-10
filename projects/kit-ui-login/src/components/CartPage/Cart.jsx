import React from "react";
import NavCart from "./NavCart";
import CartContent from "./CartContent";
import CartFoot from "./CartFoot";

export default function Cart() {
  return (
    <>
      <NavCart></NavCart>
      <CartContent></CartContent>
      <CartFoot></CartFoot>
    </>
  );
}
