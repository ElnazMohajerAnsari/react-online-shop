import React, { useState, useEffect } from "react";

const ProductItem = (props: any): JSX.Element => {
  const calculateTotalPrice = (): number => {
    return props.price * props.amount;
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 782);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="border border-neutral-500 p-5 mb-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2 xs:mb-3">
            <div>
              <span className="font-normal">Title:</span>{" "}
              {props.title.substring(0, 40)}...
            </div>
            <button onClick={props.onDelete}>
              <div className="flex items-center justify-center rounded-full bg-red-500 text-white w-7 h-7">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex justify-between items-center mb-2 xs:mb-3">
            <div className="xs:block">
              <span className="font-normal">Category:</span> {props.category}
            </div>
          </div>
          <div className="mb-2 xs:mb-3">
            <span className="font-normal">Price:</span> {props.price}$
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-normal">Total Price:</span>{" "}
                {calculateTotalPrice().toFixed(2)}$
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex items-center space-x-2">
                <button onClick={props.onDecrease}>
                  <div className="flex items-center justify-center rounded-full bg-red-500 text-white w-6 h-6">
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
                <p>{props.amount}</p>
                <button onClick={props.onIncrease}>
                  <div className="flex items-center justify-center rounded-full bg-blue-500 text-white w-6 h-6">
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
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <tr className="border border-neutral-500 h-16">
        <td className="text-center p-2">{props.index + 1}</td>
        <td className="text-center p-2 truncate">
          {props.title.substring(0, 20)}...
        </td>
        <td className="text-center p-2 truncate">{props.category}</td>
        <td className="text-center p-2">
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
        <td className="text-center p-2">{props.price}$</td>
        <td className="text-center p-2">{calculateTotalPrice().toFixed(2)}$</td>
        <td className="text-center p-2">
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
  }
};

export default ProductItem;
