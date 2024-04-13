import "./App.css";
import Navbar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Cart from "./Components/Cart";
import ShopState from "./context/shop/ShopState";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Products from "./Components/Products";
import Dockyard from "./Components/Dockyard";
import Signup from "./Components/user-details/Signup";
import Login from "./Components/user-details/Login";
import Loader from "./Components/Loader";
function App() {
  return (
    <>
      <ShopState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/men" element={<Men />} />
            <Route exact path="/women" element={<Women />} />
            <Route exact path="/all" element={<Products />} />
            <Route exact path="/do" element={<Dockyard />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/loader" element={<Loader />} />
          </Routes>
        </BrowserRouter>
      </ShopState>
    </>
  );
}

export default App;
