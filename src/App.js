// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import Contact from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import Authentication from "./pages/authentication";
import Checkout from "./pages/cart/Checkout";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Add this line */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
