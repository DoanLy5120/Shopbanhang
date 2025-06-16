import { memo } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";

function LoginPage() {
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTERS.ADMIN.ORDERS)
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3 className="login__title">TRUY CẬP HỆ THỐNG QUẢN TRỊ</h3>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-group">
            <label htmlFor="username" className="login__label">
              Tên đăng nhập
            </label>
            <input type="text" placeholder="Username" required />
            <div className="login__form-group">
              <label htmlFor="password" className="login__label">
                Password
              </label>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="login__button">
              ĐĂNG NHẬP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(LoginPage);
