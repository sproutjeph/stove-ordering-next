import { FaDollarSign } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import Link from "next/link";

type IProps = {
  restaurantName: string | null;
};

const RestaurantLogo = ({ restaurantName }: IProps) => {
  return (
    <>
      <Link href="/">
        <div className="flex items-center px-3 py-2 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600">
          <span className="mr-1 text-sm font-light capitalize">
            {String(restaurantName).substring(0, 15)}
          </span>
          <div className="relative">
            <BsCart4 className="text-2xl" />
            <span className="absolute top-[-6px] right-[-6px] z-10 flex h-4 w-4 items-center justify-center rounded-full bg-blue-800  text-sm text-white">
              <FaDollarSign className="text-xs" />
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RestaurantLogo;
