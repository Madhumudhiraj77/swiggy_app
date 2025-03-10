import React, { useEffect, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {ROUTES_NAMES } from "../utils/constants";
import logo from "../assets/swiggy-logo.png";
import { useSelector } from "react-redux";
import NAV_ITEMS from "../utils/NavItems";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const totalCartItems = useSelector((store) => store.cart.totalCount);
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [toggle]);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const handleNavigate = () => {
    navigate(ROUTES_NAMES.HOME);
  };

  return (
    <>
      <div
        onClick={hideSideMenu}
        className="black-overlay w-full h-full fixed  duration-500 z-[999999] "
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[60vw] md:w-[40vw] bg-white h-full absolute"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="p-4">
            <IoMdClose size={30} onClick={hideSideMenu} />
            <nav className="md:hidden block list-none gap-6 ml-auto font-bold lg:text-[16px] md:text-[14px]">
            {NAV_ITEMS.map(({ icon, name, sup, path }, index) => (
              <Link to={path} key={index}  onClick={hideSideMenu}>
                <li className=" h-full flex gap-2 items-center hover:text-[#ff5200] cursor-pointer py-3">
                  <span className="text-md font-bold">{icon}</span>
                  <span>{name}</span>
                  {name === "Cart" && totalCartItems > 0 && (
                    <sup className="text-[#ffa700]">{totalCartItems}</sup>
                  )}
                  {sup && name !== "Cart" && (
                    <sup className="text-[#ffa700] ">{sup}</sup>
                  )}
                </li>
              </Link>
            ))}
          </nav>
          </div>
        </div>
      </div>
      <header className="p-1 shadow-xl text-[rgba(2,6,12,.7)] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto  flex items-center">
          <div
            className="w-[20vw] lg:w-[5vw] cursor-pointer mr-5"
            onClick={handleNavigate}
          >
            <img src={logo} alt="logo" className="w-full  h-auto" />
          </div>
          <div onClick={showSideMenu} className=" cursor-pointer">
            <span className="font-bold border-b-[3px] hover:text-[#ff5200]">
              Other
            </span>
            <span> Pragathi Nagar, Ramanthapur, Hyd</span>
            <RxCaretDown fontSize={25} className="inline text-[#ff5200]" />
          </div>
          <nav className="hidden md:flex list-none gap-6 ml-auto font-bold lg:text-[16px] md:text-[14px]">
            {NAV_ITEMS.map(({ icon, name, sup, path }, index) => (
              <Link to={path} key={index}>
                <li className=" h-full flex gap-2 items-center hover:text-[#ff5200] cursor-pointer">
                  <span className="text-xl font-bold">{icon}</span>
                  <span>{name}</span>
                  {name === "Cart" && totalCartItems > 0 && (
                    <sup className="text-[#ffa700]">{totalCartItems}</sup>
                  )}
                  {sup && name !== "Cart" && (
                    <sup className="text-[#ffa700] ">{sup}</sup>
                  )}
                </li>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
