import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import RestaurantItem from "./RestaurantItem";
import { colors } from "../utils/constants";

const RestaurantCategory = ({
  resCategoryData,
  showItems,
  setExpandedIndex,
  setAllCollapse,
}) => {
  const { title, itemCards } = resCategoryData;

  const handleAccordion = () => {

    showItems ? setAllCollapse() : setExpandedIndex();

  };

  return (
    <div>
      <div
        className="flex justify-between items-center"
        onClick={handleAccordion}
      >
        <h1 className="font-bold text-[18px]">
          {title} ({itemCards?.length || 0 })
        </h1>
        <button>
          {!showItems ? (
            <MdKeyboardArrowDown size={40} />
          ) : (
            <MdKeyboardArrowUp size={40} />
          )}
        </button>
      </div>

      {showItems && itemCards?.length > 0 && 
        itemCards.map((eachItem, index, array) => (
          <React.Fragment key={eachItem.card.id}>
            <RestaurantItem
              resItem={eachItem.card}
              customBgColor={colors[index % colors.length]}
            />
            {index !== array.length - 1 && (
              <hr className=" border-[#f2f2f3] border-[1px] my-4" />
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

export default RestaurantCategory;
