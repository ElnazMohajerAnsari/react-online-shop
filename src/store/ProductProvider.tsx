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
}

type ActionType = {
  type: "ADD";
  item?: Item;
};

const defaultProductState: ProductState = {
  items: [],
};

const productReducer = (state: ProductState, action: ActionType) => {
    if (action.type === "ADD") {
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
      };
    }

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

  const productContext: {
    items: Item[];
    addItem: (item: Item) => void;
  } = {
    items: productState.items,
    addItem: addItemHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
