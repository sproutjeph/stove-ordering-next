import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { FaArrowLeft, FaChevronLeft } from "react-icons/fa";
import { CartItem, CartItemMobileView } from "@/components";
import { useRouter } from "next/router";

const CartPage = () => {
  const { selectedItemData } = useAppSelector((state) => state.menuItemDetails);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cartItems, totalCartItems, totalPrice } = useAppSelector(
    (state) => state.cart
  );

  console.log(selectedItemData?.addedModifiers);

  return (
    <>
      <div className="px-3 mx-auto mt-24 mb-8 max-w-7xl">
        <h4 className="text-2xl tracking-wider">Cart</h4>
        <div className="flex items-center gap-4">
          <h4 className="">Venues</h4>
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <h4 className="">Cart</h4>
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <h4 className="text-gray-400">Checkout</h4>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4 md:items-start md:ml-96">
        <div className="flex items-center col-span-3 gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <div className="w-36 md:w-40 h-[2px] bg-gray-400" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-36 md:w-40 h-[2px] bg-gray-400" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
        <div className="flex justify-between w-[365px] px-2 md:px-0">
          <h4>Cart</h4>
          <h4 className="text-gray-400">Billing & address</h4>
          <h4 className="text-gray-400">Payment</h4>
        </div>
      </div>

      <main className="min-h-screen mx-auto mt-10 max-w-7xl ">
        <button
          className="flex items-center gap-2 my-4 text-sm "
          title="Back to Products"
          onClick={() => router.push("/")}
        >
          <FaChevronLeft className="text-blue-500 " />
          <span>Continue Shopping</span>
        </button>

        <div className="grid-cols-3 gap-3 p-3 lg:grid">
          <div className="col-span-2 border rounded-md shadow-md ">
            <div className="p-5">
              {" "}
              <span className="font-bold">Cart</span>{" "}
              <span className="text-gray-500">
                ( {cartItems.length} Items )
              </span>
            </div>
            {cartItems.length > 0 ? (
              <>
                <div className="md:hidden">
                  <ul className="md:flex gap-x-2">
                    {cartItems.map((item, i) => (
                      <CartItemMobileView item={item} index={i} key={i} />
                    ))}
                  </ul>
                </div>

                <div className="hidden overflow-x-scroll md:overflow-auto md:block">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="p-3 text-start">Product</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Quantity</th>
                        <th className="p-3">Modifiers</th>
                        <th className="p-3">Edit</th>
                        <th className="p-3">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, i) => (
                        <CartItem item={item} index={i} key={i} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <div className="p-8">
                <h1 className="text-center">Your Cart is Empty</h1>
                <p className="text-sm text-center text-gray-400">
                  Look like you have no items in your shopping cart.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 mt-3 lg:mt-0">
            <div className="grid justify-center grid-cols-2 gap-2 p-8 text-lg tracking-widest border rounded-md shadow-md place-items-center">
              <h2 className="">Total Price</h2>
              <h2 className="text-green-500">
                $ {Number(totalPrice).toFixed(2)}
              </h2>
            </div>

            <button
              className="block w-full p-2 text-lg tracking-widest text-white bg-blue-500 rounded-md"
              onClick={() => router.push("/checkout")}
            >
              Check Out
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
