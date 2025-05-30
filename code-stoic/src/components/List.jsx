import Fruits from "./Fruits";

function List() {
  // let fruits = ["orange", "apple", "mango", "banana"];
  {
    /* <li key={fruit.name}>
    {fruit.name} ${fruit.price}
  </li> */
  }

  const fruits = [
    { name: "Apple", price: 10, soldOut: true },
    { name: "Orange", price: 7, soldOut: false },
    { name: "Mango", price: 3, soldOut: false },
    { name: "Banana", price: 5, soldOut: true },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <Fruits
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldOut}
          />
        ))}
      </ul>
    </>
  );
}

export default List;
