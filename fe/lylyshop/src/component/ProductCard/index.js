import { FaEye, FaShoppingCart } from "react-icons/fa";
import { generatePath, Link } from "react-router-dom";
import { formatter } from "utils/formatter";
import "./style.scss"
import { ROUTERS } from "utils/router";
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
            <Link to={generatePath(ROUTERS.USER.DETAIL, {id:1})}>{name}</Link>
          </h6>
          <h5>{formatter(price)}</h5>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
