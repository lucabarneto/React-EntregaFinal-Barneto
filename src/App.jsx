import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Error404 from "./pages/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./contexts/CartContext";
import CartView from "./components/CartView";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
