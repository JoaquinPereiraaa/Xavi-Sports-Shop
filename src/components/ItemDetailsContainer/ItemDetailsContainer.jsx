import { useState, useEffect } from "react";
import ItemDetails from "../ItemDetails/ItemDetails";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailsContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "productos", idItem);

    getDoc(nuevoDoc)
      .then((res) => {
        const data = res.data();
        const nuevosProducto = { id: res.id, ...data };
        setProducto(nuevosProducto);
      })
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div>
      <ItemDetails {...producto} />
    </div>
  );
};

export default ItemDetailsContainer;
