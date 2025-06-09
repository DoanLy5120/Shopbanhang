import { FaEye, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";
import "./style.scss"
function ProductCart({ img, name, price }) {
  return (
    <>
      <div className="featured__item">
        <div
          className="featured__item_pic"
          style={{ backgroundImage: `url(${img})` }}
        >
          <ul className="featured__item_pic_hover">
            <li>
              <FaEye />
            </li>
            <li>
              <FaShoppingCart />
            </li>
          </ul>
        </div>
        <div className="featured__item_text">
          <h6>
            <Link to="">{name}</Link>
          </h6>
          <h5>{formatter(price)}</h5>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
