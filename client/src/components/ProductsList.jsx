import { Link } from "react-router-dom";
const ProductsList = () => {
  return (
    <>
      <div className="products-list">
      </div>
      <Link to="/add" className="floating-add">
        <span className="plus-icon">+</span>
        Add Product
      </Link>
    </>
  );
};

export default ProductsList;
