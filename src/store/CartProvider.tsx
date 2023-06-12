import React, { useReducer } from "react";
import CartContext from "./cart-context";

interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  amount: number;
  price: number;
}

interface CartState {
  items: Item[];
  totalAmount: number;
}

type ActionType = {
  type: "INCREASE" | "DECREASE" | "DELETE";
  item?: Item;
  id?: string;
};

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: ActionType) => {
  if (action.type === "INCREASE") {
    const updatedTotalAmount =
      state.totalAmount + action.item!.price * action.item!.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item!.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems: Item[];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem!.amount + action.item!.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item!);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "DECREASE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems: Item[];
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "DELETE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount - (existingItem.price * existingItem.amount);
    let updatedItems: Item[];
    updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props: React.PropsWithChildren<{}>) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const increaseItemHandler = (item: Item) => {
    dispatchCartAction({ type: "INCREASE", item: item });
  };

  const decreaseItemHandler = (id: string) => {
    dispatchCartAction({ type: "DECREASE", id: id });
  };

  const deleteItemHandler = (id: string) => {
    dispatchCartAction({ type: "DELETE", id: id });
  };

  const cartContext: {
    items: Item[];
    totalAmount: number;
    increaseItem: (item: Item) => void;
    decreaseItem: (id: string) => void;
    deleteItem: (id: string) => void;
  } = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    increaseItem: increaseItemHandler,
    decreaseItem: decreaseItemHandler,
    deleteItem: deleteItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
