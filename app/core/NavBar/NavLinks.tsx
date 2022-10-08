import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const links = [
    { link: "/", name: "Home" },
    { link: "/", name: "About" },
    { link: "/", name: "Explore" },
    { link: "/", name: "Pages" },
    { link: "/", name: "Blog" },
    { link: "/", name: "Contact" },
  ];

  return (
    <>
      {links.map((el) => (
        <li key={el.name}>
          <Link href={el.link}>
            <a className="hover:text-white duration-200 ease-linear">
              {el.name}
            </a>
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
