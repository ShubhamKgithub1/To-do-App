import { useState } from "react";

const AddItem = ({ addItem }) => {
  const [Item, setItem] = useState("");
  const handleClick = () => {
    if (Item.trim()) {
      addItem(Item.toUpperCase());
      setItem("");
    }
  };
  return (
    <div className="flex gap-6 p-3 items-center my-3">
      <input
        className="p-2 px-3 flex-1 rounded-2xl outline-none bg-[#f0fdfa]"
        type="text"
        value={Item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        className="bg-white px-5 py-2 rounded-lg font-medium sm:font-medium md:font-semibold hover:bg-black hover:text-white transition-all transform active:scale-90"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};
export default AddItem;
