import { useState } from "react";
import css from "./StarRating.module.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getId) => {
    setRating(getId);
  };

  const handleMouseEnter = (getId) => {
    setHover(getId);
  };

  const handleMouseLeave = (getId) => {
    setHover(rating);
  };

  return (
    <div>
      <h1>Star Rating</h1>
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            style={{ cursor: "pointer" }}
            className={index <= (hover || rating) ? css.active : css.inactive}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
