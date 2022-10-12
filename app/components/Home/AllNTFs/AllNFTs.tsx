import { useState } from "react";

import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsSuitHeart } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import StickyBox from "react-sticky-box";
import {
  client1,
  client11,
  client20,
  client4,
  client5,
  client6,
  client8,
} from "../../../../assets";
import Link from "next/link";

const AllNFTs = () => {
  const data = [
    {
      name: "Darken Forever Quick",
      desc: "Has been sold by 1221 ETH",
      date: "15 July ",
      time: "10:32 PM",
      image: client1,
    },
    {
      name: "Sold Darken Forever Quick",
      desc: "Has been sold by 1221 ETH",
      date: "15 July ",
      time: "10:32 PM",
      image: client20,
    },
    {
      name: "Sold Darken Forever Quick",
      desc: "Has been sold by 1221 ETH",
      date: "15 July ",
      time: "10:32 PM",
      image: client11,
    },
    {
      name: "Sold Darken Forever Quick",
      desc: "Has been sold by 1221 ETH",
      date: "15 July ",
      time: "10:32 PM",
      image: client5,
    },
    {
      name: "Sold Darken Forever Quick",
      desc: "Has been sold by 1221 ETH",
      date: "15 July ",
      time: "10:32 PM",
      image: client6,
    },
    {
      name: "Sold Darken Forever Quick",
      desc: "Has been sold by 1221 ETH",
      date: "15 July ",
      time: "10:32 PM",
      image: client6,
    },
  ];

  const card = [
    {
      title: "New Dod Glitter Worlds",
      desc: "Highest bid 1/20",
      price: "0.244wETH",
      "total-favorite": 56,
      image: client6,
      type: "rare reals",
    },
    {
      title: "New Dod Glitter Worlds",
      desc: "Highest bid 1/20",
      price: "0.244wETH",
      "total-favorite": 56,
      image: client5,
      type: "newest",
    },
    {
      title: "New Dod Glitter Worlds",
      desc: "Highest bid 1/20",
      price: "0.244wETH",
      "total-favorite": 56,
      image: client8,
      type: "rare reals",
    },
    {
      title: "New Dod Glitter Worlds",
      desc: "Highest bid 1/20",
      price: "0.244wETH",
      "total-favorite": 89,
      image: client11,
      type: "newest",
    },
    {
      title: "New Dod Glitter Worlds",
      desc: "Highest bid 6/20",
      price: "0.244wETH",
      "total-favorite": 10,
      image: client4,
      type: "newest",
    },
    {
      title: "New Dod Glitter Worlds",
      desc: "Highest bid 6/20",
      price: "0.244wETH",
      "total-favorite": 34,
      image: client8,
      type: "rare reals",
    },
  ];

  const [all, setAll] = useState(true);
  const [newest, setNewest] = useState(false);
  const [rareReals, setRareReals] = useState(false);

  const getAllNFTs = () => {
    if (!all) {
      setAll(true);
      setNewest(false);
      setRareReals(false);
    }
  };

  const getNewestNFTs = () => {
    if (!newest) {
      setAll(false);
      setNewest(true);
      setRareReals(false);
    }
  };

  const getRaeRealsNFTs = () => {
    if (!rareReals) {
      setAll(false);
      setNewest(false);
      setRareReals(true);
    }
  };

  return (
    <div className="mt-32">
      <h2 className="text-white font-semibold text-[1.8rem] uppercase">
        Our All NFT&apos;S
      </h2>

      <div className="flex gap-6 mt-8">
        <div className="custome-scrollbar card-scrollbar max-h-[90rem] overflow-y-scroll border border-white/10 rounded-md">
          <div className="bg-dark p-4 flex gap-3 sticky top-0 z-30">
            <button
              onClick={() => getAllNFTs()}
              className={`${
                all ? "bg-dark" : undefined
              } px-6 py-3 border border-dashed border-white/10 hover:border-white duration-100 ease-linear text-white rounded-md`}
            >
              All Products
            </button>
            <button
              onClick={() => getNewestNFTs()}
              className={`${
                newest ? "bg-dark" : undefined
              } px-6 py-3 border border-dashed border-white/10 hover:border-white duration-100 ease-linear text-white rounded-md`}
            >
              Newest Item
            </button>
            <button
              onClick={() => getRaeRealsNFTs()}
              className={`${
                rareReals ? "bg-dark" : undefined
              } px-6 py-3 border border-dashed border-white/10 hover:border-white duration-100 ease-linear text-white rounded-md`}
            >
              Rare Reals
            </button>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {/* All NFTs */}
            {all &&
              card.map((el, index) => (
                <div
                  className="card-transparent flex items-center gap-4"
                  key={index}
                >
                  <div className="rounded-md overflow-hidden flex">
                    <Image
                      src={el.image}
                      alt="client 1"
                      className="cursor-pointer rounded-md hover:scale-110 duration-300 ease-linear"
                    />
                  </div>

                  <div className="flex gap-16 items-center">
                    <div className="space-y-4">
                      <div className="flex gap-2 items-center">
                        <div className="flex items-center -space-x-2">
                          <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                            <Image
                              src={client4}
                              alt="client4"
                              className="rounded-full"
                            />
                          </div>
                          <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                            <Image
                              src={client5}
                              alt="client5"
                              className="rounded-full"
                            />
                          </div>
                          <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                            <Image
                              src={client11}
                              alt="client11"
                              className="rounded-full"
                            />
                          </div>
                        </div>
                        <p className="text-light font-normal text-sm">
                          16+ Place Bit
                        </p>
                      </div>
                      <p className="text-primary font-medium text-sm">
                        {el.price}
                      </p>
                      <Link href="#">
                        <a className="font-medium text-white text-lg hover:text-primary duration-200 ease-linear">
                          {el.title}
                        </a>
                      </Link>
                      <p className="text-light text-sm">{el.desc}</p>
                      <div className="flex items-center gap-2">
                        <button className="btn btn-dark px-2 py-1 text-sm flex gap-1 items-center">
                          <BsSuitHeart />
                          <span>{el["total-favorite"]}</span>
                        </button>
                        <button className="btn btn-dark px-3 py-[7px] text-sm">
                          <BiDotsHorizontalRounded />
                        </button>
                      </div>
                    </div>
                    <button className="btn btn-dark px-6 py-4">
                      Place a Bid
                    </button>
                  </div>
                </div>
              ))}

            {/* Newest NFTs */}
            {newest &&
              card
                .filter((el) => el.type === "newest")
                .map((el, index) => (
                  <div
                    key={index}
                    className="card-transparent flex items-center gap-4"
                  >
                    <div className="rounded-md overflow-hidden flex">
                      <Image
                        src={el.image}
                        alt="client 1"
                        className="cursor-pointer rounded-md hover:scale-110 duration-300 ease-linear"
                      />
                    </div>

                    <div className="flex gap-16 items-center">
                      <div className="space-y-4">
                        <div className="flex gap-2 items-center">
                          <div className="flex items-center -space-x-2">
                            <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                              <Image
                                src={client4}
                                alt="client4"
                                className="rounded-full"
                              />
                            </div>
                            <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                              <Image
                                src={client5}
                                alt="client5"
                                className="rounded-full"
                              />
                            </div>
                            <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                              <Image
                                src={client11}
                                alt="client11"
                                className="rounded-full"
                              />
                            </div>
                          </div>
                          <p className="text-light font-normal text-sm">
                            16+ Place Bit
                          </p>
                        </div>
                        <p className="text-primary font-medium text-sm">
                          {el.price}
                        </p>
                        <Link href="#">
                          <a className="font-medium text-white text-lg hover:text-primary duration-200 ease-linear">
                            {el.title}
                          </a>
                        </Link>
                        <p className="text-light text-sm">{el.desc}</p>
                        <div className="flex items-center gap-2">
                          <button className="btn btn-dark px-2 py-1 text-sm flex gap-1 items-center">
                            <BsSuitHeart />
                            <span>{el["total-favorite"]}</span>
                          </button>
                          <button className="btn btn-dark px-3 py-[7px] text-sm">
                            <BiDotsHorizontalRounded />
                          </button>
                        </div>
                      </div>
                      <button className="btn btn-dark px-6 py-4">
                        Place a Bid
                      </button>
                    </div>
                  </div>
                ))}

            {/* Rare Reals NFTs */}
            {rareReals &&
              card
                .filter((el) => el.type === "rare reals")
                .map((el, index) => (
                  <div
                    className="card-transparent flex items-center gap-4"
                    key={index}
                  >
                    <div className="rounded-md overflow-hidden flex">
                      <Image
                        src={el.image}
                        alt="client 1"
                        className="cursor-pointer rounded-md hover:scale-110 duration-300 ease-linear"
                      />
                    </div>

                    <div className="flex gap-16 items-center">
                      <div className="space-y-4">
                        <div className="flex gap-2 items-center">
                          <div className="flex items-center -space-x-2">
                            <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                              <Image
                                src={client4}
                                alt="client4"
                                className="rounded-full"
                              />
                            </div>
                            <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                              <Image
                                src={client5}
                                alt="client5"
                                className="rounded-full"
                              />
                            </div>
                            <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                              <Image
                                src={client11}
                                alt="client11"
                                className="rounded-full"
                              />
                            </div>
                          </div>
                          <p className="text-light font-normal text-sm">
                            16+ Place Bit
                          </p>
                        </div>
                        <p className="text-primary font-medium text-sm">
                          {el.price}
                        </p>
                        <Link href="#">
                          <a className="font-medium text-white text-lg hover:text-primary duration-200 ease-linear">
                            {el.title}
                          </a>
                        </Link>
                        <p className="text-light text-sm">{el.desc}</p>
                        <div className="flex items-center gap-2">
                          <button className="btn btn-dark px-2 py-1 text-sm flex gap-1 items-center">
                            <BsSuitHeart />
                            <span>{el["total-favorite"]}</span>
                          </button>
                          <button className="btn btn-dark px-3 py-[7px] text-sm">
                            <BiDotsHorizontalRounded />
                          </button>
                        </div>
                      </div>
                      <button className="btn btn-dark px-6 py-4">
                        Place a Bid
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div>
          <StickyBox offsetTop={20} style={{ top: "90px" }}>
            <div>
              <div className="w-full card-transparent overflow-hidden p-0 h-64 custome-scrollbar card-scrollbar overflow-y-scroll ">
                <div className="flex justify-between items-center bg-dark px-4 py-2 sticky top-0 z-20">
                  <h2 className="text-white font-medium text-[17px]">
                    Notification
                  </h2>
                  <button className="btn btn-primary flex gap-1 items-center px-3 py-2">
                    <span>Newest</span>
                    <RiArrowDownSLine />
                  </button>
                </div>
                <div className="py-8 px-6">
                  {data.map((el, i) => (
                    <>
                      <div className="group" key={i}>
                        <div className="flex gap-3">
                          <div className="flex p-[3px] group-hover:bg-primary duration-200 ease-in cursor-pointer hover:z-30 w-[3.5rem] h-[3.5rem] bg-dark rounded-full">
                            <Image
                              src={el.image}
                              alt="client 1"
                              className="rounded-full"
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-white text-[18px]">
                              {el.name}
                            </h3>
                            <p className="text-light">{el.desc}</p>
                            <p className="flex gap-8 text-light text-sm pb-2">
                              <span>{el.date}</span>
                              <span>{el.time}</span>
                            </p>
                            <button className="btn btn-dark py-0 px-3 text-sm rounded-xl">
                              Check Out
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-t border-white/10 my-4" />
                    </>
                  ))}
                </div>
              </div>

              <div className="w-full card-transparent overflow-hidden p-0 h-64 custome-scrollbar card-scrollbar overflow-y-scroll mt-10">
                <div className="flex justify-between items-center bg-dark px-4 py-2 sticky top-0 z-20">
                  <h2 className="text-white font-medium text-[17px]">
                    Top Artist
                  </h2>
                  <button className="btn btn-primary flex gap-1 items-center px-3 py-2">
                    <span>Today</span>
                    <RiArrowDownSLine />
                  </button>
                </div>
                <div className="py-8 px-6">
                  {data.map((el, i) => (
                    <>
                      <div className="group" key={i}>
                        <div className="flex gap-3">
                          <div className="flex p-[3px] group-hover:bg-primary duration-200 ease-in cursor-pointer hover:z-30 w-[3.5rem] h-[3.5rem] bg-dark rounded-full">
                            <Image
                              src={el.image}
                              alt="client 1"
                              className="rounded-full"
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-white text-[18px]">
                              {el.name}
                            </h3>
                            <p className="text-light">{el.desc}</p>
                            <p className="flex gap-8 text-light text-sm pb-2">
                              <span>{el.date}</span>
                              <span>{el.time}</span>
                            </p>
                            <button className="btn btn-dark py-0 px-3 text-sm rounded-xl">
                              Check Out
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-t border-white/10 my-4" />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </StickyBox>
        </div>
      </div>
    </div>
  );
};

export default AllNFTs;
