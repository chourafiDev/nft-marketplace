import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";

const Wallet = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="flex items-center gap-4">
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
      <button className="btn btn-dark py-2 px-4">Wallet connect</button>
      <button className="text-light border border-white/10 rounded-full p-2 relative hover:bg-white/5 duration-200 ease-in">
        <span className="bg-primary rounded-full text-sm w-5 h-5 text-white absolute flex justify-center items-center -top-2 left-6">
          4
        </span>
        <IoIosNotificationsOutline size={22} />
      </button>
      <button className="text-light border border-white/10 rounded-full p-2 hover:bg-white/5 duration-200 ease-in">
        <MdOutlineLightMode size={22} />
      </button>
    </div>
  );
};

export default Wallet;
