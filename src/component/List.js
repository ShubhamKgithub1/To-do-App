const List = ({ list, removeItem }) => {
  return (
    <div className="pt-6 text-black font-medium md:font-semibold text-lg transition-all duration-500 max-h-[400px] md:max-h-[200px] lg:max-h-[300px] overflow-x-auto">
      {list.length > 0 ? (
        list.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-3 py-4  border-t-[1px] border-black"
          >
            {/* <input type="checkbox" /> */}
            <h2 className="flex-1 ml-3">
              {index + 1} - {item}
            </h2>
            <button
              className="bg-white py-1 p-2 sm:px-3 rounded-lg hover:scale-[1.02] active:scale-95 "
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center pb-7">List is empty</p>
      )}
    </div>
  );
};

export default List;
