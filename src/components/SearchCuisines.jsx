import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  AUTO_SUGGEST_SEARCH_IMAGES_API,
  ROUTES_NAMES,
  SEARCH_RESULTS_API,
} from "../utils/constants";
import useDebounce from "../customHooks/useDebounce";
import { RxCross2 } from "react-icons/rx";
import { Link, Outlet, useNavigate } from "react-router-dom";
import PopularCuisines from "./PopularCuisines";

const SearchCuisines = () => {
  const navigate = useNavigate();
  const [textInput, setTextInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(true);
  const [showRes, setShowRes] = useState(false);
  const debouncedTextInput = useDebounce(textInput.trim(), 500);

  //Debounce using useDebounce
  useEffect(() => {
    if (debouncedTextInput && debouncedTextInput.length > 1) {
      fetchSuggestions(debouncedTextInput);
    } else {
      setSearchResults([]);
    }
  }, [debouncedTextInput]);

  const fetchSuggestions = async (textInput) => {
    try {
      let suggestionsResponse = await fetch(SEARCH_RESULTS_API + textInput);
      if (!suggestionsResponse.ok)
        throw new Error("Error fetching search suggestions results data");
      const suggestionsJsonData = await suggestionsResponse.json();
      // console.log(
      //   "suggestionsJsonData",
      //   suggestionsJsonData?.data?.suggestions
      // );
      setSearchResults(suggestionsJsonData?.data?.suggestions || []);
    } catch (err) {
      console.log("Error while fetching search suggestions results data", err);
    }
  };

  const handleInput = (e) => {
    setTextInput(e.target.value);
  };

  const handleClearSearch = () => {
    setTextInput("");
    navigate(ROUTES_NAMES.SEARCH);
  };

  const handleLinkClick = (text) => {
    setTextInput(text);
    setSearchResults([]);
    setShowSearchResults(false);
    setShowRes(true);
  };

  const handleFocus = () => {
    setShowSearchResults(true);
    setShowRes(false);
  };
  return (
    <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-6">
      <div className="flex my-15 items-center border border-gray-400 rounded-xl">
        <input
          className="w-full p-3 font-medium border-none outline-none"
          type="text"
          placeholder="Search for restaurants and food"
          aria-label="Search for restaurants and food"
          value={textInput}
          onChange={handleInput}
          onFocus={handleFocus}
        />
        <button className="p-3" onClick={handleClearSearch}>
          {textInput.length === 0 ? (
            <FiSearch size={24} className="text-gray-600" />
          ) : (
            <RxCross2 size={24} className="text-gray-600" />
          )}
        </button>
      </div>

      {textInput.length === 0 && (
        <PopularCuisines setTextInput={setTextInput} />
      )}
      {showRes && <Outlet />}

      {showSearchResults && (
        <div>
          {searchResults.length > 0 &&
            searchResults.map((each, index) => (
              <Link
                to={`${ROUTES_NAMES.SEARCH_RESTAURANT_DETAILS}?query=${encodeURIComponent(each.text)}`}
                // to={`/search/results?query=${encodeURIComponent(each.text)}&ctaLink=${encodeURIComponent(each.cta.link)}`}
                key={index}
                onClick={() => handleLinkClick(each.text)}
              >
                <div className="w-full flex items-center gap-3 my-2  py-2 hover:bg-[#f2f6fc]">
                  <img
                    src={AUTO_SUGGEST_SEARCH_IMAGES_API + each.cloudinaryId}
                    className="w-[70px] h-[70px] object-cover rounded-md"
                    alt={"resImage"}
                  />
                  <div>
                    <h1 className="font-medium text-lg">{each.text}</h1>
                    <p className="font-medium text-[#686b78] text-sm">
                      {each.type}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchCuisines;
