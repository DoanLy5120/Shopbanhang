import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { render } from "@testing-library/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "component/ProductCard";

function HomePage() {
  // ảnh của categories
  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context("assets/user/img/categories", false, /\.(png|jpe?g|svg)$/)
  );

  //ảnh của featured all
  const importProductAll = (r) => r.keys().map(r);
  const ProductAll = importProductAll(
    require.context("assets/user/img/featured", false, /\.(png|jpe?g|svg)$/)
  );

  // ảnh của categories
  const importBanner = (r) => r.keys().map(r);
  const banner = importAll(
    require.context("assets/user/img/banner", false, /\.(png|jpe?g|svg)$/)
  );

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // danh sach list gioi thieu
  const sliderItem = [
    {
      bgImg: images[0],
      name: "Cam tươi",
    },
    {
      bgImg: images[1],
      name: "Hoa quả khô",
    },
    {
      bgImg: images[2],
      name: "Rau củ tươi",
    },
    {
      bgImg: images[3],
      name: "Thịt bò",
    },
    {
      bgImg: images[4],
      name: "Sữa hộp",
    },
  ];
  // danh sach san pham noi bat
 const featProducts = {
    all: {
      title: "Toàn bộ",
      products: [
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
      ],
    },
    freshMeat: {
      title: "Thịt cá",
      products: [
        {
          img: ProductAll[6],
          name: "Thịt bò",
          price: 20000,
        },
        {
          img: ProductAll[0],
          name: "Cá",
          price: 50000,
        },
      ],
    },
    fruits: {
      title: "Trái cây",
      products: [
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
          img: ProductAll[7],
          name: "Xoài",
          price: 30000,
        },
      ],
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div key={j} className="col-lg-3">
            <ProductCard name={item.name} img={item.img} price={item.price} />
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>

        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {/* Categories Begin */}
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItem.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Categories End */}
      {/* Featured Begin */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
      {/* Featured End */}
      {/* Banner Begin */}
      <div className="container">
        <div className="banner">
          <div className="banner__pic">
            <img src={banner[0]} alt="banner" />
          </div>
          <div className="banner__pic">
            <img src={banner[1]} alt="banner" />
          </div>
        </div>
      </div>
      {/* Banner End */}
    </>
  );
}

export default memo(HomePage);
