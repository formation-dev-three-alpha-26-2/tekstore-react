import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = (props) => {
  const [nom, setnom] = useState("hi");
  const [prix, setprix] = useState(0);
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
const navigate = useNavigate()
  const submitNewProduit = (e) => {

    e.preventDefault()
    let newProduit = {
      nom: nom,
      prix: prix,
      description: description,
      category: category,
      image: image,
    };

    props.add(newProduit);
    navigate("/")
  };


  return (
    <form className="add-product-form" onSubmit={submitNewProduit}  >
      <label>
        Add your product

        <label  > nom de l'article :  </label>
        <input
          type="text"
          placeholder="Porduct Name"
    
          onChange={(event) => setnom(event.target.value)}
        />
        <input
          type="text"
          placeholder="Product price"
          onChange={(event) => setprix(event.target.value)}
        />
        <textarea
          placeholder="Your product description here"
          onChange={(event) => setdescription(event.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Product category"
          onChange={(event) => setcategory(event.target.value)}
        />
        <input
          type="text"
          placeholder="Product image"
          onChange={(event) => setimage(event.target.value)}
        />
      </label>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
};

export default AddProduct;
