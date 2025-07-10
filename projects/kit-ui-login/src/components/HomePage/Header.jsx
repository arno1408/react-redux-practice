import "./Header.css";
import Button from "./Button";
import Title from "./Title";

const Header = () => {
  const styles = {
    fontWeight: "bold",
  };

  const btnStyles = {
    position: "relative",
    bottom: "35px",
    width: "310px",
    height: "40px",
    fontWeight: "bold",
  };

  return (
    <div className="header">
      <div className="card">
        <div className="content">
          <h1>🌱</h1>
          <Title
            header="The nature candle"
            text="All handmade with natural soy wax, Candileaf is a companion for
          all your pleasure moments"
            styles={styles}
          />
        </div>
        <Button styles={btnStyles} text="Discovery our collection" />
      </div>
    </div>
  );
};

export default Header;
