import React, { useCallback, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import CartProvider from "./store/CartProvider";
import { Routes, Route } from "react-router-dom";

function App() {
  // const getApiData = useCallback(async () => {
  //   console.log("hi");
  //   const response = await fetch("https://fakestoreapi.com/products").then(
  //     (res) => res.json(),
  //     (res) => console.log(res)
  //   );

  //   console.log("kkkk");
  //   return response;
  // }, []);

  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ProductsPage /*getApiData={getApiData}*/ />}
        />
        <Route path="/ShoppingCartPage" element={<ShoppingCartPage />} />
        <Route path="/UserInfoPage" element={<UserInfoPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
