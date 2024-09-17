const misProductos = [
  {
    id: "1",
    nombre: "Peñarol",
    año: 2024,
    precio: 2500,
    img: "../src/assets/camisetaPeñarol.png",
    idCat: "futbol",
  },
  {
    id: "2",
    nombre: "Real Madrid",
    año: 2004,
    precio: 3500,
    img: "../src/assets/realMadridRetro.png",
    idCat: "futbol",
  },
  {
    id: "3",
    nombre: "Manchester United",
    año: 2007,
    precio: 4500,
    img: "../src/assets/manchesterUnitedRetro.png",
    idCat: "futbol",
  },
  {
    id: "4",
    nombre: "Boston Celtics",
    año: 2022,
    precio: 6300,
    img: "../src/assets/bostonCeltic.png",
    idCat: "basket",
  },
  {
    id: "5",
    nombre: "New York Yankees",
    año: 2023,
    precio: 4300,
    img: "../src/assets/newYork.png",
    idCat: "otros",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((item) => item.id === id);
      resolve(producto);
    }, 2000);
  });
};

export const getProductosPorCategorias = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.filter(
        (item) => item.idCat === idCategoria
      );
      resolve(producto);
    }, 100);
  });
};
