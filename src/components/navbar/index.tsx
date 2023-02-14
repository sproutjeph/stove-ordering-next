import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openSidebar } from "@/featuers/sidebar/sidebarSlice";
import { useVenueData } from "@/queryHooks/useVenueData";
import { navLinksData } from "@/utils/data";
import { VenueData } from "@/utils/types";
import { BsCart4 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

type VenueNetworkData = {
  venueData: VenueData[];
  isLoading: boolean;
  isSuccess: boolean;
};

const Navbar = () => {
  const { venueData, isLoading, isSuccess }: VenueNetworkData = useVenueData();

  const router = useRouter();

  const { totalCartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [navLinks, setNavLinks] = useState(navLinksData);

  function navigateToNextLink(id: string) {
    setNavLinks((prev) => {
      prev.forEach((l) => (l.isActive = false));
      const activeLink = prev.find((l) => l.id === id);
      if (activeLink) {
        activeLink.isActive = true;
      }
      return [...navLinks];
    });
  }

  return (
    <>
      <nav className="fixed top-0 z-40 w-full bg-white shadow-md">
        <div className="flex items-center justify-between px-3 py-4 mx-auto max-w-7xl">
          <FaBars
            className="text-xl cursor-pointer"
            onClick={() => {
              dispatch(openSidebar());
            }}
          />

          <ul className="hidden gap-8 tracking-wider capitalize md:flex text-md">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                onClick={() => {
                  navigateToNextLink(link.id);
                }}
                className={`${
                  link.isActive ? "bg-blue-500 text-white" : ""
                }  py-1 px-3 rounded-md hover:bg-blue-500 hover:text-white`}
                key={link.id}
              >
                {link.text}
              </Link>
            ))}
          </ul>

          <div className="md:hidden">
            <h1 className="text-xl text-blue-500">
              {venueData?.[0]?.venuename}
            </h1>
          </div>

          <div
            className="flex items-center gap-2 px-4 py-1 border rounded-md cursor-pointer "
            onClick={() => {
              router.push("/cart");
            }}
          >
            <BsCart4 className="text-2xl md:text-3xl" />
            <span className="text-blue-500 ">{totalCartItems}</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
