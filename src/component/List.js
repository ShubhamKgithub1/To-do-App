import { useState } from "react";

const List = ({ list, removeItem, setList }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [index]: !prev[index] };
      setIsVisible(
        Object.values(newCheckedItems).some((isChecked) => isChecked)
      );
      return newCheckedItems;
    });
  };
  const handleClick = () => {
    const newList = list.filter((_, index) => !checkedItems[index]);
    setList(newList);
    setCheckedItems({});
    setIsVisible(false);
  };

  return (
    <div className="pt-6 text-black font-medium md:font-semibold text-base lg:text-base transition-all duration-500  ">
      <div className="overflow-x-auto max-h-[387px] md:max-h-[194px] lg:max-h-[322px]">
        {list.length > 0 && (
          list.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-3 py-4   border-slate-300 shadow-md"
            >
              <input
                type="checkbox"
                checked={!!checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <h2 className="flex-1 ml-3">
                {index + 1} - {item}
              </h2>
              <button
                className="bg-white py-1 p-2 sm:px-3 rounded-lg hover:scale-[1.02] active:scale-95 shadow-lg hover:bg-black hover:text-white"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {isVisible && (
        <div className="flex justify-center">
          <button
            className="px-[6px] sm:px-3 py-[5px] bg-white font-medium lg:font-medium rounded-lg hover:bg-black hover:text-white transition-all transform active:scale-95 shadow-xl mx-3 my-4"
            onClick={handleClick}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default List;
