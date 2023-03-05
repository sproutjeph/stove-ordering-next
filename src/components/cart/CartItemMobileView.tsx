import {
  increaseItem,
  decreaseItem,
  calculateTotals,
  removeItem,
  removeModifier,
} from "@/featuers/cart/cartSlice";
import { FaPlus, FaMinus, FaEdit, FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ICartItem } from "@/utils/types";
import { images } from "@/constants";
import { useState } from "react";
import Image from "next/image";

type IProps = {
  item: ICartItem;
  index: number;
};

const CartItemMobileView = ({ item, index }: IProps) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <div className="relative w-full h-full p-4 mx-auto mt-4 bg-white rounded-md shadow-md sm:w-96">
        <div
          className="absolute grid w-10 h-10 bg-blue-100 rounded-full shadow-lg cursor-pointer -top-4 -right-2 place-items-center hover:text-red-400"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          <FaEdit className="" />
        </div>
        <div className="mx-auto mb-2">
          <Image
            src={images.ItemImage4}
            alt={item.item_name}
            className="object-cover w-full h-40 rounded-md cursor-pointer"
          />
        </div>

        <div className="max-w-sm">
          <div className="text-center md:text-left">
            <h2 className="text-xl tracking-wider text-primary">
              {item.item_name}
            </h2>
            <p className="px-3 mt-2 text-sm">{item.item_name}</p>
          </div>

          <div className="flex items-center justify-between mt-6 mb-4 md:items-start ">
            <div className="">
              <h2 className="text-xl tracking-widest">
                Price : $ {Number(item.item_price).toFixed(2)}
              </h2>
              <button
                className="px-2 py-1 mt-2 text-sm tracking-widest text-gray-500 bg-red-100 rounded-md"
                onClick={() => {
                  dispatch(removeItem({ index: index }));
                  dispatch(calculateTotals());
                }}
              >
                Remove
              </button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <button
                className="px-2 py-1 text-gray-500 bg-green-100 rounded-md"
                onClick={() => {
                  dispatch(increaseItem({ index }));
                  dispatch(calculateTotals());
                }}
              >
                <FaPlus className="text-md" />
              </button>
              <span className="text-lg text-green-700">{item.qty}</span>

              <button
                className="px-2 py-1 text-gray-500 bg-red-100 rounded-md"
                onClick={() => {
                  dispatch(decreaseItem({ index }));
                  dispatch(calculateTotals());
                }}
              >
                <FaMinus className="text-md" />
              </button>
            </div>
          </div>
        </div>
        <h6 className="mb-1 text-xs text-center">Added Items</h6>
        <ul className="grid grid-cols-2 gap-1 p-2 text-xs capitalize border">
          {item.addedModifiers?.map((mod, i) => {
            return (
              <div
                key={mod.id + i}
                className="relative p-1 border cursor-pointer w-fit"
              >
                {isEditing && (
                  <div
                    className="absolute grid w-4 h-4 bg-red-400 rounded-full -right-3 -top-1 place-items-center"
                    onClick={() => {
                      if (isEditing) {
                        dispatch(
                          removeModifier({
                            modId: mod.id,
                            price: mod?.price!,
                            modIndex: i,
                            itemId: item.itemid,
                            itemIndex: index,
                          })
                        );

                        dispatch(calculateTotals());
                      }
                    }}
                  >
                    <FaTimes className="text-white" />
                  </div>
                )}
                {mod.name}{" "}
                <span className="ml-2">+${mod?.price?.toFixed(2)}</span>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CartItemMobileView;
