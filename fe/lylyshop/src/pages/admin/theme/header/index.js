import { memo } from "react";
import { ROUTERS } from "utils/router";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import "./style.scss"

function HeaderAdmin({ children, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = [
    {
      path: ROUTERS.ADMIN.ORDERS,
      onclick: () => navigate(ROUTERS.ADMIN.ORDERS),
      label: "Đặt hàng",
      icon: <FaShoppingCart />,
    },
    {
      path: ROUTERS.ADMIN.LOGOUT,
      onclick: () => {},
      label: "Đăng xuất",
      icon: <LuLogOut />,
    },
  ];

  return (
    <div className="admin__header container" {...props}>
      <nav className="admin__header_nav">
        {navItems.map(({path, onClick, label, icon}) => (
          <div
          key = {path}
            className={`admin__header_nav-item ${
              location.pathname.includes(path) ? "admin__header_nav-item--active" : ""
            }`}
            onClick={onClick}
          >
            <span className="admin__header_nav-icon">{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default memo(HeaderAdmin);
