import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { products } from "../../../../utils/data";
import { Product } from "../../../components";

const ExploreProduct = () => {
  return (
    <div className="mt-32">
      <h2 className="text-white font-semibold text-[1.8rem] uppercase">
        Explore Product
      </h2>
      <hr className="border-t border-white/10 mt-5" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-4 mt-8 w-full">
        <div className="w-full">
          <p className="uppercase text-light text-sm">Likes</p>
          <div className="mt-3">
            <Menu as="div" className="relative inline-block text-left w-full">
              <div>
                <Menu.Button className="flex gap-2 items-center justify-between text-md text-white bg-dark px-4 py-3 rounded-md w-full">
                  Most Liked
                  <BsChevronDown />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 z-50 max-h-64 w-full font-semibold rounded-md bg-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Most Liked
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "text-primary" : "text-white"
                        } group flex w-full items-center rounded-md p-4 text-xl`}
                      >
                        Least Liked
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <div className="w-full">
          <p className="uppercase text-light text-sm">Category</p>
          <div className="mt-3">
            <Menu as="div" className="relative inline-block text-left w-full">
              <div>
                <Menu.Button className="flex gap-2 items-center justify-between text-md text-white bg-dark px-4 py-3 rounded-md w-full">
                  Category
                  <BsChevronDown />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 max-h-64 overflow-y-scroll custome-scrollbar navbar-scrollbar mt-2 z-50 w-full font-semibold rounded-md bg-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Category
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Art
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Photograph
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Metaverses
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Potato
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "text-primary" : "text-white"
                        } group flex w-full items-center rounded-md p-4 text-xl`}
                      >
                        Photos
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <div className="w-full">
          <p className="uppercase text-light text-sm">Colections</p>
          <div className="mt-3">
            <Menu as="div" className="relative inline-block text-left w-full">
              <div>
                <Menu.Button className="flex gap-2 items-center justify-between text-md text-white bg-dark px-4 py-3 rounded-md w-full">
                  Colections
                  <BsChevronDown />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 max-h-64 overflow-y-scroll custome-scrollbar navbar-scrollbar mt-2 z-50 w-full font-semibold rounded-md bg-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Art Blocks Factory
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Monkey Digital Art
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "text-primary" : "text-white"
                        } group flex w-full items-center rounded-md p-4 text-xl`}
                      >
                        Poseidon Digital Art
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <div className="w-full">
          <p className="uppercase text-light text-sm">Salle Type</p>
          <div className="mt-3">
            <Menu as="div" className="relative inline-block text-left w-full">
              <div>
                <Menu.Button className="flex gap-2 items-center justify-between text-md text-white bg-dark px-4 py-3 rounded-md w-full">
                  Salle Type
                  <BsChevronDown />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 max-h-64 overflow-y-scroll custome-scrollbar navbar-scrollbar mt-2 z-50 w-full font-semibold rounded-md bg-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Fixed Price
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Timed Auction
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="border-b border-white/10">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "text-primary" : "text-white"
                          } group flex w-full items-center rounded-md p-4 text-xl`}
                        >
                          Note For Salle
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "text-primary" : "text-white"
                        } group flex w-full items-center rounded-md p-4 text-xl`}
                      >
                        Open For Offers
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        {/* <div className="w-full">
          <p className="uppercase text-light text-md">Price Range</p>
          <div className="mt-3">
            <input
              type="range"
              min="0"
              max="1000"
              className="thumb thumb--zindex-3"
            />
            <input
              type="range"
              min="0"
              max="1000"
              className="thumb thumb--zindex-4"
            />
          </div>
          <p className="text-light text-sm">Price: 20$ - 200$</p>
        </div> */}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8 w-full">
        {products.map((product) => (
          <div key={product.id}>
            <Product
              product={product}
              timeStamp={new Date(product.experation).getTime()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreProduct;
