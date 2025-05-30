function Fruits({ name, price, soldout }) {
  return (
    <>
      <li>
        {name} ${price} {soldout ? "Sold Out!" : ""}
      </li>

      {/* {price > 5 ? (
        <li>
          {name} ${price}
        </li>
      ) : (
        ""
      )} */}
    </>
  );
}

export default Fruits;
