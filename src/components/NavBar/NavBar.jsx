import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={"./img/logo.png"} alt="Xavi Sport Shop" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="navLinks" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLinks" to="/categoria/basket">
              Basket
            </NavLink>
          </li>
          <li>
            <NavLink className="navLinks" to="/categoria/futbol">
              Fútbol
            </NavLink>
          </li>
          <li>
            <NavLink className="navLinks" to="/categoria/otros">
              Otros
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
