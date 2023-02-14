import { IAccount, INavLinkTypes } from "@/utils/types";
import {
  FaAirbnb,
  FaElementor,
  FaEnvelope,
  FaFirstOrder,
  FaHeart,
  FaStar,
  FaMotorcycle,
  FaCreditCard,
  FaUsersCog,
} from "react-icons/fa";
import { MdToys } from "react-icons/md";
export const navLinksData: INavLinkTypes[] = [
  { text: "menu", id: "1", isActive: true, path: "/" },
  { text: "order now", id: "2", isActive: false, path: "/" },
  { text: "restaurants", id: "3", isActive: false, path: "/" },
  { text: "delivery", id: "4", isActive: false, path: "/delivery" },
  { text: "login", id: "5", isActive: false, path: "/auth" },
];

export const myAccountData: IAccount[] = [
  { Icon: FaFirstOrder, text: "Orders" },
  { Icon: FaEnvelope, text: "Inbox" },
  { Icon: FaAirbnb, text: "Pending Orders" },
  { Icon: FaAirbnb, text: "Restaurant Coupon" },
  { Icon: FaHeart, text: "Saved Items" },
];
export const ourServicesData: IAccount[] = [
  { Icon: FaStar, text: "Restaurant Prime" },
  { Icon: FaStar, text: "Pay For Delivery" },
];
export const ourCategoriesData: IAccount[] = [
  { Icon: FaFirstOrder, text: "BreakFast" },
  { Icon: FaMotorcycle, text: "Lunch" },
  { Icon: FaAirbnb, text: "Bakery" },
  { Icon: FaElementor, text: "Wine" },
  { Icon: FaElementor, text: "Sandwiches" },
  { Icon: MdToys, text: "Others" },
];
