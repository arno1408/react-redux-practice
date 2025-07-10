import "./NavCart.css";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

function NavCart() {
  return (
    <>
      <nav>
        <div>
          <img src="../src/assets/icon.png" />
          <h4>Candleaf</h4>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">
                <strong>Discovery</strong>
                <RiArrowDownSLine />
              </a>
            </li>
            <li>
              <a href="#">
                <strong>About</strong>
              </a>
            </li>
            <li>
              <a href="#">
                <strong>Contact us</strong>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#">
            <FaRegUser className="icon" />
          </a>
          <a href="#">
            <BsCart3 className="icon" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavCart;
