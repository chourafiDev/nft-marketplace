import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      className={`flex items-center border border-white/10 px-4 py-1 rounded-lg duration-300 ease-in ${
        isFocus ? "border-primary" : "border-white/10"
      }`}
    >
      <input
        type="text"
        placeholder="Search Here"
        className="bg-transparent outline-none text-light caret-primary w-48"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <BiSearch className="text-light pl-2 cursor-default" size={28} />
    </div>
  );
};

export default Search;
