import { useState } from "react";
import { Logo, NavLinks, NavButtons, Search, ResponsiveNavBar } from ".";
import { HiOutlineMenu } from "react-icons/hi";

const Index = () => {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="lg:px-28 px-10 py-5 border-b border-white/10 bg-[#181822]/80 backdrop-blur-[8px]">
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
      <ResponsiveNavBar nav={nav} handelNav={handelNav} />
    </nav>
  );
};

export default Index;
