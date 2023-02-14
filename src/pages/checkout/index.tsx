import { FaChevronLeft, FaPlus } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { images } from "@/constants";
import Image from "next/image";

const CheckOutPage = () => {
  const router = useRouter();
  // const { cartItems, totalPrice } = useAppSelector((state) => state.cart);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  return (
    <main className="grid px-4 mx-auto mt-24 mb-40 max-w-7xl md:grid-cols-2">
      <div className="">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span>
            <FaChevronLeft />
          </span>{" "}
          <span>Continue Ordering</span>
        </div>
        <h1 className="my-8 border-b-2 w-fit">
          Estimated delivery Time: 30 minutes
        </h1>
        <div className="">
          <label
            htmlFor="promo"
            className="text-lg tracking-wider cursor-pointer"
          >
            Promo
          </label>
          <div className="flex">
            <input
              type="text"
              id="promo"
              placeholder="Enter Promo Code"
              className="block px-4 py-2 rounded-l-md"
            />
            <button className="px-3 text-white bg-blue-500 rounded-r-md">
              Apply
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 text-xl">Payment Method</h2>

          <div className="max-w-md p-4 border rounded-md shadow-md ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="p-2 rounded-full" />
                <h4>Credit / Debit Card</h4>
              </div>
              <div className="flex">
                <Image
                  src={images.MasterCardImage}
                  className="object-contain h-14 w-14"
                  alt=""
                />
                <Image
                  src={images.VisaCardImage}
                  className="object-contain h-14 w-14"
                  alt=""
                />
              </div>
            </div>

            <select
              name=""
              id=""
              className="block px-4 py-2 rounded-md form-control"
            >
              <option value="">1234567</option>
              <option value="">1234567</option>
              <option value="">1234567</option>
            </select>

            <div
              className="flex items-center gap-2 mt-4 text-green-500 cursor-pointer"
              onClick={() => {}}
            >
              <FaPlus />
              <h6>Add Card</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Begin Orders and surmmary */}
      <div className="">
        <div className="max-w-md p-4 mt-10 rounded-md shadow-md">
          <h1 className="mb-4 text-lg text-center">Orders({[1, 2].length})</h1>
          {/* <ul className="flex flex-col gap-1">
            {cartItems.map((item) => (
              <Order item={item} key={item.id} />
            ))}
          </ul> */}
        </div>

        <div className="max-w-md p-4 mt-10 rounded-md shadow-md">
          <div className="mb-4 ">
            <h1 className="text-lg text-center text-blue-500">Summary</h1>
          </div>
          <div className="flex items-center justify-between mb-2">
            <h1 className="">Subtotal</h1>
            <span>$ {Number(20).toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="">Tax</h1>
            <span>$ {Number(0).toFixed(2)}</span>
          </div>
          <hr />
          <div className="flex items-center justify-between mt-2">
            <h1>Total</h1>
            <span>$ {Number(50).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckOutPage;
