import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <header>
      <h1>XAVI Sports Shop</h1>
    <nav>
      <ul>
        <li>
          <a href="#">Fútbol</a>
        </li>
        <li>
          <a href="#">Basket</a>
        </li>
        <li>
          <a href="#">Retro</a>
        </li>
      </ul>
      
    </nav>
    <CartWidget/>
    </header>
  )
}

export default NavBar