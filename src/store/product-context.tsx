import { createContext } from "react";

interface ProductItemType {
  id: string;
  title: string;
  description: string;
  category: string;
  image: ImageBitmap;
  price: number;
}

interface ProductContextType {
  items: ProductItemType[];
  //   totalAmount: number;
  addItem: (item: ProductItemType) => void;
  //   decreaseItem: (id: string) => void;
  //   deleteItem: (id: string) => void;
}

const ProductContext = createContext<ProductContextType>({
  items: [],
  //   totalAmount: 0,
  addItem: (item: ProductItemType) => {},
  //   decreaseItem: (id: string) => {},
  //   deleteItem: (id: string) => {},
});

export default ProductContext;
