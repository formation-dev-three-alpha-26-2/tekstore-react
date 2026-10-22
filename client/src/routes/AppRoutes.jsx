import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductsList from "../components/ProductsList";
import Oneproduct from "../components/OneProduct";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />

      <Route path="/add" element={<AddProduct />} />
            <Route path="/one" element={<Oneproduct />} />

    </Routes>
  );
};

export default AppRoutes;
