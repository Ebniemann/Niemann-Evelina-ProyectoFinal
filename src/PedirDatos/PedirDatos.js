import data from "../data/data.json";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
};

export const categoryId = (category) => {
  return new Promise((resolve) => {
    const product = data.filter((prod) => prod.category === category);
    console.log(product);
    if (product.length > 0) return resolve(product);
  });
};
