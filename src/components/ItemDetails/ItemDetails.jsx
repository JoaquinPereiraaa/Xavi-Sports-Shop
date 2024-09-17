import React from 'react'
import "./ItemDetails.css"

const ItemDetails = ({id, nombre, año, precio, img}) => {

  return (
    <div className='contenedor'>
        <img src={img} alt={nombre} />
        <h2>{nombre}</h2>
        <h3>Temporada: {año}</h3>
        <p>Precio: ${precio}</p>
        <p>ID: {id}</p>
    </div>
  )
}

export default ItemDetails