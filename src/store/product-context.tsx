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
  addItem: (item: ProductItemType) => void;
}

const ProductContext = createContext<ProductContextType>({
  items: [],
  addItem: (item: ProductItemType) => {},
});

export default ProductContext;
