import { useState } from "react";
import { Logo, NavLinks, NavButtons } from ".";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Search from "./Search";

const Index = () => {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };

  console.log("nav", nav);

  return (
    <nav>
      <div className="sticky top-0 lg:px-28 px-10 py-5 border-b border-white/10 bg-[#181822]/80 backdrop-blur-[8px] z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="bg-white/10 h-10 w-[1px] lg:block hidden"></div>
            <ul className="lg:flex items-center gap-7 text-light font-medium text-lg hidden">
              <NavLinks />
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="lg:block hidden">
              <Search />
            </div>
            <div className="md:block hidden">
              <NavButtons />
            </div>
            <button
              onClick={handelNav}
              className="text-light border lg:hidden block border-white/10 rounded-full p-2 hover:bg-white/5 duration-200 ease-in"
            >
              <HiOutlineMenu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Navbar */}

      <div
        className={
          nav
            ? "lg:hidden fixed left-0 top-0 w-full h-full bg-[#181822]/10 backdrop-blur-sm z-50"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] h-full overflow-y-scroll md:w-[45%] border-r border-white/5 bg-[#181822]/90 backdrop-blur-[8px] p-6 duration-700 ease"
              : "fixed left-[-100%] top-0 p-10 duration-700 ease h-full"
          }
        >
          <div className="border-b border-white/10 pb-4 ">
            <div className="flex justify-between w-full items-center">
              <Logo />
              <div
                onClick={handelNav}
                className="text-light border border-white/10 rounded-full p-2 hover:bg-white/5 duration-200 ease-in"
              >
                <HiOutlineX />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <Search />
              <NavButtons />
            </div>

            <div>
              <h2 className="text-white bg-primary/20 inline-block px-4 py-2 rounded-md font-medium mb-4 capitalize tracking-wide">
                Helpful links
              </h2>
              <ul className="flex flex-col gap-5 text-light font-medium text-lg">
                <NavLinks />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
