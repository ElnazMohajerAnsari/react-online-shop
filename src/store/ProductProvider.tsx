import React, { useReducer } from "react";
import ProductContext from "./product-context";

interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  image: ImageBitmap;
  price: number;
}

interface ProductState {
  items: Item[];
  //   totalAmount: number;
}

type ActionType = {
  type: "ADD";
  item?: Item;
};

const defaultProductState: ProductState = {
  items: [],
  //   totalAmount: 0,
};

const productReducer = (state: ProductState, action: ActionType) => {
    if (action.type === "ADD") {
    //   const updatedTotalAmount =
    //     state.totalAmount + action.item!.price * action.item!.amount;

      const existingProductItemIndex = state.items.findIndex(
        (item) => item.id === action.item!.id
      );
      const existingCartItem = state.items[existingProductItemIndex];
      let updatedItems: Item[];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
        };
        updatedItems = [...state.items];
        updatedItems[existingProductItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item!);
      }

      return {
        items: updatedItems,
        // totalAmount: updatedTotalAmount,
      };
    }
  //   if (action.type === "DECREASE") {
  //     const existingCartItemIndex = state.items.findIndex(
  //       (item) => item.id === action.id
  //     );
  //     const existingItem = state.items[existingCartItemIndex];
  //     const updatedTotalAmount = state.totalAmount - existingItem.price;
  //     let updatedItems: Item[];
  //     if (existingItem.amount === 1) {
  //       updatedItems = state.items.filter((item) => item.id !== action.id);
  //     } else {
  //       const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
  //       updatedItems = [...state.items];
  //       updatedItems[existingCartItemIndex] = updatedItem;
  //     }

  //     return {
  //       items: updatedItems,
  //       totalAmount: updatedTotalAmount,
  //     };
  //   }

  //   if (action.type === "DELETE") {
  //     const existingCartItemIndex = state.items.findIndex(
  //       (item) => item.id === action.id
  //     );
  //     const existingItem = state.items[existingCartItemIndex];
  //     const updatedTotalAmount =
  //       state.totalAmount - (existingItem.price * existingItem.amount);
  //     let updatedItems: Item[];
  //     updatedItems = state.items.filter((item) => item.id !== action.id);
  //     return {
  //       items: updatedItems,
  //       totalAmount: updatedTotalAmount,
  //     };
  //   }

  return defaultProductState;
};

const ProductProvider = (props: React.PropsWithChildren<{}>) => {
  const [productState, dispatchProductAction] = useReducer(
    productReducer,
    defaultProductState
  );

    const addItemHandler = (item: Item) => {
      dispatchProductAction({ type: "ADD", item: item });
    };

  //   const decreaseItemHandler = (id: string) => {
  //     dispatchCartAction({ type: "DECREASE", id: id });
  //   };

  //   const deleteItemHandler = (id: string) => {
  //     dispatchCartAction({ type: "DELETE", id: id });
  //   };

  const productContext: {
    items: Item[];
    // totalAmount: number;
    addItem: (item: Item) => void;
    // decreaseItem: (id: string) => void;
    // deleteItem: (id: string) => void;
  } = {
    items: productState.items,
    // totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    // decreaseItem: decreaseItemHandler,
    // deleteItem: deleteItemHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
