import { getMenuItemDetails } from "@/featuers/menuItemDetails/menuItemDetailsSlice";
import { addToCart, calculateTotals } from "@/featuers/cart/cartSlice";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "@/store/hooks";
import { MenuItem } from "@/utils/types";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { images } from "@/constants";
import Image from "next/image";
import { useEffect } from "react";

type IProps = {
  item: MenuItem;
  index: number;
};

const MenuItem = ({ item, index }: IProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <>
      <article
        className="relative shadow-sm cursor-pointer group rounded-t-md bg-blue-50 intro-x"
        onClick={() => {
          localStorage.setItem("itemId", JSON.stringify(item.itemid));
          dispatch(getMenuItemDetails({ itemId: item.itemid }));
          router.push(`/menuitem-details/${item.itemid}`);
        }}
      >
        <Image
          src={images.ItemImage4}
          alt=""
          className="object-cover w-full rounded-sm h-52"
          loading="lazy"
        />
        <div className="grid grid-cols-2 px-4 py-2">
          <h4 className="col-span-2 mt-2 mb-2 text-lg">{item?.item_name}</h4>
          <FaHeart className="text-blue-500" />
          <h4 className="ml-auto text-lg font-bold">$ {item?.item_price}</h4>
        </div>
        <div
          className="absolute p-3 text-gray-300 bg-blue-500 rounded-full opacity-0 cursor-pointer right-4 top-36 group-hover:opacity-100 "
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart({ cartItem: item, qty: 1 }));
            dispatch(calculateTotals());
            toast(`${item.item_name} added to cart`);
          }}
        >
          <FaShoppingCart />
        </div>
      </article>
    </>
  );
};

export default MenuItem;
