import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const UpdateProduct = (props) => {
  let obj = useParams();
  let nav = useNavigate();
  // {id : "2"}
  let produit = props.data.find((el) => el.id === Number(obj.id));

  const [nom, setNom] = useState(produit.nom);
  const [prix, setprix] = useState(produit.prix);
  const [description, setdescription] = useState(produit.description);
  const [img, setimg] = useState(produit.image);

  let edit = (event) => {
    event.preventDefault();
    let newProduit = {
      ...produit,
      nom: nom,
      prix: Number(prix),
      description: description,
      image: img,
    };
    console.log(newProduit);

    props.updateproduit(newProduit);
    nav("/");
  };

  return (
    <form className="update-product-form" onSubmit={edit}>
      <h2>Update Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={nom}
        onChange={(e) => {
          setNom(e.target.value);
        }}
      />

      <input
        type="number"
        placeholder="Product Price"
        value={prix}
        onChange={(e) => {
          setprix(e.target.value);
        }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={img}
        onChange={(e) => {
          setimg(e.target.value);
        }}
      />

      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;
