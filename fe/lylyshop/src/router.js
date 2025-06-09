import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/user/homePages";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";
import ProductPage from "pages/user/productPage";

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

function RouterCustom() {
  return renderUserRouter();
}

export default RouterCustom;
