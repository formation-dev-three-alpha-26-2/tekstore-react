import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
const ProductsList = (props) => {
  return (
    <>
      <div className="products-list">
        {props.data.map((el) => {
          return <ProductDetails el={el} deleteProduit={props.deleteProduit} />;
        })}
      </div>


      <Link to="/add" className="floating-add">
        <span className="plus-icon">+</span>
        Add Product
      </Link>
    </>
  );
};

export default ProductsList;
