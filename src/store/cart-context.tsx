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
  increaseItem: (item: CartItemType) => {},
  decreaseItem: (id: string) => {},
  deleteItem: (id: string) => {},
});

export default CartContext;
