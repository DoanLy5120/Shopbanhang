import { memo } from "react";
import "./style.scss";
import { formatter } from "utils/formatter";
import { Quantity } from "component";
import { FaWindowClose } from "react-icons/fa";
function ShoppingCart() {
  return (
    <>
      <div className="container">
        <div className="table_cart">
          <table>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="shopping__cart_item">
                  <img src="" alt="product-pic" />
                  <h4>Tên sản phẩm 1</h4>
                </td>
                <td>{formatter(200000)}</td>
                <td>
                  <Quantity quantity="2" hasAddToCart={false} />
                </td>
                <td>{formatter(400000)}</td>
                <td className="icon_close">
                  <FaWindowClose />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="shopping__continue">
              <h3>Mã giảm giá</h3>
              <div className="shopping__discount">
                <input type="text" placeholder="Nhập mã giảm giá" />
                <button type="button" className="button-submit">Áp dụng</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shopping__checkout">
                <h2>Tổng đơn</h2>
                <ul>
                    <li>Số lượng: <span>{2}</span></li>
                    <li>Thành tiền: <span>{formatter(200000)}</span></li>
                </ul>
                <button className="button-submit" type="button">Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(ShoppingCart);
