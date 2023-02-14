import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
interface ISidebarProps {
  Icon: IconType;
  text: string;
}
const SidebarItem = ({ Icon, text }: ISidebarProps) => {
  return (
    <Link href="/">
      <li className="flex gap-4 list-none cursor-pointer hover:bg-primary100">
        <Icon className="text-2xl" />
        <span>{text}</span>
      </li>
    </Link>
  );
};

export default SidebarItem;
