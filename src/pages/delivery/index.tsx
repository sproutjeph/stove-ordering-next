import { FaChevronRight } from "react-icons/fa";

const DeliveryPage = () => {
  return (
    <main className="my-24 mt-24 max-w-7xl mx-auto px-4">
      <div className="">
        <label
          htmlFor="promo"
          className="cursor-pointer text-lg tracking-wider"
        >
          Address
        </label>
        <div className="flex">
          <input
            type="text"
            id="promo"
            placeholder="Enter Delivery Address"
            className="block px-4 py-2 rounded-l-md"
          />
          <button className="bg-blue-500 text-white px-3 rounded-r-md">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default DeliveryPage;
