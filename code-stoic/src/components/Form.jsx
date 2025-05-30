import { useState } from "react";

function Form() {
  // const [name, setName] = useState("");

  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  // function handleChange(e) {
  //   setName(e.target.value);
  // }
  return (
    <form action="">
      <h1>Form</h1>
      <p>
        {name.firstName} - {name.lastName}
      </p>
      <label htmlFor="">Firstname:</label>
      <input
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        type="text"
        value={name.firstName}
      />{" "}
      <br /> <br />
      <label htmlFor="">Lastname: </label>
      <input
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        type="text"
        value={name.lastName}
      />{" "}
      <br />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  );
}

export default Form;
