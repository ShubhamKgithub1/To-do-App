import { useState } from "react";
import Header from "./component/Header";
import AddItem from "./component/AddItem";
import List from "./component/List";

function App() {
  const [lists, setLists] = useState([]);

  const addItem = (item) => {
    setLists([...lists, item]);
  };

  const removeItem = (index) => {
    setLists(lists.filter((_, i) => i !== index));
  };

  const clearList = () => {
    setLists([]);
  };

  return (
    <div className="flex w-[100vw] justify-center h-[90vh] items-center">
      <div className="w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto bg-[#c8fff4] border lg:border-2 rounded-xl sm:rounded-2xl overflow-hidden">
        <Header />
        <AddItem addItem={addItem} />
        {lists.length > 0 && (
          <div className="flex justify-start px-3">
            <button
              className="px-[6px] sm:px-3 py-[6px] bg-white font-medium lg:font-semibold rounded-lg hover:bg-black hover:text-white transition-all transform active:scale-95 shadow-xl"
              onClick={clearList}
            >
              Clear List
            </button>
          </div>
        )}
        <List list={lists} removeItem={removeItem} setList={setLists} />
      </div>
    </div>
  );
}

export default App;
