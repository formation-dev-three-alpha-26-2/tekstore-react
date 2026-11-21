import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductsList from "../components/ProductsList";
import Oneproduct from "../components/OneProduct";
import UpdateProduct from "../components/UpdateProduct";
import Cart from "../components/Cart";
const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList data={props.data} />} />
      <Route path="/add" element={<AddProduct fetchData={props.fetchData} />} />
      <Route path="/oneproduct/:id" element={<Oneproduct />} />
      <Route path="/edit/:id" element={<UpdateProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
