import "./Card.css";

const Card = ({ styles, children }) => {
  return (
    <div style={styles} className="card1">
      {children}
    </div>
  );
};

export default Card;
