import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <header>
      <Link to="/">
      <h1>XAVI Sports Shop</h1>
      </Link>
      
    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/basket">Basket</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/futbol">Fútbol</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/otros">Otros</NavLink>
        </li>
      </ul>
      
    </nav>
    <CartWidget/>
    </header>
  )
}

export default NavBar