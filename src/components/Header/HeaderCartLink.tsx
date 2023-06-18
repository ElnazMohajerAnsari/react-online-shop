import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./HeaderCartLink.css";
import { Link } from "react-router-dom";

const HeaderCartLink = () => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce(
    (curNumber: number, item: { amount: number }) => {
      return curNumber + item.amount;
    },
    0
  );

  return (
    <Link to="/ShoppingCartPage" className="flex items-center">
      <span className="mx-1 my-2">Cart</span>
      <span id="cart-amount" className="rounded-full p-1">
        {numberOfCartItems}
      </span>
    </Link>
  );
};

export default HeaderCartLink;
