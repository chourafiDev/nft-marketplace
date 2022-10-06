import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-7 text-light font-medium text-lg">
      <li>
        <Link href="/">
          <a className="hover:text-white duration-200 ease-linear">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="hover:text-white duration-200 ease-linear">About</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="hover:text-white duration-200 ease-linear">Explore</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="hover:text-white duration-200 ease-linear">Pages</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="hover:text-white duration-200 ease-linear">Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="hover:text-white duration-200 ease-linear">Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
