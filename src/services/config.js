import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Vamos a importar dos funciones de firebase

//initializeApp = esta funcion la utilizo para iniciar la conexión con Firebase.
//getFirestore = se utiliza para obtener una instancia de firestore

//Estamos trabajando con un objeto con toda nuestra informacion de la cuenta. Esta incluye la key personal de acceso a la Base De Datos.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_DOMINIO,
  projectId: import.meta.env.VITE_PROYECTO_ID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APPID,
};

//Inicializamos Firebase y se pasa la configuración como argumento
//Esto retorna una instancia de Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//Exportamos esta referencia para que esté disponible en toda nuestra aplicación

///////////////////////////////////////////

// const misProductos = [
//   {
//     nombre: "Peñarol",
//     stock: 10,
//     año: 2024,
//     precio: 2500,
//     img: "../src/assets/camisetaPeñarol.png",
//     descripcion:
//       "Camiseta del más grande de Uruguay utilizada en la actual temporada",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Real Madrid",
//     stock: 12,
//     año: 2004,
//     precio: 3500,
//     img: "../src/assets/realMadridRetro.png",
//     descripcion:
//       "Camiseta del más grande de España de la temporada del 2004, utilizada por jugadores como Roberto Carlos, Zinedine Zidane, entre otras grandes estrellas.",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Manchester United",
//     stock: 6,
//     año: 2007,
//     precio: 4500,
//     img: "../src/assets/manchesterUnitedRetro.png",
//     descripcion:
//       "Camiseta del más grande de Inglaterra de la temporada del 2007, utilizada por jugadores como Cristiano Ronaldo, Rooney, y otras estrellas.",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Boston Celtics",
//     stock: 5,
//     año: 2022,
//     precio: 6300,
//     img: "../src/assets/bostonCeltic.png",
//     descripcion:
//       "Camiseta del más grande de la NBA utilizada por J.Tatum en la temporada del 2022",
//     idCat: "basket",
//   },
//   {
//     nombre: "New York Yankees",
//     stock: 11,
//     año: 2023,
//     precio: 4300,
//     img: "../src/assets/newYork.png",
//     descripcion: "Camiseta del más grande de Beisbol",
//     idCat: "otros",
//   },
// ];

// import { collection, doc, writeBatch } from "firebase/firestore";

// const subirProductos = async () => {
//   const batch = writeBatch(db);
//   const productosRef = collection(db, "productos");

//   misProductos.forEach((producto) => {
//     const nuevoDoc = doc(productosRef); //Crea un nuevo documento con un id automatico
//     batch.set(nuevoDoc, producto); //Agrega la operacion de escritura al batch
//   });

//   try {
//     await batch.commit();
//     console.log("Productos subidos correctamente");
//   } catch (error) {
//     console.error("Error al subir productos", error);
//   }
// };

// subirProductos();
