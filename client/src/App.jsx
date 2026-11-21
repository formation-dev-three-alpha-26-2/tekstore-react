import "./App.css";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [dataProduits, setdata] = useState([]);

  // const [searchValue, setsearch] = useState("");

  // variable fih valeur ""

  // setsearch function eli tabdl fl valeur

  const fetchData = () => {
    axios
      .get("https://tek-server-hyxr.onrender.com/api/products")
      .then((rep) => {
        console.log(rep);
        setdata(rep.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const add = (newProduit) => {
  //   setdata([...data, newProduit]);
  // };

  // let newData = data.filter((el) => {
  //   return el.nom.toLowerCase().includes(searchValue.toLowerCase());
  // });

  // let deleteProduit = (id) => {
  //   //  let newDeletedData = data.filter((el) => {
  //   //       return el.id !== id;
  //   //     })
  //   // setdata(newDeletedData)

  //   setdata((oldData) =>
  //     oldData.filter((el) => {
  //       return el.id !== id;
  //     }),
  //   );
  // };

  // let updateproduit = (produit) => {
  // let updateddata =   data.map((el) => {
  //     if (el.id === produit.id) {
  //       return produit;
  //     }

  //     return el;
  //   });
  //   setdata(updateddata)
  // };

  // produit : {id : 2 , nom : "manar"}
  // [  {id : 1 , nom : "hello"} , {id : 2 , nom : "hi"} , {id : 3 , nom : "test"}  ]
  // [{id : 1 , nom : "hello"}  ,{id : 2 , nom : "manar"} , {id : 3 , nom : "test"}  ]
  // element {}

  return (
    <div className="App">
      <Navbar />
      <AppRoutes data={dataProduits} fetchData={fetchData} />
    </div>
  );
};

// {amine : []}
export default App;
