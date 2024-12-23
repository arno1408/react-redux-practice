import React from "react";

function ChildComponent({ value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("The input value is :" + value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">
        input: <br />
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit"> Submit</button>
    </form>
  );
}

export default ChildComponent;
