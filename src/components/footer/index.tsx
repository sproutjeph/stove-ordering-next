import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import RestaurantLogo from "../restaurantLogo";

const Footer = () => {
  // let restaurantName = localStorage.getItem("restaurantName");
  // let venueAddress = localStorage.getItem("venueAddress");
  // let venueEmail = localStorage.getItem("venueEmail");

  // if (restaurantName) {
  //   restaurantName = JSON.parse(restaurantName);
  // }
  // if (venueAddress) {
  //   venueAddress = JSON.parse(venueAddress);
  // }
  // if (venueEmail) {
  //   venueAddress = JSON.parse(venueEmail);
  // }
  return (
    <footer className=" bg-[#000] py-4 px-4 text-xs capitalize tracking-wider text-white md:grid grid-cols-2 mt-20">
      <div className="flex justify-center col-span-2 gap-8 my-8 text-3xl text-blue-400 md:gap-24">
        <FaFacebook className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <FaInstagramSquare className="cursor-pointer" />
        <FaYoutube className="text-red-400 cursor-pointer" />
      </div>
      <div className="py-4 mb-10 bg-gray-900 md:bg-black ">
        <h1 className="text-3xl tracking-wider text-center uppercase">
          Location
        </h1>
        <h4 className="mt-2 tracking-wider text-center ">{"Stove"}</h4>
        <h4 className="mt-4 tracking-wider text-center text-md">
          {"" || "Midway Dr Escondido, CA 92027 "}
        </h4>
        <h4 className="mt-2 text-lg tracking-wider text-center">
          (760) 480-7279
        </h4>
      </div>
      <div className="mb-10 text-lg text-center">
        <h4 className="lowercase"> Stove@gmail.com</h4>
        <h6>Monday - Friday:</h6>
        <h6>7:00 am - 9:00 pm</h6>
        <h6 className="mt-4">Saturday - Sunday:</h6>
        <h6>7:00 am - 3:00 pm</h6>
      </div>
      <hr className="col-span-2" />
      <div className="flex justify-center col-span-2 my-10">
        <RestaurantLogo restaurantName={"Stove"} />
      </div>
    </footer>
  );
};

export default Footer;
