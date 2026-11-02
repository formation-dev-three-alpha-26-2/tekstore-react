import "./App.css";

import exempleDonneesProduits from "./data/data";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";
const App = () => {
  const [data, setdata] = useState(exempleDonneesProduits);
  const [searchValue, setsearch] = useState("");


  // variable fih valeur ""

  // setsearch function eli tabdl fl valeur




  
  const add = (newProduit) => {
    setdata([...data, newProduit]);
  };

  let newData = data.filter((el) => {
    return el.nom.toLowerCase().includes(searchValue.toLowerCase());
  });

  let deleteProduit = (id) => {
    //  let newDeletedData = data.filter((el) => {
    //       return el.id !== id;
    //     })
    // setdata(newDeletedData)

    setdata((oldData) =>
      oldData.filter((el) => {
        return el.id !== id;
      }),
    );
  };


  let updateproduit = (produit) => {
  let updateddata =   data.map((el) => {
      if (el.id === produit.id) {
        return produit;
      }

      return el;
    });
    setdata(updateddata)
  };


  // produit : {id : 2 , nom : "manar"}
// [  {id : 1 , nom : "hello"} , {id : 2 , nom : "hi"} , {id : 3 , nom : "test"}  ]
// [{id : 1 , nom : "hello"}  ,{id : 2 , nom : "manar"} , {id : 3 , nom : "test"}  ]
  // element {}

  return (
    <div className="App">
      <Navbar setsearch={setsearch} />
      <AppRoutes amine={newData} add={add} deleteProduit={deleteProduit}  updateproduit= {updateproduit} />
    </div>
  );
};

// {amine : []}
export default App;
