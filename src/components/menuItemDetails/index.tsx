import {
  increaseItem,
  decreaseItem,
  calculateTotalsInMenuItemsDetails,
  getMenuItemDetails,
} from "@/featuers/menuItemDetails/menuItemDetailsSlice";
import { addToCart, calculateTotals } from "@/featuers/cart/cartSlice";
import { FaChevronLeft, FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { useVenueData } from "@/queryHooks/useVenueData";
import { useMenuItem } from "@/queryHooks/useMenuItem";
import { ICartItem, ReturnData } from "@/utils/types";
import { VenueData } from "@/utils/types";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { images } from "@/constants";
import ModItem from "./ModItem";
import Image from "next/image";

type IProps = {
  id: string;
};

type VenueNetworkData = {
  venueData: VenueData[];
  isLoading: boolean;
  isSuccess: boolean;
};

type MenuNetworkData = {
  menuData: ReturnData;
  isLoading: boolean;
  isSuccess: boolean;
};

const MenuItemDetailsPage = ({ id }: IProps) => {
  const router = useRouter();
  const { venueId } = router.query;
  const [vId, setVid] = useState<number>();
  useEffect(() => {
    setVid(Number(venueId));
  }, [venueId]);
  const { venueData }: VenueNetworkData = useVenueData(vId);
  const { menuData, isLoading, isSuccess }: MenuNetworkData = useMenuItem(vId);

  const currentItem = menuData?.menuItems?.find(
    (item) => item.itemid === Number(id)
  ) as ICartItem;

  useEffect(() => {
    dispatch(getMenuItemDetails({ currentItem: currentItem }));
  }, [id, currentItem]);

  const { selectedItemData, totalItemPrice } = useAppSelector(
    (state) => state.menuItemDetails
  );
  const [selectedItem, setSelectedItem] = useState<ICartItem>(
    selectedItemData!
  );
  const [selectedItemTotalPrice, setSelectedItemTotalPrice] = useState<number>(
    Number(selectedItem?.item_price)
  );

  useEffect(() => {
    dispatch(calculateTotalsInMenuItemsDetails());
  }, [id]);

  useEffect(() => {
    setSelectedItemTotalPrice(totalItemPrice!);
  }, [id, totalItemPrice, selectedItemTotalPrice]);
  useEffect(() => {
    if (selectedItemData) {
      setSelectedItem(selectedItemData);
    }
    setSelectedItemTotalPrice(totalItemPrice!);
  }, [selectedItem, selectedItemData, id, totalItemPrice, venueId]);

  const dispatch = useAppDispatch();

  function modSelectHandler(e: ChangeEvent<HTMLSelectElement>) {
    const [id, name, price] = e.target.value.split(",");
    const newMod = [
      {
        id,
        name,
        price: Number(price),
        itemId: id,
        isSelected: false,
      },
    ];
  }

  return (
    <>
      <div
        className="flex items-center gap-1 mx-auto mt-24 text-gray-500 cursor-pointer max-w-7xl"
        onClick={() => {
          router.back();
        }}
      >
        <FaChevronLeft />
        <h6 className="select-none">{`${venueData?.[0]?.venuename}'s Menu`}</h6>
      </div>

      <div className="gap-8 px-4 mx-auto mb-40 mt-14 max-w-7xl md:flex">
        <div className="flex-1">
          <Image
            src={images.ItemImage4}
            alt={""}
            className="object-cover w-full mx-auto rounded-md h-96"
          />
          <div className="">
            <h6 className="my-4 text-xl font-extrabold leading-5 tracking-wider text-center text-blue-500">
              {selectedItem?.item_name}
            </h6>
            <h6 className="mx-auto text-sm text-center text-gray-400 w-80">
              {selectedItem?.item_name}
              {selectedItem?.item_name}
              {selectedItem?.item_name}
            </h6>
          </div>
        </div>
        <div className="flex-1">
          <hr className="my-3 md:hidden" />
          <ul className="flex flex-col gap-2 md:grid md:grid-cols-2">
            <h4 className="col-span-2 p-1 text-center bg-blue-100 border">
              {selectedItem?.itemOptions_json?.[0]?.name}
            </h4>
            {selectedItem?.itemOptions_json?.[0]?.optionType === 3 ? (
              <select
                name=""
                id=""
                className="col-span-2 form-control"
                onChange={(e) => {
                  modSelectHandler(e);
                }}
              >
                <option value="" className="bg-blue-100 border">
                  Select {selectedItem?.itemOptions_json?.[0]?.name}
                </option>
                {selectedItem?.itemOptions_json?.[0].options?.map((mod, i) => (
                  <option
                    value={[mod.id, mod.name, String(mod.price)]}
                    key={mod.id + mod.name}
                  >
                    {mod.name}
                  </option>
                ))}
              </select>
            ) : (
              selectedItem?.itemOptions_json?.[0]?.options?.map((mod, i) => (
                <ModItem mod={mod} key={mod.id + mod.name} />
              ))
            )}

            <h4 className="col-span-2 my-2 text-center bg-blue-100 border">
              {selectedItem?.itemOptions_json?.[1]?.name}
            </h4>

            {selectedItem?.itemOptions_json?.[1]?.options?.map((mod, i) => (
              <ModItem mod={mod} key={mod.id + mod.name} />
            ))}

            <h4 className="col-span-2 my-2 text-center bg-blue-100 border">
              {selectedItem?.itemOptions_json?.[2]?.name}
            </h4>
            {selectedItem?.itemOptions_json?.[2]?.options?.map((mod, i) => (
              <ModItem mod={mod} key={mod.id + mod.name} />
            ))}
          </ul>

          <div className="my-4">
            <h6 className="text-center">Special Request</h6>
            <textarea
              className="w-full form-control"
              name=""
              id=""
              placeholder="Special requests are not guaranteed. It may be ignored"
            />
          </div>
          <div className="mt-4 bg-gray-100 ">
            <div className="flex justify-between p-4">
              <h6>QTY</h6>
              <div className="flex items-center gap-3">
                <div
                  className="p-1 bg-red-100"
                  onClick={() => {
                    dispatch(decreaseItem());
                    dispatch(calculateTotalsInMenuItemsDetails());
                  }}
                >
                  <FaMinus className="cursor-pointer" />
                </div>

                <span>{selectedItem?.qty}</span>
                <div
                  className="p-1 bg-green-100"
                  onClick={() => {
                    dispatch(increaseItem());
                    dispatch(calculateTotalsInMenuItemsDetails());
                  }}
                >
                  <FaPlus className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div
              className="flex justify-between w-full px-4 py-2 mt-4 text-white bg-blue-400 cursor-pointer rounded-b-md"
              onClick={() => {
                dispatch(addToCart({ cartItem: selectedItem!, qty: 1 }));
                dispatch(calculateTotals());
                toast(`${selectedItem?.item_name} added to cart`);
              }}
            >
              <h6>Add to Cart</h6>
              <span>$ {selectedItemTotalPrice?.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemDetailsPage;
