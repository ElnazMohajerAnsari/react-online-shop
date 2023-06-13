import React, { useCallback, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import CartProvider from "./store/CartProvider";
import ProductProvider from "./store/ProductProvider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
     <ProductProvider>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/ShoppingCartPage" element={<ShoppingCartPage />} />
          <Route path="/UserInfoPage" element={<UserInfoPage />} />
        </Routes>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
