import products from "./data/products";

export const getProductsByCategory = async ({
  category,
  keyWord,
  pageSize = 4,
}) => {
  return new Promise((resolve) => {
    if (category === "all") {
      if (!keyWord) {
        resolve(products);
      } else {
        const results = products.filter((p) => {
          return (
            p.name.toLowerCase().includes(keyWord.toLowerCase()) ||
            p.category.toLowerCase().includes(keyWord.toLowerCase()) ||
            p.shortDescription.toLowerCase().includes(keyWord.toLowerCase())
          );
        });
        resolve(results);
      }
    }
    const items = products.filter((product) => product.category === category);
    resolve(items.slice(0, pageSize));
  });
};

export const getSimilarProducts = async ({ productId, pageSize = 4 }) => {
  return new Promise((resolve, reject) => {
    const product = products.find((item) => item.id === productId);
    if (!product) {
      reject("No Product found");
    }

    const items = products.filter(
      (item) => item.category === product.category && item.id !== product.id
    );
    resolve(items.slice(0, pageSize));
  });
};

export const getProductDetail = async ({ slug }) => {
  return new Promise((resolve, reject) => {
    const product = products.find((item) => item.slug === slug);
    if (!product) {
      reject("No Product found");
    }

    const similarItems = products.filter(
      (item) => item.category === product.category
    );

    const index = similarItems.findIndex((item) => item.id === product.id);
    const nextIndex = index < similarItems.length - 1 ? index + 1 : null;
    const preIndex = index === 0 ? null : index - 1;

    resolve({
      product: product,
      next: nextIndex ? similarItems[nextIndex].slug : null,
      previous: preIndex !== null ? similarItems[preIndex].slug : null,
    });
  });
};

export const getNewProducts = async ({ pageSize = 8 }) => {
  return new Promise((resolve) => {
    const items = products.filter((product) => product.tag?.includes("new"));
    resolve(items.slice(0, pageSize));
  });
};
