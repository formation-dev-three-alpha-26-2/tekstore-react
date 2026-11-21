import deleteicon from "../assets/deleteicon.png";
import edit from "../assets/edit.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductDetails = (props) => {
  const navigate = useNavigate();

  let postPorduit = (panierid) => {
    axios
      .post(`https://tek-server-hyxr.onrender.com/api/cart/${panierid}`, {
        productId: props.el.id,
        quantity: 1,
      })
      .then((response) => {
        alert("produit ajouté dans le panier");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ajouteraupanier = () => {
    let panierid = JSON.parse(localStorage.getItem("panier"));
    console.log(panierid);

    if (!panierid) {
      axios
        .post("https://tek-server-hyxr.onrender.com/api/cart")
        .then((response) => {
          console.log(response);
          localStorage.setItem("panier", JSON.stringify(response.data.id));

          
          postPorduit(response.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      postPorduit(panierid);
    }
  };

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
      <img src={props.el.imageUrl} />
      <div className="card-body">
        <span className="card-item-cat"></span>
        <h2> {props.el.name} </h2>
        <p> {props.el.description}</p>
        <h5 className="price"> {props.el.price} $</h5>
        <button
          className="add-cart-btn"
          onClick={(event) => {
            event.stopPropagation();
            ajouteraupanier();
            // navigate("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

// yclicki aala produit testnaa panier w yetzed lproduit fl pnaier

// waktli ybda deja zed produit (fama panier tsan3et)

// => panier (id mtaa produit )

// id mtaa produit2 , idpanier
// => panier (id mtaa produit , id mtaa produit2 )
