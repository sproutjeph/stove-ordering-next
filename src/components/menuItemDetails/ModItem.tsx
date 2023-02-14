import {
  getAddedModifiers,
  calculateTotalsInMenuItemsDetails,
} from "@/featuers/menuItemDetails/menuItemDetailsSlice";
import { useAppDispatch } from "@/store/hooks";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Option } from "@/utils/types";

type IProps = {
  mod: Option;
};

function ModItem({ mod }: IProps) {
  const dispatch = useAppDispatch();
  const [modState, setModState] = useState<Option>({
    ...mod,
    isSelected: false,
  });

  function handleModSelection() {
    setModState({ ...modState, isSelected: !modState.isSelected });

    dispatch(
      getAddedModifiers({
        modifier: { ...modState, isSelected: !modState.isSelected },
      })
    );

    // dispatch(calculateTotalsInMenuItemsDetails());
  }

  // console.log(modState.isSelected);

  return (
    <div
      className={`${
        modState.isSelected ? "bg-green-50" : ""
      } flex gap-x-3 shadow-sm border py-2 px-4 items-center capitalize cursor-pointer`}
      onClick={() => {
        handleModSelection();
      }}
    >
      <h6 className="text-sm">{mod.name}</h6>{" "}
      <span className="text-sm">+ ${mod.price}</span>
      {modState.isSelected ? (
        <FaCheck className="ml-auto text-xs text-green-400" />
      ) : null}
    </div>
  );
}

export default ModItem;
