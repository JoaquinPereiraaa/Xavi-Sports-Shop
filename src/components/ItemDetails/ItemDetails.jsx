import React from "react";
import "./ItemDetails.css";
import Contador from "../Contador/Contador";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { toast } from "react-toastify";

const ItemDetails = ({ id, nombre, año, precio, img, stock, descripcion }) => {
  // creamos un estado local con la cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  //creamos una funcion manejadora de la cantidad

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    //Ahora acá yo puedo crear un objeto con el item y la cantidad
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
    toast.success(`Se agregó ${item.nombre} al carrito!`, {
      autoClose: 1000,
      theme: "dark",
      position: "top-right",
    });
  };

  return (
    <div className="contenedor">
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>Temporada: {año}</h3>
      <p>Precio: ${precio}</p>
      <p>ID: {id}</p>
      <p>{descripcion}</p>

      {
        //Acá empleamos la lógica de montaje y desmontaje del contador
        agregarCantidad > 0 ? (
          <Link to="/cart">Terminar Compra</Link>
        ) : (
          <Contador
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )
      }
    </div>
  );
};

export default ItemDetails;
