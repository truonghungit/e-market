import products from "./data/products";

export const getProductsByCategory = async ({ category, pageSize = 4 }) => {
  return new Promise((resolve) => {
    if (category === "all") {
      resolve(products);
    }
    const items = products.filter((product) => product.category === category);
    resolve(items.slice(0, pageSize));
  });
};

export const getNewProducts = async ({ pageSize = 8 }) => {
  return new Promise((resolve) => {
    const items = products.filter((product) => product.tag?.includes("new"));
    resolve(items.slice(0, pageSize));
  });
};
