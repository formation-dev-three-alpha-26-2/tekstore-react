import axios from "axios";
import { useState, useEffect } from "react";

const Cart = () => {
  const [panierData, setPanierdata] = useState([]);
  let panierid = JSON.parse(localStorage.getItem("panier"));

  let produitsDanslepanier = () => {
    axios
      .get(`https://tek-server-hyxr.onrender.com/api/cart/${panierid}`)
      .then((response) => {
        console.log(response);

        setPanierdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    produitsDanslepanier();
  }, []);

  const supprimerproduitdepanier = (idproduit) => {
    console.log(idproduit);
    console.log(panierid);

    axios
      .delete(
        `https://tek-server-hyxr.onrender.com/api/cart/${panierid}/${idproduit}`,
      )
      .then((response) => {
        produitsDanslepanier();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const updateproduitdepanier = (idproduit , quantity) => {
    console.log(idproduit);
    console.log(panierid);

    axios
      .put(
        `https://tek-server-hyxr.onrender.com/api/cart/${panierid}/${idproduit}`,
        { quantity : quantity }
      )
      .then((response) => {
        produitsDanslepanier();
      })
      .catch((error) => {
        console.log(error);
      });
  };




  const total = () => {
    let result = 0;

    panierData.forEach((el) => (result += el.price * el.quantity));

    return result;
  };

  return (
    <div>
      <h1> cart </h1>
      <div className="cart-list">
        {panierData.map((el) => {
          return (
            <div className=".cart-item">
              <img src={el.imageUrl} />
              <div className="card-body">
                <span className="card-item-cat"></span>
                <h2> {el.name} </h2>
                <p> {el.description}</p>
                   <p> {el.quantity}</p>
                <h5 className="price"> {el.price} $</h5>
                <button
                  onClick={() => {
                    supprimerproduitdepanier(el.productId);
                  }}
                  className="cart-list-button "
                >
                  {" "}
                  delete
                </button>

<button  onClick={()=> { updateproduitdepanier(el.productId ,el.quantity +1 )}} > + </button>
<button  onClick={()=> { updateproduitdepanier(el.productId ,el.quantity - 1 )}}  > - </button>

              </div>
            </div>
          );
        })}

        <span> total : {total()} </span>
      </div>
    </div>
  );
};

export default Cart;
