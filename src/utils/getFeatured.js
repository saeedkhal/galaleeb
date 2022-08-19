export const getFeatured = (arr, filteredProp) => {
  const keys = Object.keys(filteredProp);
  const values = Object.values(filteredProp);
  let filteredProducts = [];
  for (let index = 0; index < keys.length; index++) {
    filteredProducts = arr.filter((el) => {
      const filteredKey = keys[index];
      return el.fields[filteredKey] === values[index];
    });
  }
  return filteredProducts;
};

export const getProductById = (arr, id) => {
  const product = arr.filter((el) => {
    return (el.id = id);
  });
  return product;
};
