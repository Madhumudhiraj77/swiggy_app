import React from "react";
import { NOT_FOUND_IMG, ROUTES_NAMES } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(ROUTES_NAMES.HOME);
  };

  return (
    <div className=" flex flex-col md:w-8/12 lg:w-6/12 justify-center items-center  m-auto text-center gap-4 py-5">
      <img
        className="max-h-80 w-auto object-contain"
        src={NOT_FOUND_IMG}
        alt="Not found"
        loading="lazy"
      />
      <h1 className="font-bold text-2xl">Page not found</h1>
      <p className="text-gray-600">
        Uh-oh! Looks like the page you are trying to access, doesn't exist.
        Please start afresh.
      </p>
      <button
        onClick={handleNavigate}
        className="uppercase bg-[#ff5200] text-white px-4 py-2 font-bold rounded hover:bg-[#e64900] transition-all"
      >
        GO Home
      </button>
    </div>
  );
};

export default PageNotFound;
