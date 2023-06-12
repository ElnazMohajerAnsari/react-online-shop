import React, { useEffect, useContext } from "react";
import ProductItem from "../../components/ProductInCard/ProductItem";
import CartContext from "../../store/cart-context";

const ShoppingCartPage = React.memo(() => {
  // const [isMobile, setIsMobile] = useState(false);

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

  const productItems = cartCtx.items.map((item, index) => (
    <ProductItem
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
  //------------------------------------------------

  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth < 640); // Change the screen size condition as per your needs
    };

    handleResize(); // Call the function initially to set the initial isMobile value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full mx-auto p-5">
      <div className="overflow-x-auto">
        <div className="w-full mx-auto p-5">
          <div className="overflow-x-auto">
            <table className="w-full table-auto min-w-min border-collapse border border-neutral-500">
              <thead className="bg-neutral-400">
                <tr>
                  <th className="px-4 py-2 font-normal sm:text-base text-white ">
                    Number
                  </th>
                  <th className="px-4 py-2 font-normal text-white">Title</th>
                  <th className="px-4 py-2 font-normal text-white">Category</th>
                  <th className="px-4 py-2 font-normal text-white">Quantity</th>
                  <th className="px-4 py-2 font-normal text-white">Price</th>
                  <th className="px-4 py-2 font-normal text-white">
                    Total Price
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className=" [&>*:nth-child(odd)]:bg-neutral-200">
                {productItems}
              </tbody>
              <tfoot className="md:h-20">
                <tr>
                  <td className="text-center px-4 py-2">Total:</td>
                  <td className="text-center" colSpan={2}></td>
                  <td></td>
                  <td></td>
                  <td className="px-4 py-2 text-center">{totalAmount}$</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ShoppingCartPage;
