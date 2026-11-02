import { useParams } from "react-router-dom";

const Oneproduct = (props) => {
  const param = useParams();

  let resultat = props.data.filter((el) => {
    return el.id === Number(param.id);
  });

  let element = resultat[0];
  console.log(resultat);

  return (
    <div className="product-details">
      <div className="product-image">
        <img alt="Produit" src={element.image} />
      </div>

      <div className="product-info">
        <h1> {element.nom}</h1>
        <p>{element.description}</p>

        <h2>Prix :{element.prix}</h2>

        <button>Ajouter au panier</button>

        <p></p>
      </div>
    </div>
  );
};

export default Oneproduct;
