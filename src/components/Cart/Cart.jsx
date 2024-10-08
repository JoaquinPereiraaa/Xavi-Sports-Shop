import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, total, cantidadTotal, vaciarCarrito } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h3>Tu carrito está vacío</h3>
        <Link to="/">Ir al catálogo</Link>
      </>
    );
  }
  return (
    <div className="contenido-carrito">
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}

      <h3>Total: ${total}</h3>
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
      <Link to="/checkout">Finalizar Compra</Link>
    </div>
  );
};

export default Cart;
