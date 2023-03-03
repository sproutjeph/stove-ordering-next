import {
  calculateTotals,
  decreaseItem,
  increaseItem,
  removeItem,
  removeModifier,
} from "../../featuers/cart/cartSlice";
import { FaPlus, FaMinus, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
import Image from "next/image";
import { images } from "@/constants";
import { ICartItem } from "@/utils/types";

type IProps = {
  item: ICartItem;
  index: number;
};

const CartItem = ({ item, index }: IProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <tr>
        <td className="w-40 p-4">
          <div className="flex w-48 gap-2">
            <Image
              src={images.ItemImage4}
              alt={item.item_name}
              className="object-cover w-40 h-24 rounded-md cursor-pointer"
            />
            <h2 className="text-sm">{item.item_name}</h2>
          </div>
        </td>

        <td className="w-20 p-4 text-center whitespace-nowrap">
          <h2 className="">$ {Number(item.item_price).toFixed(2)}</h2>
        </td>

        <td className="p-4 text-center w-28">
          <div className="flex items-center justify-between px-4 py-2 mx-auto border rounded-md w-28 h-fit">
            <FaMinus
              className="text-sm"
              onClick={() => {
                dispatch(decreaseItem({ index }));
                dispatch(calculateTotals());
              }}
            />
            <span className="text-lg text-green-700">{item.qty}</span>

            <FaPlus
              className="text-sm"
              onClick={() => {
                dispatch(increaseItem({ index }));
                dispatch(calculateTotals());
              }}
            />
          </div>
        </td>

        <td className="w-40 p-4 text-center">
          <div className="flex flex-col w-40 h-20 mx-auto overflow-y-scroll gap-y-2 scrollbar-hide">
            {item.addedModifiers?.map((mod, i) => (
              <div
                className="flex items-center justify-between gap-2 px-2 text-xs border rounded-md "
                key={mod.id}
              >
                <h6>{mod.name}</h6>
                <span>+${mod.price}</span>
                {isEditing && (
                  <div
                    className="p-1 text-white bg-red-400 cursor-pointer"
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
                    <FaTimes className="text-xs " />
                  </div>
                )}
              </div>
            ))}
          </div>
        </td>

        <td className="p-4 w-14">
          <FaEdit
            className="mx-auto text-green-500 cursor-pointer w-14"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          />
        </td>
        <td className="p-4 w-14">
          <FaTrash
            className="mx-auto text-red-400 cursor-pointer w-14"
            onClick={() => {
              dispatch(removeItem({ index: index }));
              dispatch(calculateTotals());
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default CartItem;
