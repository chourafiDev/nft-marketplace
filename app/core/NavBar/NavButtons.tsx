import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineUpload } from "react-icons/hi";
import Link from "next/link";

const NavButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="btn btn-dark py-2 px-4">Wallet connect</button>
      <button className="text-light border border-white/10 rounded-full p-2 relative hover:bg-white/5 duration-200 ease-in">
        <span className="bg-primary rounded-full text-sm w-5 h-5 text-white absolute flex justify-center items-center -top-2 left-6">
          4
        </span>
        <IoIosNotificationsOutline size={22} />
      </button>
      <Link href="/create">
        <a className="text-light border border-white/10 rounded-full p-2 hover:bg-white/5 duration-200 ease-in">
          <HiOutlineUpload size={22} />
        </a>
      </Link>
    </div>
  );
};

export default NavButtons;
