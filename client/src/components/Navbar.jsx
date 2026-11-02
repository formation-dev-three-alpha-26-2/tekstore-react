import React from "react";
import Search from "./Search";
import { NavLink , Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="nav">
      <NavLink to="/" className="logo">
        TEK STORE
      </NavLink>
      <Search setsearch={props.setsearch} />


    </div>
  );
};

export default Navbar;
