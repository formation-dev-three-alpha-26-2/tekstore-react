import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductsList from "../components/ProductsList";
import Oneproduct from "../components/OneProduct";
import UpdateProduct from "../components/UpdateProduct";
const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList data={props.amine} deleteProduit={props.deleteProduit} />} />
      <Route path="/add" element={<AddProduct add={props.add} />} />
      <Route
        path="/oneproduct/:id"
        element={<Oneproduct data={props.amine} />}
      />
            <Route path="/edit/:id" element={<UpdateProduct data={props.amine} updateproduit={props.updateproduit} />} />

    </Routes>
  );
};

export default AppRoutes;
