import { memo, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ROUTERS } from "utils/router";
import { CiBoxList } from "react-icons/ci";

function Header() {
  const [isShow, setIsShow] = useState(true); // chỉ xuất hiện danh sách khi bằng true

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
    <>
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
                    {menu.child && (
                      <ul className="header__menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
      <div className="container">
        <div className="row hero__categories_container">
          <div className="col-lg-3 hero__categories">
            <div
              className="hero__categories_all"
              onClick={() => setIsShow(!isShow)}
            >
              <CiBoxList />
              Danh sách sản phẩm
            </div>
            {isShow && (
              <ul className={isShow ? "" : "hidden"}>
                <li>
                  <Link to="">Thịt tươi</Link>
                </li>
                <li>
                  <Link to="">Rau củ</Link>
                </li>
                <li>
                  <Link to="">Trái cây</Link>
                </li>
                <li>
                  <Link to="">Nước trái cây</Link>
                </li>
                <li>
                  <Link to="">Hải sản</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9 hero__search_container">
            <div className="hero__search">
              <div className="hero__search_form">
                <form>
                  <input type="text" placeholder="Bạn đang tìm gì?" />
                  <button type="submit">Tìm kiếm</button>
                </form>
              </div>
              <div className="hero__search_phone">
                <div className="hero__search_phone_icon">
                  <FaPhoneAlt />
                </div>
                <div className="hero__search_phone_text">
                  <p>0652.258.369</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero__item">
              <div className="hero__text">
                <span>Trái cây tươi</span>
                <h2>Rau quả <br /> sạch 100%</h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to="" className="primary-btn">
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
