import { BiSolidOffer } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";

const NAV_ITEMS = [
  { icon: <TfiBag />, name: "Swiggy Corporate", path: "/" },
  { icon: <FiSearch />, name: "Search",path: "/search" },
  { icon: <BiSolidOffer />, name: "Offers", sup: "New" },
  { icon: <IoHelpBuoyOutline />, name: "Help", path: "/support" },
  { icon: <FaRegUser />, name: "Sign In" },
  { icon: <FiShoppingCart />, name: "Cart", path: "/cart" },
];

export default NAV_ITEMS;
