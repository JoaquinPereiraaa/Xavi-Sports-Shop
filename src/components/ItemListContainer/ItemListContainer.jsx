import { useState, useEffect } from "react";
//import { getProductos, getProductosPorCategorias } from '../../asyncmock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import Loader from "../Loader/Loader";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);

  // useEffect(() => {
  //   setLoading(true);
  //   const funcionProductos = idCategoria
  //     ? getProductosPorCategorias
  //     : getProductos;
  //   funcionProductos(idCategoria)
  //     .then((res) => setProductos(res))
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       console.log("Proceso finalizado");
  //       setLoading(false);
  //     });
  // }, [idCategoria]);
  return (
    <>
      <h2>Mis Productos</h2>
      {loading ? <Loader /> : <ItemList productos={productos} />}
    </>
  );
};

export default ItemListContainer;
