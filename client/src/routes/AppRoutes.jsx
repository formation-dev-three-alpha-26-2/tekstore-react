import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductsList from "../components/ProductsList";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
     <Route path="/add" element={<AddProduct />} />

    </Routes>
  );
};

export default AppRoutes;
