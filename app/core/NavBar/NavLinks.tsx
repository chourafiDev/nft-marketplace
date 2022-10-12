import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import {
  allnfts,
  collectibles,
  domainNames,
  music,
  photography,
  solana,
  sports,
  trading,
  utility,
  virtualWorlds,
  art,
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
} from "../../../assets";

const NavLinks = () => {
  const [isHover, setIsHover] = useState(false);

  const links = [
    {
      link: "/",
      name: "Home",
      submenu: true,
      type: "images",
      sublinks: [nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft2, nft4],
    },
    {
      link: "/",
      name: "Explore",
      submenu: true,
      type: "links",
      sublinks: [
        { link: "/", name: "ALL NFTs", icon: allnfts },
        { link: "/", name: "Solana NFTs", icon: solana },
        { link: "/", name: "Art", icon: art },
        { link: "/", name: "Collectibles", icon: collectibles },
        { link: "/", name: "Domain Names", icon: domainNames },
        { link: "/", name: "Music", icon: music },
        { link: "/", name: "Photography", icon: photography },
        { link: "/", name: "Sports", icon: sports },
        { link: "/", name: "Trading Cards", icon: trading },
        { link: "/", name: "Utility", icon: utility },
        { link: "/", name: "Virtual Worlds", icon: virtualWorlds },
      ],
    },
    {
      link: "/",
      name: "Status",
      submenu: true,
      type: "links",
      sublinks: [
        { link: "/", name: "Rankings", icon: "" },
        { link: "/", name: "Activity", icon: "" },
      ],
    },
    {
      link: "/",
      name: "Resources",
      submenu: true,
      type: "links",
      sublinks: [
        { link: "/", name: "Learn", icon: "" },
        { link: "/", name: "Help Center", icon: "" },
        { link: "/", name: "Platform Status", icon: "" },
        { link: "/", name: "Partners", icon: "" },
        { link: "/", name: "Taxes", icon: "" },
        { link: "/", name: "Blogs", icon: "" },
        { link: "/", name: "Docs", icon: "" },
        { link: "/", name: "Newsletter", icon: "" },
      ],
    },
    { link: "/", name: "Create" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.name} className="relative group">
          <Link href={link.link}>
            {link.submenu ? (
              <a className="hover:text-white flex items-center gap-1 duration-200 ease-linear">
                <p>{link.name}</p>
                <RiArrowDownSLine />
              </a>
            ) : (
              <a className="hover:text-white duration-200 ease-linear">
                {link.name}
              </a>
            )}
          </Link>

          {link.submenu && link.type === "links" ? (
            <div
              className={`bg-transparent pt-6 absolute top-3 hidden hover:block group-hover:block duration-300 ease-linear`}
            >
              <ul className="custome-scrollbar navbar-scrollbar max-h-[34rem] w-64 group-hover:opacity-100 hover:opacity-100 group-hover:translate-y-4 opacity-0 overflow-y-scroll p-4 rounded-lg border border-white/10 bg-[#181822] lg:flex flex-col gap-4 text-light font-medium text-lg">
                {link.sublinks?.map((sublink) => (
                  <li key={sublink.name}>
                    <Link href={sublink.link}>
                      {sublink.icon ? (
                        <a className="flex gap-4 items-center">
                          <Image
                            src={sublink.icon}
                            width={30}
                            height={30}
                            alt={sublink.link}
                          />
                          <div className="bg-white/10 h-6 w-[1px] lg:block hidden"></div>
                          <p className="hover:text-white duration-200 ease-linear">
                            {sublink.name}
                          </p>
                        </a>
                      ) : (
                        <a className="hover:text-white duration-200 ease-linear">
                          {sublink.name}
                        </a>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : link.submenu && link.type === "images" ? (
            <div
              className={`bg-transparent pt-6 absolute top-7 hidden hover:block group-hover:block duration-300 ease-linear`}
            >
              <div className="custome-scrollbar w-[470%] overflow-y-scroll p-4 rounded-lg border border-white/10 bg-[#181822]">
                <h2 className="text-white font-semibold text-xl">Top NFTs</h2>
                <ul className="flex flex-wrap gap-2 mt-6">
                  {link.sublinks.map((image, i) => (
                    <li key={i}>
                      <Link href="/">
                        <a>
                          <Image
                            src={image}
                            width={110}
                            height={110}
                            alt="NFT"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </li>
      ))}
    </>
  );
};

export default NavLinks;
