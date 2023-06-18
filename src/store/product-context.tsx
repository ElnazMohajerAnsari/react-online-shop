/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

interface ProductItemType {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

interface ProductContextType {
  items: ProductItemType[];
  addItem: (item: ProductItemType) => void;
}

const ProductContext = createContext<ProductContextType>({
  items: [],
  addItem: () => {},
});

export default ProductContext;
