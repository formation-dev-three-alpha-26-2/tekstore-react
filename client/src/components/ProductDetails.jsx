import deleteicon from "../assets/deleteicon.png";
import edit from "../assets/edit.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductDetails = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/oneproduct/${props.el.id}`)}
    >
      <div className="product-card-buttons">
        <img
          src={edit}
          className="icon-btn edit-btn"
          title="Edit"
          onClick={(event) => {
            event.stopPropagation();
            navigate(`/edit/${props.el.id}`);
          }}
        />
        <img
          src={deleteicon}
          className="icon-btn delete-btn"
          title="Delete"
          onClick={(event) => {
            event.stopPropagation();
            props.deleteProduit(props.el.id);
          }}
        />
      </div>
      <img src={props.el.image} />
      <div className="card-body">
        <span className="card-item-cat"></span>
        <h2> {props.el.nom} </h2>
        <p> {props.el.description}</p>
        <h5 className="price"> {props.el.prix} $</h5>
        <button className="add-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
