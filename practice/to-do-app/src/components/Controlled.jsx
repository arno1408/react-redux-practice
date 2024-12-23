import React, { useRef, useState } from "react";

const Controlled = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    inputRef.current.select();
  };

  return (
    <>
      <label htmlFor="text">Add Text:</label>
      <br />
      <input
        type="text"
        ref={inputRef}
        name="Arno"
        defaultValue={"defaultValue"}
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Controlled;
