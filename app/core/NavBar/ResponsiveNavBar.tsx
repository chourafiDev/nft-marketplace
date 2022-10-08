import { HiOutlineX } from "react-icons/hi";
import { Logo, NavLinks, NavButtons, Search } from ".";

interface IProps {
  nav: boolean;
  handelNav: () => void;
}

const ResponsiveNavBar = ({ nav, handelNav }: IProps) => {
  return (
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
  );
};

export default ResponsiveNavBar;
