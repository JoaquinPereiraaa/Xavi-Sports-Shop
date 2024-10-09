import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Vamos a importar dos funciones de firebase

//initializeApp = esta funcion la utilizo para iniciar la conexión con Firebase.
//getFirestore = se utiliza para obtener una instancia de firestore

//Estamos trabajando con un objeto con toda nuestra informacion de la cuenta. Esta incluye la key personal de acceso a la Base De Datos.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "xavi-sport-shop.firebaseapp.com",
  projectId: "xavi-sport-shop",
  storageBucket: "xavi-sport-shop.appspot.com",
  messagingSenderId: "516082430051",
  appId: "1:516082430051:web:a193f869981be5c5194856",
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
//     img: "../public/img/futbol/camisetaPeñarol.png",
//     descripcion:
//       "Camiseta del más grande de Uruguay utilizada en la actual temporada",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Real Madrid",
//     stock: 12,
//     año: 2004,
//     precio: 3500,
//     img: "../public/img/futbol/realMadridRetro.png",
//     descripcion:
//       "Camiseta del más grande de España de la temporada del 2004, utilizada por jugadores como Roberto Carlos, Zinedine Zidane, entre otras grandes estrellas.",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Manchester United",
//     stock: 6,
//     año: 2007,
//     precio: 4500,
//     img: "../public/img/futbol/manchesterUnitedRetro.png",
//     descripcion:
//       "Camiseta del más grande de Inglaterra de la temporada del 2007, utilizada por jugadores como Cristiano Ronaldo, Rooney, y otras estrellas.",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Arsenal",
//     stock: 14,
//     año: 2022,
//     precio: 4200,
//     img: "../public/img/futbol/camisetaArsenal.png",
//     descripcion:
//       "Camiseta del Arsenal usada por los gunners en la temporada del 2022, utilizada por jugadores como Gabriel Jesus, Odegaard, y otras estrellas.",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Bayern Munich",
//     stock: 15,
//     año: 2013,
//     precio: 4200,
//     img: "../public/img/futbol/camisetaBayern.png",
//     descripcion:
//       "Camiseta del Bayern campeón de la champions del 2013, liderados por figuras como Arjen Robben, Frank Ribery, entre otros grandes jugadores",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Barcelona",
//     stock: 30,
//     año: 2009,
//     precio: 8200,
//     img: "../public/img/futbol/camisetaBarcelona.png",
//     descripcion:
//       "Camiseta del Barcelona campeón de la champions del 2009, liderados por figuras como Lionel Messi, Carles Puyol, entre otros grandes jugadores",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Liverpool",
//     stock: 30,
//     año: 2005,
//     precio: 5200,
//     img: "../public/img/futbol/camisetaLiverpool.png",
//     descripcion:
//       "Camiseta del Liverpool campeón de la champions del 2005, liderados por figuras como Steven Gerard, Carragher, entre otros grandes jugadores",
//     idCat: "futbol",
//   },
//   {
//     nombre: "AC Milan",
//     stock: 30,
//     año: 2007,
//     precio: 8200,
//     img: "../public/img/futbol/camisetaMilan.png",
//     descripcion:
//       "Camiseta del Milan campeón de la champions del 2007, liderados por figuras como Ricardo Kaká, Clarence Seedorf, entre otros grandes jugadores",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Internationale de Milan",
//     stock: 30,
//     año: 2011,
//     precio: 8200,
//     img: "../public/img/futbol/camisetaInter.png",
//     descripcion:
//       "Camiseta del Inter campeón de la champions del 2011, liderados por figuras como Diego Milito, Javier Zanetti, entre otros grandes jugadores",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Palmeiras",
//     stock: 30,
//     año: 2023,
//     precio: 8200,
//     img: "../public/img/futbol/camisetaPalmeiras.png",
//     descripcion: "Camiseta del campeon del brasileirao",
//     idCat: "futbol",
//   },
//   {
//     nombre: "Boston Celtics",
//     stock: 20,
//     año: 2024,
//     precio: 6300,
//     img: "../public/img/basket/bostonCeltic.png",
//     descripcion: "Camiseta del más grande de la NBA utilizada por J.Tatum",
//     idCat: "basket",
//   },
//   {
//     nombre: "LA Lakers",
//     stock: 20,
//     año: 2024,
//     precio: 6300,
//     img: "../public/img/basket/camisetaLakers.png",
//     descripcion: "Camiseta del más grande de la NBA utilizada por Lebron James",
//     idCat: "basket",
//   },
//   {
//     nombre: "Chicago Bulls",
//     stock: 20,
//     año: 2024,
//     precio: 6300,
//     img: "../public/img/basket/camisetaChicago.png",
//     descripcion: "Camiseta del más grande de la NBA utilizada por Z.Lavine",
//     idCat: "basket",
//   },
//   {
//     nombre: "Denver Nuggets",
//     stock: 20,
//     año: 2024,
//     precio: 6300,
//     img: "../public/img/basket/camisetaNuggets.png",
//     descripcion: "Camiseta del más grande de la NBA utilizada por Jokic",
//     idCat: "basket",
//   },
//   {
//     nombre: "Houston Rockets",
//     stock: 20,
//     año: 2024,
//     precio: 6300,
//     img: "../public/img/basket/camisetaHouston.png",
//     descripcion: "Camiseta del más grande de la NBA utilizada por Sengun",
//     idCat: "basket",
//   },
//   {
//     nombre: "Orlando Magics",
//     stock: 20,
//     año: 2024,
//     precio: 6300,
//     img: "../public/img/basket/camisetaOrlando.png",
//     descripcion: "Camiseta del más grande de la NBA utilizada por Banchero",
//     idCat: "basket",
//   },
//   {
//     nombre: "New York Yankees",
//     stock: 11,
//     año: 2023,
//     precio: 4300,
//     img: "../public/img/otros/newYork.png",
//     descripcion: "Camiseta del más grande de Beisbol",
//     idCat: "otros",
//   },
//   {
//     nombre: "Peñarol Rugby",
//     stock: 20,
//     año: 2024,
//     precio: 3300,
//     img: "../public/img/otros/camisetaManyaRugby.png",
//     descripcion: "Camiseta del más grande de Rugby",
//     idCat: "otros",
//   },
//   {
//     nombre: "Pingüinos",
//     stock: 11,
//     año: 2023,
//     precio: 6300,
//     img: "../public/img/otros/camisetaPinguinos.png",
//     descripcion: "Camiseta del más grande de hockey sobre hielo",
//     idCat: "otros",
//   },
//   {
//     nombre: "Teros",
//     stock: 20,
//     año: 2023,
//     precio: 2300,
//     img: "../public/img/otros/camisetaTeros.png",
//     descripcion: "Camiseta del más grande de Rugby",
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
