import { memo } from "react";
import "./style.scss";
import { formatter } from "utils/formatter";

function CheckOut() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="checkout__input">
            <label>
              Họ và tên: <span className="required">*</span>
            </label>
            <input type="text" placeholder="Nhập họ và tên"></input>
          </div>
          <div className="checkout__input">
            <label>
              Địa chỉ: <span className="required">*</span>
            </label>
            <input type="text" placeholder="Nhập địa chỉ"></input>
          </div>
          <div className="checkout__input_group">
            <div className="checkout__input">
              <label>
                Điện thoại: <span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập số địa thoại"></input>
            </div>
            <div className="checkout__input">
              <label>
                Email: <span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập email"></input>
            </div>
          </div>
          <div className="checkout__input">
            <label>Ghi chú:</label>
            <textarea rows={15} placeholder="Nhập ghi chú" />
          </div>
        </div>
        <div className="col-lg-6">
            <div className="checkout__order">
                <h3>Đơn hàng</h3>
                <ul>
                    <li>
                        <span>Sản phẩm 1</span>
                        <b>{formatter(200000)} (2)</b>
                    </li>
                    <li>
                        <span>Sản phẩm 2</span>
                        <b>{formatter(100000)} (1)</b>
                    </li>
                    <li>
                        <span>Sản phẩm 3</span>
                        <b>{formatter(250000)} (4)</b>
                    </li>
                    <li>
                        <span>Sản phẩm 4</span>
                        <b>{formatter(150000)} (2)</b>
                    </li>
                    <li>
                        <span>Sản phẩm 5</span>
                        <b>{formatter(240000)} (3)</b>
                    </li>
                    <li>
                        <h4>Mã giảm giá</h4>
                        <b>SVC783</b>
                    </li>
                    <li className="checkout__order_subtotal">
                        <h3>Tổng đơn</h3>
                        <b>{formatter(400000)}</b>
                    </li>
                </ul>
                <button type="button" className="button-submit">Đặt hàng</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CheckOut);
