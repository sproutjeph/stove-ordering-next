import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
const MenuItemSkeleton = () => {
  return (
    <div className="mx-auto menuItem-skeleton">
      <Skeleton height={200} width={`100%`} />

      <div className="">
        <Skeleton height={`50%`} width={`100%`} count={2} />
      </div>
    </div>
  );
};

export default MenuItemSkeleton;
