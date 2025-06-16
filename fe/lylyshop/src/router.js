import { Route, Routes, useLocation } from "react-router-dom";
import HomePages from "./pages/user/homePages";
import { ADMIN_PATH, ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";
import ProductPage from "pages/user/productPage";
import DetailPage from "pages/user/detailPage";
import ShoppingCart from "pages/user/shoppingCart";
import CheckOut from "pages/user/checkOut";
import LoginPage from "pages/admin/loginPage";
import MasterAdLayout from "pages/admin/masterAdLayout";
import OrderPage from "pages/admin/orderPage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePages />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.PRODUCT,
      component: <ProductPage />,
    },
    {
      path: ROUTERS.USER.DETAIL,
      component: <DetailPage />,
    },
    {
      path: ROUTERS.USER.CART,
      component: <ShoppingCart />,
    },
    {
      path: ROUTERS.USER.CHECKOUT,
      component: <CheckOut />,
    },
  ];

  return (
    // nhận được các trang khác nhau
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const renderAdminRouter = () => {
  const adminRouters = [
    {
      path: ROUTERS.ADMIN.LOGIN,
      component: <LoginPage />,
    },
    {
      path: ROUTERS.ADMIN.ORDERS,
      component: <OrderPage />,
    },
  ];

  return (
    // nhận được các trang khác nhau
    <MasterAdLayout>
      <Routes>
        {adminRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterAdLayout>
  );
};

function RouterCustom() {
  const location = useLocation();
  const isAdminRouters = location.pathname.startsWith(ADMIN_PATH);
  return isAdminRouters ? renderAdminRouter() : renderUserRouter();
}

export default RouterCustom;
