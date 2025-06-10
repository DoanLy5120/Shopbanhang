const importProductAll = (r) => r.keys().map(r);
  const ProductAll = importProductAll(
    require.context("assets/user/img/featured", false, /\.(png|jpe?g|svg)$/)
  );

export const featProducts = {
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