import { memo } from "react";
import Footer from "../../common/footer";
import { ROUTERS } from "utils/router";
import { useLocation } from "react-router-dom";
import HeaderAdmin from "../theme/header/index";

function MasterAdLayout({ children, ...props }) {
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);

  return (
    <div {...props}>
      {/* khi gọi masterLayout, truyền vào children thì tất cả bên ngoài sẽ thay vào children  */}
      {!isLoginPage && <HeaderAdmin />}
      {children}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default memo(MasterAdLayout);
