import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__about">
              <h1 className="footer__about_logo">LYLY SHOP</h1>
              <ul>
                <li>Địa chỉ: 213 Dương Đình Nghệ</li>
                <li>Phone: 0977-232-323</li>
                <li>Email: lylyshop@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__widget">
              <h4>Cửa hàng</h4>
              <ul>
                <li>
                  <Link to="">Liên hệ</Link>
                </li>
                <li>
                  <Link to="">Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="">Giỏ hàng</Link>
                </li>
                <li>
                  <Link to="">Danh sách ưa thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__widget">
              <h4>Khuyến mãi & Ưu đãi</h4>
              <p>Đăng ký nhận thông tin tại đây</p>
              <form action="#">
                <div className="input">
                  <input type="text" placeholder="Nhập email"/>
                  <button type="submit" className="button-submit">
                    Đăng ký
                  </button>
                </div>
                <div className="footer__widget_social">
                  <div>
                    <IoLogoFacebook />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
