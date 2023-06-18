import React from "react";

const ProductItem = (props: any): JSX.Element => {
  const calculateTotalPrice = (): number => {
    return props.price * props.amount;
  };

  return (
    <tr className="border border-neutral-500 md:h-20">
      <td className="text-center px-4 py-2">{props.index + 1}</td>
      <td className="text-center px-4 py-2 truncate">
        {props.title.substring(0, 20)}...
      </td>
      <td className="text-center px-4 py-2 truncate">
        {props.category}
      </td>
      <td className="text-center px-4 py-2">
        <div className="flex items-center justify-center">
          <button onClick={props.onDecrease}>
            <div className="rounded-full bg-red-500 text-white w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-dash-circle color-white"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  fill="white"
                ></path>{" "}
                <path
                  d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                  fill="white"
                ></path>{" "}
              </svg>
            </div>
          </button>
          <p className="mx-2">{props.amount}</p>
          <button onClick={props.onIncrease}>
            <div className="rounded-full bg-blue-500 text-white w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
              </svg>
            </div>
          </button>
        </div>
      </td>
      <td className="text-center px-4 py-2">{props.price}$</td>
      <td className="text-center px-4 py-2">
        {calculateTotalPrice().toFixed(2)}$
      </td>
      <td className="text-center px-4 py-2">
        <button onClick={props.onDelete}>
          <div className="rounded-full bg-red-500 text-white w-6 h-6 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />{" "}
            </svg>
          </div>
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
