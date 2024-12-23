import { useState } from "react";
import css from "./Accordian.module.css";
import data from "./data";

function Accordian() {
  const [single, setSingle] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleSingleSelect = (getId) => {
    setSingle(getId === single ? null : getId);
  };

  const handleMultiSelect = (getId) => {
    const copyMultiple = [...multiple];
    const findIndex = copyMultiple.indexOf(getId);

    if (findIndex === -1) copyMultiple.push(getId);
    else copyMultiple.splice(findIndex, 1);

    setMultiple(copyMultiple);
  };

  return (
    <>
      <h1 className={css.Heading}>Accordian</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <ul style={{ marginTop: "40px" }}>
        {data && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <li style={{ marginTop: "40px" }} key={index}>
                {item.question} <br />
                <br />
                <div
                  onClick={
                    toggle
                      ? () => handleMultiSelect(item.id)
                      : () => handleSingleSelect(item.id)
                  }
                  style={{ cursor: "pointer" }}
                >
                  +
                </div>
                <br />
                <br />
                {toggle ? (
                  multiple.indexOf(item.id) !== -1 && <div>{item.answer}</div>
                ) : single === item.id ? (
                  <div>{item.answer}</div>
                ) : null}
              </li>
            );
          })
        ) : (
          <div>No data found!</div>
        )}
      </ul>
    </>
  );
}

export default Accordian;
