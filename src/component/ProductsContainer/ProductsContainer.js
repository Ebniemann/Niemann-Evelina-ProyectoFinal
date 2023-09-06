import Product from "../ProductsDetail/Products";

const ProductsContainer = ({ courses }) => {
  return (
    <>
      <Product key={courses.id} courses={courses} />
    </>
  );
};

export default ProductsContainer;
