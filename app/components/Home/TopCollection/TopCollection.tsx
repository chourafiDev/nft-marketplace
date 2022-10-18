import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  collectionLG01,
  collectionLG02,
  collectionLG03,
  collectionLG04,
  collectionSM01,
  collectionSM02,
  collectionSM03,
  collectionSM04,
  collectionSM05,
  collectionSM06,
  collectionSM07,
  collectionSM08,
  collectionSM09,
  collectionSM10,
  collectionSM11,
  collectionSM12,
  client12,
  client13,
  client14,
  client15,
} from "../../../../assets";

const TopCollection = () => {
  return (
    <div className="mt-32">
      <div className="flex justify-between items-center">
        <h2 className="text-white font-semibold text-[1.8rem]">
          Top Collections
        </h2>
        <Link href="#">
          <a className="text-light uppercase flex items-center gap-1 hover:text-primary duration-200 ease-linear">
            <span>View All</span> <BsArrowRight />
          </a>
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
        <div className="card-transparent border-0 group">
          <Link href="#">
            <a>
              <div className="relative">
                <div className="flex rounded-md overflow-hidden">
                  <Image
                    src={collectionLG01}
                    alt="collection-lg-01"
                    className=" group-hover:transform group-hover:scale-110 duration-200 ease-linear"
                    width={1000}
                    height={680}
                  />
                </div>

                <div className="flex gap-2 mt-2">
                  <Image
                    src={collectionSM01}
                    alt="collection-sm-01"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                  <Image
                    src={collectionSM02}
                    alt="collection-sm-02"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                  <Image
                    src={collectionSM03}
                    alt="collection-sm-03"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                </div>
                <div className="flex w-full justify-center">
                  <div className="absolute top-[6.1rem] flex p-[5px] w-[5rem] h-[5rem] bg-dark rounded-full">
                    <Image
                      src={client15}
                      alt="client-15"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h3 className="text-white text-[20px] hover:text-primary font-medium duration-300 ease-linear">
                  Cubic Trad
                </h3>
                <button className="btn btn-dark px-2 py-1 rounded-md text-[15px]">
                  27 Items
                </button>
              </div>
            </a>
          </Link>
        </div>

        <div className="card-transparent border-0 group">
          <Link href="#">
            <a>
              <div className="relative">
                <div className="flex rounded-md overflow-hidden">
                  <Image
                    src={collectionLG03}
                    alt="collection-lg-01"
                    className=" group-hover:transform group-hover:scale-110 duration-200 ease-linear"
                    width={1000}
                    height={680}
                  />
                </div>

                <div className="flex gap-2 mt-2">
                  <Image
                    src={collectionSM04}
                    alt="collection-sm-04"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                  <Image
                    src={collectionSM05}
                    alt="collection-sm-05"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                  <Image
                    src={collectionSM06}
                    alt="collection-sm-06"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                </div>

                <div className="flex w-full justify-center">
                  <div className="absolute top-[6.1rem] flex p-[5px] w-[5rem] h-[5rem] bg-dark rounded-full">
                    <Image
                      src={client12}
                      alt="client-12"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h3 className="text-white text-[20px] hover:text-primary font-medium duration-300 ease-linear">
                  Diamond Dog
                </h3>
                <button className="btn btn-dark px-2 py-1 rounded-md text-[15px]">
                  17 Items
                </button>
              </div>
            </a>
          </Link>
        </div>

        <div className="card-transparent border-0 group">
          <Link href="#">
            <a>
              <div className="relative">
                <div className="flex rounded-md overflow-hidden">
                  <Image
                    src={collectionLG02}
                    alt="collection-lg-02"
                    className=" group-hover:transform group-hover:scale-110 duration-200 ease-linear"
                    width={1000}
                    height={680}
                  />
                </div>

                <div className="flex gap-2 mt-2">
                  <Image
                    src={collectionSM07}
                    alt="collection-sm-07"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                  <Image
                    src={collectionSM08}
                    alt="collection-sm-08"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                  <Image
                    src={collectionSM09}
                    alt="collection-sm-09"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                </div>

                <div className="flex w-full justify-center">
                  <div className="absolute top-[6.1rem] flex p-[5px] w-[5rem] h-[5rem] bg-dark rounded-full">
                    <Image
                      src={client13}
                      alt="client-13"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h3 className="text-white text-[20px] hover:text-primary font-medium duration-300 ease-linear">
                  Morgan11
                </h3>
                <button className="btn btn-dark px-2 py-1 rounded-md text-[15px]">
                  16 Items
                </button>
              </div>
            </a>
          </Link>
        </div>

        <div className="card-transparent border-0 group">
          <Link href="#">
            <a>
              <div className="relative">
                <div className="flex rounded-md overflow-hidden">
                  <Image
                    src={collectionLG04}
                    alt="collection-lg-04"
                    className=" group-hover:transform group-hover:scale-110 duration-200 ease-linear"
                    width={1000}
                    height={680}
                  />
                </div>

                <div className="flex gap-2 mt-2">
                  <Image
                    src={collectionSM10}
                    alt="collection-sm-10"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                  <Image
                    src={collectionSM11}
                    alt="collection-sm-11"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                  <Image
                    src={collectionSM12}
                    alt="collection-sm-12"
                    className="rounded-md"
                    width={1000}
                    height={680}
                  />
                </div>

                <div className="flex w-full justify-center">
                  <div className="absolute top-[6.1rem] flex p-[5px] w-[5rem] h-[5rem] bg-dark rounded-full">
                    <Image
                      src={client14}
                      alt="client-14"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h3 className="text-white text-[20px] hover:text-primary font-medium duration-300 ease-linear">
                  Oranos#45
                </h3>
                <button className="btn btn-dark px-2 py-1 rounded-md text-[15px]">
                  10 Items
                </button>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
