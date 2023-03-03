import { Loading, MenuItem, StoreInfoModal } from "@/components";
import { FaArrowLeft, FaInfo, FaSearch } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useVenueData } from "@/queryHooks/useVenueData";
import { useMenuItem } from "@/queryHooks/useMenuItem";
import { ReturnData, VenueData } from "@/utils/types";
import { useEffect, useState } from "react";
import { images } from "@/constants";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
type MenuNetworkData = {
  menuData: ReturnData;
  isLoading: boolean;
  isSuccess: boolean;
};
type VenueNetworkData = {
  venueData: VenueData[];
  isLoading: boolean;
  isSuccess: boolean;
};

export default function Home() {
  const router = useRouter();
  const [showStoreInfoModal, setShowStoreInfoModal] = useState(false);
  const { venueId, terminalId, timeZone } = router.query;
  const [vId, setVid] = useState<number>();
  useEffect(() => {
    setVid(Number(venueId));
  }, [venueId]);
  console.log(venueId);

  const { menuData, isLoading, isSuccess }: MenuNetworkData = useMenuItem();

  const {
    venueData,
    isLoading: venueDataLoading,
    isSuccess: venueDataIsSuccess,
  }: VenueNetworkData = useVenueData(vId, vId);

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("menuItemData", JSON.stringify(menuData));
    }
  }, [menuData, isSuccess]);

  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState("");

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [category, setCategory] = useState({ id: 1111, name: "All Items" });

  function searchHandler() {
    console.log(searchInput);
  }

  const categoryButtons = menuData?.menuCat?.reduce(
    (acc, curr, arr) => {
      acc.push(curr);
      return acc;
    },
    [{ menu_name: "All Items", menucat: 1111, sortorder: 0 }]
  );

  const menuCategoryInfo = menuData?.menuCat?.map((item) => ({
    id: item.menucat,
    text: item.menu_name,
    numberOfItems: menuData.menuItems.filter(
      (item2) => item2.menucatid === item.menucat
    ).length,
    items: menuData.menuItems.filter(
      (item2) => item2.menucatid === item.menucat
    ),
  }));

  return (
    <>
      {isLoading ? (
        <Loading iconColor="red" />
      ) : (
        <>
          <Head>
            <title>Stove online Ordering Page</title>
            <meta name="description" content="Stove online Ordering page" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="">
            <h1 className="p-2 text-2xl tracking-wider text-center capitalize bg-black">
              <span className="text-blue-200">{`${venueData?.[0].venuename}'s Menu`}</span>
            </h1>
            <div className="w-full h-24 ">
              <Image
                src={images.ItemImage6}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3 bg-slate-100">
              <div className="grid justify-between grid-cols-2 mb-2 gap-y-4 md:flex">
                <Link href="/" className="flex items-center gap-2">
                  <FaArrowLeft />
                  <h4>Venues</h4>
                </Link>

                <div
                  className="flex items-center ml-auto underline cursor-pointer md:ml-0"
                  onClick={() => {
                    setShowStoreInfoModal(true);
                  }}
                >
                  <FaInfo />
                  <span>Store Information</span>
                </div>
                <h6>Opens at 5am</h6>
                <h6 className="ml-auto md:ml-0">Closes at 10pm</h6>
              </div>
            </div>

            <div
              className={`${
                sticky &&
                "fixed top-[4.16rem] md:top-[4.54rem] z-50 bg-white w-full px-0"
              }  scrollbar-hide max-w-[79.5rem] px-2`}
            >
              {/* Search bar */}
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-full rounded-l-sm"
                  placeholder="Search Menu Item"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
                <div
                  className="p-3 text-white bg-blue-500 border border-blue-500 rounded-r-md"
                  onClick={() => {
                    searchHandler();
                  }}
                >
                  <FaSearch />
                </div>
              </div>
              {/*End Search bar */}

              <ul className="flex items-center w-full gap-1 py-3 mt-4 overflow-x-scroll rounded-md intro-x bg-gray-50 ">
                {categoryButtons?.map((menuCat) => (
                  <li key={menuCat.menucat} className="">
                    <button
                      className="w-32 py-1 text-white bg-gray-600 rounded-md hover:bg-black hover:text-white focus:bg-black"
                      onClick={() =>
                        setCategory({
                          id: menuCat.menucat,
                          name: menuCat.menu_name,
                        })
                      }
                    >
                      {menuCat.menu_name}
                    </button>
                  </li>
                ))}
              </ul>
              {/* <h1 className="px-3 py-1 mx-3 mb-2 tracking-widest text-blue-200 bg-gray-800 rounded-md col-span-full intro-x w-fit">
                {category.name}
              </h1> */}
            </div>

            <div className="mt-10 ">
              <ul className="grid grid-cols-1 gap-4 mx-3 md:grid-cols-3 intro-y">
                {menuCategoryInfo?.map((item, i) => {
                  if (category.id === 1111) {
                    return (
                      <>
                        {item.items.length > 0 && (
                          <h1 className="px-3 py-1 mx-3 mb-2 tracking-widest text-blue-200 bg-gray-800 rounded-md col-span-full intro-x w-fit">
                            {item.text}
                          </h1>
                        )}

                        {item.items?.map((item2, i2) => (
                          <MenuItem
                            key={item2.itemid}
                            item={item2}
                            index={i2}
                          />
                        ))}
                      </>
                    );
                  } else if (item.id === category.id) {
                    return item.items?.map((item2, i2) => (
                      <MenuItem key={item2.itemid} item={item2} index={i2} />
                    ));
                  }
                })}
              </ul>
            </div>
          </main>
        </>
      )}

      <StoreInfoModal
        showStoreInfoModal={showStoreInfoModal}
        setShowStoreInfoModal={setShowStoreInfoModal}
      />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps<{
//   menuData: ReturnData;
// }> = async (context) => {
//   const venueId = 1;
//   const timeZone = "America/Los_Angeles";
//   const URL = `https://external.stovepos.com/sys/v4/menu/getMenu?venueid=${venueId}&timezone=${timeZone}`;
//   const res = await fetch(URL);
//   const menuData = await res.json();

//   return {
//     props: {
//       menuData,
//     },
//   };
// };
