import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, año, precio, img, stock }) => {
  return (
    <div className="cardProducto">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Temporada: {año}</p>
      <p>Precio: ${precio}</p>
      <p>ID: {id}</p>
      <p>Stock: {stock}</p>
      <Link to={`/item/${id}`} className="cardButton">
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
