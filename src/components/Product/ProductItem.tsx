/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import "./ProductItem.css";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import CartContext from "../../store/cart-context";

const ProductItem = (props: any): JSX.Element => {
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
    <article className="lg:w-1/3 px-12 lg:px-4 md:w-1/2 md:px-4 sm:px-4">
      <div className="flex flex-col justify-center mb-4 border shadow">
        <figure className="product-image">
          <img src={props.image} alt="Product Image" />
        </figure>
        <section className="product-info p-6">
          <p className="product-title">{props.title}</p>
          <p className="text-start my-2 text-justify">{props.description}</p>
          <div className="flex flex-row justify-between items-center mt-4">
            <p>price {props.price}$</p>
            <AddToCartButton id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </section>
      </div>
    </article>
  );
};

export default ProductItem;
