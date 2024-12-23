import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import data from "./data/data";

function App() {
  const [feedback, setFeedback] = useState(data);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [textMsg, setTxtMsg] = useState("");
  const [newArr, setNewArr] = useState({ text: "", rating: 10 });

  const ratings = data.map((item) => {
    return item.rating;
  });

  const average = ratings.reduce((acc, val) => {
    return acc + val;
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setNewArr((prevData) => {
      return { ...prevData, text: value };
    });
    if (value.trim().length === 0) {
      setBtnDisabled(true);
      setTxtMsg("Add some text");
    } else if (value.trim().length < 9) {
      setBtnDisabled(true);
      setTxtMsg("Text must be at least 8 characters!");
    } else {
      setBtnDisabled(false);
      setTxtMsg(null);
    }
  };

  const addItem = () => {
    setFeedback((prevData) => {
      return [...prevData, { text: newArr.text, rating: newArr.rating }];
    });
    setNewArr({ text: "", rating: 10 });
    setBtnDisabled(true);
  };

  const handleRadioChange = (e) => {
    const rat = Number(e.target.value);
    setNewArr((prevRating) => {
      return { ...prevRating, rating: rat };
    });
  };

  const handleDelete = (index) => {
    setFeedback((prevFeedback) => prevFeedback.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <div>
        <input
          type="text"
          placeholder="Add a review"
          value={newArr.text}
          onChange={handleChange}
        />
        <br />
        <ul>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={`rating-${i + 1}`}>
              <input
                type="radio"
                id={`num${i + 1}`}
                name="rating"
                value={i + 1}
                onChange={handleRadioChange}
                checked={newArr.rating === i + 1}
              />
              <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
          ))}
        </ul>
        <button onClick={addItem} disabled={btnDisabled}>
          Add
        </button>
        <p>{textMsg}</p>
      </div>
      <div>{`No. of reviews (${feedback.length}) and average rating: ${(
        average / feedback.length
      ).toFixed(1)}`}</div>
      <ul>
        {feedback.map((item, index) => (
          <li key={index}>
            {`${item.text} and rating is ${item.rating}`} <button>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
