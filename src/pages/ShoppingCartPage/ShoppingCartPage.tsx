import React, { useContext, useState, useEffect } from "react";
import ProductItem from "../../components/ProductInCard/ProductItem";
import CartContext from "../../store/cart-context";

const ShoppingCartPage = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemDecreaseHandler = (id: string) => {
    cartCtx.decreaseItem(id);
  };

  const cartItemIncreaseHandler = (item: any) => {
    cartCtx.increaseItem({ ...item, amount: 1 });
  };

  const cartItemDeleteHandler = (id: string) => {
    cartCtx.deleteItem(id);
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

  const productItems = cartCtx.items.map((item, index) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      category={item.category}
      amount={item.amount}
      price={item.price}
      description={item.description}
      onDecrease={cartItemDecreaseHandler.bind(null, item.id)}
      onIncrease={cartItemIncreaseHandler.bind(null, item)}
      onDelete={cartItemDeleteHandler.bind(null, item.id)}
      index={index}
    />
  ));

  return (
    <div className="w-full mx-auto p-5">
      <div className="overflow-x-auto">
        {isMobile ? (
          <div className="flex flex-col bg-neutral-100">
            {productItems}
            <div className="flex justify-center font-medium border-collapse border border-neutral-500">
              <h3>Total: {totalAmount}$</h3>
            </div>
          </div>
        ) : (
          <div className="w-full mx-auto p-5">
            <div className="overflow-x-auto">
              <table className="w-full table-auto min-w-min border-collapse border border-neutral-500">
                <thead className="bg-neutral-400">
                  <tr>
                    <th className="font-normal text-white p-2">Number</th>
                    <th className="font-normal text-white p-2">Title</th>
                    <th className="font-normal text-white p-2">Category</th>
                    <th className="font-normal text-white p-2">Quantity</th>
                    <th className="font-normal text-white p-2">Price</th>
                    <th className="font-normal text-white p-2">Total Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className=" [&>*:nth-child(odd)]:bg-neutral-200">
                  {productItems}
                </tbody>
                <tfoot className="md:h-20">
                  <tr>
                    <td className="text-center p-2">Total</td>
                    <td className="text-center" colSpan={2}></td>
                    <td></td>
                    <td></td>
                    <td className="text-center p-2">{totalAmount}$</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; /*)*/

export default ShoppingCartPage;
