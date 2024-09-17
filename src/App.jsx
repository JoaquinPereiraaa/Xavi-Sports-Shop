
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetails from './components/ItemDetails/ItemDetails'
function App() {

  return (
    <>
    <BrowserRouter>
    
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemDetailsContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App