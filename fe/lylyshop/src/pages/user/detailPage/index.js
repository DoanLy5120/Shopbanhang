import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { categories } from "../theme/header";
import { ROUTERS } from "utils/router";
import { ProductCard } from "component";
import {
  FaEye,
  FaFacebook,
  FaFacebookMessenger,
  FaRegCopy,
} from "react-icons/fa";
import { formatter } from "utils/formatter";
import { featProducts } from "utils/comom";
import Quantity from "component/Quantity";

function DetailPage() {
  const importProductAll = (r) => r.keys().map(r);
  const ProductAll = importProductAll(
    require.context("assets/user/img/featured", false, /\.(png|jpe?g|svg)$/)
  );

  const imgs = [ProductAll[0], ProductAll[3], ProductAll[2]];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 product__detail_pic">
          <img src={ProductAll[2]} alt=""></img>
          <div className="main">
            {imgs.map((item, key) => (
              <img src={item} key={key}></img>
            ))}
          </div>
        </div>
        <div className="col-lg-6 product__detail_text">
          <h2>Dưa hấu</h2>
          <div className="seen-icon">
            <FaEye />
            {"10 (lượt xem)"}
          </div>
          <h3>{formatter(200000)}</h3>
          <p>
            Lyly Shop là cửa hàng chuyên bán rau củ tươi sạch mỗi ngày. Cửa hàng
            có nhiều loại rau như rau muống, cà rốt, cà chua và nhiều loại khác.
            Khách hàng yêu thích Lyly Shop vì giá cả hợp lý và phục vụ nhiệt
            tình.
          </p>
          <Quantity />
          <ul>
            <li>
              <b>Tình trạng: </b>
              <span>Còn hàng</span>
            </li>
            <li>
              <b>Số lượng: </b>
              <span>20</span>
            </li>
            <li>
              <b>Chia sẻ: </b>{" "}
              <span>
                <FaFacebook />
                <FaFacebookMessenger />
                <FaRegCopy />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="product__detail_tab">
        <h4>Thông tin chi tiết</h4>
        <div>
          <ul>
            <li>
              Dưa hấu là loại trái cây có vỏ xanh, ruột đỏ, vị ngọt mát, rất phổ
              biến vào mùa hè.
            </li>
            <li>
              Trái dưa thường có hình tròn hoặc hình bầu dục, trọng lượng trung
              bình từ 2 đến 5 kg.{" "}
            </li>
            <li>
              Ruột dưa chứa nhiều nước, giúp giải khát hiệu quả và cung cấp
              vitamin A, C, và các chất chống oxy hóa.{" "}
            </li>
            <li>
              Dưa hấu được trồng phổ biến ở các tỉnh miền Trung và miền Nam Việt
              Nam.{" "}
            </li>
            <li>
              Có nhiều giống dưa như dưa hấu không hạt, dưa hấu đỏ truyền thống,
              dưa hấu ruột vàng.{" "}
            </li>
            <li>
              Thường được tiêu thụ tươi, ép nước hoặc làm món tráng miệng.{" "}
            </li>
            <li>
              Bảo quản dưa ở nơi khô ráo, thoáng mát, có thể dùng trong vòng 5–7
              ngày sau khi cắt.{" "}
            </li>
            <li>
              Giá bán dao động từ 10.000 đến 20.000 đồng/kg tùy theo mùa vụ và
              địa phương.{" "}
            </li>
          </ul>
          <h4>Cách chọn dưa hấu tươi ngon</h4>
          <ul>
            <li>
              Chọn quả dưa có vỏ xanh đậm, bóng và có vết rám vàng đậm – dấu
              hiệu dưa đã chín cây.
            </li>
            <li>
              Gõ nhẹ vào quả, nếu nghe tiếng “bộp bộp” vang đều là dưa ngon,
              nhiều nước.{" "}
            </li>
            <li>
              Ưu tiên chọn quả có cuống héo khô và cong – chứng tỏ dưa đã đủ độ
              chín.{" "}
            </li>
            <li>
              Tránh chọn dưa có vỏ mềm, vết nứt hoặc đốm lạ vì có thể đã bị
              hỏng.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="section-title">
        <h2>Sản phẩm tương tự</h2>
      </div>
      <div className="row">
      {featProducts.all.products.map((item, key) =>(
        <div key={key} className="col-lg-3">
            <ProductCard img={item.img} name={item.name} price={item.price}/>
        </div>

      ))}
      </div>
    </div>
  );
}

export default memo(DetailPage);
