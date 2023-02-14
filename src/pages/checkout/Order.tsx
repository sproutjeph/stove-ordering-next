// import { IMenuItemData } from "../../utils/types";

type IProps = {
  item: any;
};

const Order = ({ item }: IProps) => {
  return (
    <div className="p-1 border">
      <div className="flex items-center justify-between mb-1">
        <h1>{item.itemName}</h1>
        <h4>${item.price} </h4>
      </div>
      {/* <div className="">
        <ul className="flex text-xs">
          {item.addedMods?.map((mod) => (
            <span key={mod.id}>
              ({mod.name})
            </span>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Order;
