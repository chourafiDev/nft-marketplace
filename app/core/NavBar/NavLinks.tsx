import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import {
	allnfts,
	art,
	collectibles,
	domainNames,
	music,
	nft1,
	nft2,
	nft3,
	nft4,
	nft5,
	nft6,
	nft7,
	photography,
	solana,
	sports,
	trading,
	utility,
	virtualWorlds,
} from "../../../assets";

const NavLinks = () => {
	const [isHover, setIsHover] = useState(false);

	const links = [
		{
			link: "/",
			name: "Home",
			submenu: true,
			type: "images",
			images: [nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft2, nft4],
		},
		{
			link: "/",
			name: "Explore",
			submenu: true,
			type: "links",
			sublinks: [
				{ subLink: "/", name: "ALL NFTs", icon: allnfts },
				{ subLink: "/", name: "Solana NFTs", icon: solana },
				{ subLink: "/", name: "Art", icon: art },
				{ subLink: "/", name: "Collectibles", icon: collectibles },
				{ subLink: "/", name: "Domain Names", icon: domainNames },
				{ subLink: "/", name: "Music", icon: music },
				{ subLink: "/", name: "Photography", icon: photography },
				{ subLink: "/", name: "Sports", icon: sports },
				{ subLink: "/", name: "Trading Cards", icon: trading },
				{ subLink: "/", name: "Utility", icon: utility },
				{ subLink: "/", name: "Virtual Worlds", icon: virtualWorlds },
			],
		},
		{
			link: "/",
			name: "Status",
			submenu: true,
			type: "links",
			sublinks: [
				{ subLink: "/", name: "Rankings", icon: "" },
				{ subLink: "/", name: "Activity", icon: "" },
			],
		},
		{
			link: "/",
			name: "Resources",
			submenu: true,
			type: "links",
			sublinks: [
				{ subLink: "/", name: "Learn", icon: "" },
				{ subLink: "/", name: "Help Center", icon: "" },
				{ subLink: "/", name: "Platform Status", icon: "" },
				{ subLink: "/", name: "Partners", icon: "" },
				{ subLink: "/", name: "Taxes", icon: "" },
				{ subLink: "/", name: "Blogs", icon: "" },
				{ subLink: "/", name: "Docs", icon: "" },
				{ subLink: "/", name: "Newsletter", icon: "" },
			],
		},
		{ link: "/create", name: "Create" },
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
								{link.sublinks?.map((el) => (
									<li key={el.name}>
										<Link href={el.subLink}>
											{el.icon ? (
												<a className="flex gap-4 items-center">
													<Image
														src={el.icon}
														width={30}
														height={30}
														alt={el.subLink}
													/>
													<div className="bg-white/10 h-6 w-[1px] lg:block hidden"></div>
													<p className="hover:text-white duration-200 ease-linear">
														{el.name}
													</p>
												</a>
											) : (
												<a className="hover:text-white duration-200 ease-linear">
													{el.name}
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
									{link.images?.map((image, i) => (
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
