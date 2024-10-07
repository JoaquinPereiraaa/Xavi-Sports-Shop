// //Version simple:
// import { useState, useContext } from "react";
// import { CarritoContext } from "../../context/CarritoContext";
// import { db } from "../../services/config";
// import { collection, addDoc } from "firebase/firestore";

// const Checkout = () => {
//   const [nombre, setNombre] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [telefono, setTelefono] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailConfirmacion, setEmailConfirmacion] = useState("");
//   const [error, setError] = useState("");
//   const [ordenId, setOrdenId] = useState("");

//   const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

//   //funcion y validacion:

//   const manejadorFormulario = (e) => {
//     e.preventDefault();

//     //verificamos que los campos esten completos:
//     if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
//       setError("Todos los campos son obligatorios");
//       return;
//     }

//     //validacion que los campos de email coincidan:
//     if (email !== emailConfirmacion) {
//       setError("Los emails no coinciden");
//       return;
//     }

//     //1) Creamos un objeto con todos los datos de la orden de compra

//     const orden = {
//       items: carrito.map((producto) => ({
//         id: producto.item.id,
//         nombre: producto.item.nombre,
//         precio: producto.item.precio,
//         cantidad: producto.cantidad,
//       })),
//       total: total,
//       fecha: new Date(),
//       nombre,
//       apellido,
//       telefono,
//       email,
//     };

//     //2) Guardar la orden en la base de datos de firebase
//     addDoc(collection(db, "ordenes"), orden)
//       .then((docRef) => {
//         setOrdenId(docRef.id);
//         vaciarCarrito();
//         setNombre("");
//         setApellido("");
//         setTelefono("");
//         setEmail("");
//         setEmailConfirmacion("");
//       })
//       .catch((err) => {
//         console.log("error al crear la orden");
//         setError("Hubo un error al guardar la orden");
//       });
//   };
//   return (
//     <div>
//       {" "}
//       0<h2>Checkout</h2>
//       <form onSubmit={manejadorFormulario}>
//         {carrito.map((producto) => (
//           <div key={producto.item.id}>
//             <p>{producto.item.nombre}</p>
//             <p>
//               {producto.item.precio} x {producto.cantidad}
//             </p>
//             <p>{producto.item.precio}</p>
//           </div>
//         ))}
//         <div>
//           <label htmlFor="nombre">Nombre</label>
//           <input
//             type="text"
//             id="nombre"
//             onChange={(e) => setNombre(e.target.value)}
//             value={nombre}
//           />
//         </div>
//         <div>
//           <label htmlFor="apellido">Apellido</label>
//           <input
//             type="text"
//             id="apellido"
//             onChange={(e) => setApellido(e.target.value)}
//             value={apellido}
//           />
//         </div>
//         <div>
//           <label htmlFor="telefono">Teléfono</label>
//           <input
//             type="text"
//             id="telefono"
//             onChange={(e) => setTelefono(e.target.value)}
//             value={telefono}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//         </div>
//         <div>
//           <label htmlFor="emailConfirmacion">Confirmar Email</label>
//           <input
//             type="email"
//             id="emailConfirmacion"
//             onChange={(e) => setEmailConfirmacion(e.target.value)}
//             value={emailConfirmacion}
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <button type="submit">Confirmar Compra</button>
//         {ordenId && (
//           <strong>
//             Gracias por su compra! Tu numero de orden es: {ordenId}
//           </strong>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Checkout;

//VERSION CON DESCUENTO DE STOCK

import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  //funcion y validacion:

  const manejadorFormulario = (e) => {
    e.preventDefault();

    //verificamos que los campos esten completos:
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Todos los campos son obligatorios");
      return;
    }

    //validacion que los campos de email coincidan:
    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden");
      return;
    }

    //1) Creamos un objeto con todos los datos de la orden de compra

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        precio: producto.item.precio,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    //////////////////////////////////////////////////////
    //vamos a modificar el codigo para que ejecute varias promesas en paralelo, por un lado que actualize el stock de productos y por el otro lado que genere una orden de compra.
    //Vamos a usar para lograr esto: Promise.All

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        // Por cada producto en la coleccion "productos" obtengo una referencia, y a partir de esa referencia obtengo el DOC.
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        //data es un metodo que me permiote acceder a la informacion del documento

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
          //modifico el stock y subo la informacion actualizada
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
            setNombre("");
            setApellido("");
            setTelefono("");
            setEmail("");
            setEmailConfirmacion("");
          })
          .catch((err) => {
            setError("Hubo un error al guardar la orden");
          });
      })
      .catch((error) => {
        setError("Hubo un error al actualizar el stock");
      });
  };
  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>{producto.item.nombre}</p>
            <p>
              {producto.item.precio} x {producto.cantidad}
            </p>
            <p>{producto.item.precio}</p>
          </div>
        ))}
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="emailConfirmacion">Confirmar Email</label>
          <input
            type="email"
            id="emailConfirmacion"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
            value={emailConfirmacion}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Confirmar Compra</button>
        {ordenId && (
          <strong>
            Gracias por su compra! Tu numero de orden es: {ordenId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
