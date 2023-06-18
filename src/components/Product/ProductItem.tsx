import React, { useContext } from "react";
import "./ProductItem.css";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import CartContext from "../../store/cart-context";
import Product from "../../obj/Product";

const ProductItem = (props: Product): JSX.Element => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount: number) => {
    cartCtx.increaseItem({
      id: props.id,
      title: props.title,
      description: props.description,
      amount: amount,
      price: props.price,
      category: props.category,
    });
  };

  return (
    <article className="lg:w-1/3 px-12 lg:px-4 md:w-1/2 md:px-4 sm:px-4 mb-6">
      <div className="flex flex-col mb-4 border shadow h-full p-3">
        <figure className="relative h-72">
          <img
            src={props.image}
            alt="Product Image"
            className="absolute inset-0 object-contain w-full h-full"
          />
        </figure>
        <div className="p-3 h-72">
          <h3 className="product-title my-5 text-xl font-large line-clamp-1 xl:line-clamp-2">
            {props.title}
          </h3>
          <p className="text-start my-2 text-justify text-gray-600 line-clamp-6">
            {props.description}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center content-center mt-4 px-3">
          <p>price {props.price}$</p>
          <AddToCartButton id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
