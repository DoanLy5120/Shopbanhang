import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cat1Img from "assets/user/img/categories/cat1.jpg";
import cat2Img from "assets/user/img/categories/cat2.jpg";
import cat3Img from "assets/user/img/categories/cat3.jpg";
import cat4Img from "assets/user/img/categories/cat4.jpg";
import cat5Img from "assets/user/img/categories/cat5.jpg";
import "./style.scss";

function HomePage() {
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

  const sliderItem = [
    {
      bgImg: cat1Img,
      name: "Cam tươi",
    },
    {
      bgImg: cat2Img,
      name: "Hoa quả khô",
    },
    {
      bgImg: cat3Img,
      name: "Rau củ tươi",
    },
    {
      bgImg: cat4Img,
      name: "Thịt bò",
    },
    {
      bgImg: cat5Img,
      name: "Sữa hộp",
    },
    {
      bgImg: cat5Img,
      name: "Sữa hộp",
    },
    {
      bgImg: cat5Img,
      name: "Sữa hộp",
    },
    {
      bgImg: cat5Img,
      name: "Sữa hộp",
    },
    {
      bgImg: cat5Img,
      name: "Sữa hộp",
    },
  ];

  return (
    //Categories Begin
    <>
      <div className="container container__categories_slider">
        <Carousel
          responsive={responsive}
          className="categories_slider"
        >
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
    </>
  );
}

export default memo(HomePage);
