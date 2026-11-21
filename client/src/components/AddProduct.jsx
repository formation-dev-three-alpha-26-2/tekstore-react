import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddProduct = (props) => {
  const [nom, setnom] = useState("");
  const [prix, setprix] = useState(0);
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const navigate = useNavigate();

  const postData = (x) => {
    x.preventDefault();

    let newProduit = {
      name: nom,
      price: prix,
      description: description,
      categories: category,
      imageUrl: image,
    };

    console.log(newProduit);

    axios
      .post("https://tek-server-hyxr.onrender.com/api/products", newProduit)
      .then(() => {
        props.fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

let change = (e) => {

setnom(e.target.value)

}


  return (
    <form
      className="add-product-form"
      onSubmit={postData}
    >
      <label>
        Add your product
        <label> nom de l'article : </label>
        <input
          type="text"
          placeholder="Porduct Name"
          onChange={change}
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
