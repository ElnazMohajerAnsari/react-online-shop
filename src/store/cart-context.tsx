/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

interface CartItemType {
  id: string;
  title: string;
  description: string;
  category: string;
  amount: number;
  price: number;
}

interface CartContextType {
  items: CartItemType[];
  totalAmount: number;
  increaseItem: (item: CartItemType) => void;
  decreaseItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  increaseItem: () => {},
  decreaseItem: () => {},
  deleteItem: () => {},
});

export default CartContext;
