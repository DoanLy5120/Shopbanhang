import { memo, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ROUTERS } from "utils/router";

function Header() {
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCT,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubMenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.HOME,
    },
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3">
          <div className="header__logo">
            <h1>LYLY SHOP</h1>
          </div>
        </div>
        <div className="col-xl-6">
          <nav className="header__menu">
            <ul>
              {menus?.map((menu, menuKey) => (
                <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                  <Link to={menu?.path}>{menu?.name}</Link>
                  {
                    menu.child && (
                        <ul className="header__menu_dropdown">
                            {
                                menu.child.map((childItem, childKey) => (
                                    <li key={`${menuKey}-${childKey}`}>
                                        <Link to={childItem.path}>{childItem.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                  }
                </li>
              ))}
              
            </ul>
          </nav>
        </div>
        <div className="col-xl-3">
          <div className="header__cart">
            <div className="header__cart_price">
              <span>100.123 đ</span>
            </div>
            <ul>
              <li>
                <Link to="#">
                  <FaShoppingCart />
                  <span>5</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
