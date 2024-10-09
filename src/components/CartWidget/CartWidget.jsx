import React from "react";
import "./CartWidget.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div>
      <Link to="/cart">
        <img
          className="carrito-icon"
          src="https://static.vecteezy.com/system/resources/previews/017/196/580/non_2x/shopping-cart-icon-on-transparent-background-free-png.png"
          alt="Carrrito"
        />
      </Link>
      {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
    </div>
  );
};

export default CartWidget;
