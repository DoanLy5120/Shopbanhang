import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { categories } from "../theme/header";
import { ROUTERS } from "utils/router";
import { ProductCard } from "component";

function ProductPage() {
  const sorts = [
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Đang giảm giá",
    "Bán chạy nhất",
  ];
  const importProductAll = (r) => r.keys().map(r);
  const ProductAll = importProductAll(
    require.context("assets/user/img/featured", false, /\.(png|jpe?g|svg)$/)
  );

  const products = [
    {
      img: ProductAll[0],
      name: "Cá",
      price: 50000,
    },
    {
      img: ProductAll[1],
      name: "Chuối",
      price: 20000,
    },
    {
      img: ProductAll[2],
      name: "Dưa hấu",
      price: 20000,
    },
    {
      img: ProductAll[3],
      name: "Nho",
      price: 80000,
    },
    {
      img: ProductAll[4],
      name: "Ổi",
      price: 15000,
    },
    {
      img: ProductAll[5],
      name: "Táo",
      price: 45000,
    },
    {
      img: ProductAll[6],
      name: "Thịt bò",
      price: 200000,
    },
    {
      img: ProductAll[7],
      name: "Xoài",
      price: 30000,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="sidebar">
            <div className="sidebar__item">
              <h2>Tìm kiếm</h2>
              <input type="text" />
            </div>
            <div className="sidebar__item">
              <h2>Mức giá</h2>
              <div className="price-range-wrap">
                <div>
                  <p>Từ:</p>
                  <input type="number" min={0} />
                </div>
                <div>
                  <p>Đến:</p>
                  <input type="number" min={0} />
                </div>
              </div>
            </div>
            <div className="sidebar__item">
              <h2>Sắp xếp</h2>
              <div className="tags">
                {sorts.map((item, key) => (
                  <div className={`tag ${key === 0 ? "active" : ""}`} key={key}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar__item">
              <h2>Thể loại</h2>
              <ul>
                <li>
                  <Link>
                    {categories.map((name, key) => (
                      <li key={key}>
                        <Link to={ROUTERS.USER.PRODUCT}>{name}</Link>
                      </li>
                    ))}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
          {products.map((product, key) =>(
            <div className="col-md-4" key={key}>
              <ProductCard name={product.name} img={product.img} price={product.price} />
            </div>
            
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductPage);
