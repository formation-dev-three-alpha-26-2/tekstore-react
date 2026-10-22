import React from "react";
import Search from "./Search";
import { NavLink , Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="logo">
        TEK STORE
      </NavLink>
      <Search />


    </div>
  );
};

export default Navbar;
