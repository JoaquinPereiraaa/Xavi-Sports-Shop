import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route
              path="*"
              element={
                <img src="https://www3.gobiernodecanarias.org/medusa/edublog/iesprofesorantoniocabreraperez/wp-content/uploads/sites/382/2020/04/sitio-en-construccion.jpg" />
              }
            ></Route>
          </Routes>
        </CarritoProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
