import React from "react";

const AddToCartButton = (props: {
  id: string;
  onAddToCart: (amount: number) => void;
}) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddToCart(1);
  };

  return (
    <form onSubmit={submitHandler}>
      <button className="btn bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 rounded border-none">
        Add to cart
      </button>
    </form>
  );
};

export default AddToCartButton;
