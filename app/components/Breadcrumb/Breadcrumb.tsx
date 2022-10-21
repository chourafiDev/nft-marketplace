import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = () => {
  return (
    <div className="flex md:flex-row flex-col gap-3 justify-between items-center lg:px-28 px-10 py-8 border-b border-white/10">
      <h1 className="text-2xl text-white font-semibold">Product Details</h1>
      <div className="flex items-center gap-2">
        <Link href="#">
          <a className="text-light hover:text-white duration-150 ease-linear">
            Home
          </a>
        </Link>
        <FiChevronRight className="text-light" />
        <Link href="#">
          <a className="text-white">Product Details</a>
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumb;
