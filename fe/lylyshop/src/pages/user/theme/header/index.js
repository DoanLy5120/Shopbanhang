import { memo, useEffect, useState } from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { ROUTERS } from "utils/router";
import { formatter } from "utils/formatter";

export  const categories = ["Thịt tươi", "Rau củ", "Nước ép", "Trái cây", "Hải sản"];


function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  const [isShowCategory, setIsShowCategory] = useState(isHomePage); // xổ xuống hay không

  // cập nhật trạng thái xổ khi route thay đổi
  useEffect(() => {
    setIsShowCategory(isHomePage); // nếu là trang chủ thì mở menu, ngược lại đóng
  }, [location.pathname]);

  const menus = [
    { name: "Trang chủ", path: ROUTERS.USER.HOME },
    { name: "Cửa hàng", path: ROUTERS.USER.PROFILE },
    {
      name: "Sản phẩm",
      path: ROUTERS.USER.PRODUCT,
      child: [
        { name: "Thịt", path: "" },
        { name: "Rau củ", path: "" },
        { name: "Trái cây", path: "" },
      ],
    },
    { name: "Bài viết", path: ROUTERS.USER.POST },
    { name: "Liên hệ", path: ROUTERS.USER.CONTACT },
  ];


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
                  <li
                    key={menuKey}
                    className={location.pathname === menu.path ? "active" : ""}
                  >
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
                <span>{formatter(100123)}</span>
              </div>
              <ul>
                <li>
                  <Link to={ROUTERS.USER.CART}>
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
              onClick={() => setIsShowCategory(!isShowCategory)}
            >
              <CiBoxList />
              Danh sách sản phẩm
            </div>
            {isShowCategory && (
              <ul>
                {categories.map((category, key) => (
                  <li key={key}>
                    <Link to={ROUTERS.USER.PRODUCT}>{category}</Link>
                  </li>
                ))}
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

            {/* Chỉ hiện hero__item nếu là trang chủ */}
            {isHomePage && (
              <div className="hero__item">
                <div className="hero__text">
                  <span>Trái cây tươi</span>
                  <h2>
                    Rau quả <br /> sạch 100%
                  </h2>
                  <p>Miễn phí giao hàng tận nơi</p>
                  <Link to="" className="primary-btn">
                    Mua ngay
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
