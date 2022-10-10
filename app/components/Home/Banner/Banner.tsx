import Image from "next/image";
import { BsSuitHeart, BsThreeDots } from "react-icons/bs";
import { client2, client9, client11, client20 } from "../../../../assets";
import { Timer } from "../../index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileTooltip from "../../ProfileTooltip/ProfileTooltip";

const Banner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="banner-bg slider-1">
        <div className="pt-20 pb-8 lg:mx-28 md:px-10 px-5 flex flex-col gap-40">
          <div className="flex lg:flex-row flex-col gap-10 justify-between items-center">
            <div className="flex-1">
              <p className="border border-white/10 text-light rounded-lg py-2 px-4 text-[15px] inline-block mb-6">
                Highest bit 1/20{" "}
                <span className="text-primary ml-4">0.024wETH</span>
              </p>
              <h1 className="text-white font-bold md:text-[4.3rem] text-[3rem]">
                Collect Your Digital Product
              </h1>

              <ProfileTooltip
                images={[client2, client9, client11]}
                places="15+"
              />
            </div>

            <div className="flex-1">
              <div className="card p-8">
                <div className="flex md:flex-row flex-col gap-8">
                  <div className="flex-auto">
                    <p className="text-white font-medium text-lg">
                      Winning bit
                    </p>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="flex p-[3px] hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 w-[9rem] bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full">
                        <Image
                          src={client20}
                          alt="caesar clown"
                          className="rounded-full"
                        />
                      </div>

                      <p className="text-light font-medium">
                        Highest bit{" "}
                        <span className="text-white">caesar clown</span>{" "}
                        0.024wETH
                      </p>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <p className="text-white font-medium text-lg">
                      Auction has ended
                    </p>
                    <Timer countDownTimestampMS={1672354800000} />
                  </div>
                </div>

                <button className="btn btn-primary mt-8 w-full">
                  Place a bid
                </button>
              </div>

              <div className="mt-10 flex md:flex-row flex-col gap-10 justify-between">
                <div>
                  <p className="text-light font-medium">Category</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Zary</p>
                      <p className="uppercase text-white font-medium">App</p>
                    </div>
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Tuna</p>
                      <p className="uppercase text-white font-medium">Pipe</p>
                    </div>
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Somailan</p>
                      <p className="uppercase text-white font-medium">
                        Tribute
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-light font-medium">Property</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Hype type</p>
                      <p className="uppercase text-white font-medium">
                        Calm af
                      </p>
                    </div>
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Bastardness</p>
                      <p className="uppercase text-white font-medium">
                        Coolio bastard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="border border-white/10 text-light rounded-lg h-9 px-4 text-[15px] mb-6 flex items-center gap-2 cursor-pointer hover:bg-white/10  duration-150 ease-in">
              <BsSuitHeart /> <p>122</p>
            </div>
            <div className="border flex items-center border-white/10 text-light rounded-lg h-9 px-4 text-[15px] mb-6 cursor-pointer hover:bg-white/10  duration-150 ease-in">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>

      <div className="banner-bg slider-2">
        <div className="pt-20 pb-8 lg:mx-28 md:px-10 px-5 flex flex-col gap-40">
          <div className="flex lg:flex-row flex-col gap-10 justify-between items-center">
            <div className="flex-1">
              <p className="border border-white/10 text-light rounded-lg py-2 px-4 text-[15px] inline-block mb-6">
                Highest bit 1/20{" "}
                <span className="text-primary ml-4">0.024wETH</span>
              </p>
              <h1 className="text-white font-bold md:text-[4.3rem] text-[3rem]">
                New Dod Glitter Worlds
              </h1>

              <ProfileTooltip
                images={[client2, client9, client11]}
                places="15+"
              />
            </div>

            <div className="flex-1">
              <div className="card p-8">
                <div className="flex md:flex-row flex-col gap-10">
                  <div className="flex-auto">
                    <p className="text-white font-medium text-lg">
                      Winning bit
                    </p>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="p-[3px] hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 w-[120px] h-[67px] bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full">
                        <Image
                          src={client20}
                          alt="caesar clown"
                          className="rounded-full"
                        />
                      </div>
                      <p className="text-light font-medium">
                        Highest bit{" "}
                        <span className="text-white">caesar clown</span>{" "}
                        0.024wETH
                      </p>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <p className="text-white font-medium text-lg">
                      Auction has ended
                    </p>
                    <Timer countDownTimestampMS={1672354800000} />
                  </div>
                </div>

                <button className="btn btn-primary mt-8 w-full">
                  Place a bid
                </button>
              </div>

              <div className="mt-10 flex md:flex-row flex-col gap-10 justify-between">
                <div>
                  <p className="text-light font-medium">Category</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Zary</p>
                      <p className="uppercase text-white font-medium">App</p>
                    </div>
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Tuna</p>
                      <p className="uppercase text-white font-medium">Pipe</p>
                    </div>
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Somailan</p>
                      <p className="uppercase text-white font-medium">
                        Tribute
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-light font-medium">Property</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Hype type</p>
                      <p className="uppercase text-white font-medium">
                        Calm af
                      </p>
                    </div>
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Bastardness</p>
                      <p className="uppercase text-white font-medium">
                        Coolio bastard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="border border-white/10 text-light rounded-lg h-9 px-4 text-[15px] mb-6 flex items-center gap-2 cursor-pointer hover:bg-white/10  duration-150 ease-in">
              <BsSuitHeart /> <p>122</p>
            </div>
            <div className="border flex items-center border-white/10 text-light rounded-lg h-9 px-4 text-[15px] mb-6 cursor-pointer hover:bg-white/10  duration-150 ease-in">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>

      <div className="banner-bg slider-3">
        <div className="pt-20 pb-8 lg:mx-28 md:px-10 px-5 flex flex-col gap-40">
          <div className="flex lg:flex-row flex-col gap-10 justify-between items-center">
            <div className="flex-1">
              <p className="border border-white/10 text-light rounded-lg py-2 px-4 text-[15px] inline-block mb-6">
                Highest bit 1/20{" "}
                <span className="text-primary ml-4">0.024wETH</span>
              </p>
              <h1 className="text-white font-bold md:text-[4.3rem] text-[3rem]">
                Digital Dod Glitter Worlds
              </h1>

              <ProfileTooltip
                images={[client2, client9, client11]}
                places="15+"
              />
            </div>

            <div className="flex-1">
              <div className="card p-8">
                <div className="flex md:flex-row flex-col gap-10">
                  <div className="flex-auto">
                    <p className="text-white font-medium text-lg">
                      Winning bit
                    </p>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="p-[3px] hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 w-[120px] h-[67px] bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full">
                        <Image
                          src={client20}
                          alt="caesar clown"
                          className="rounded-full"
                        />
                      </div>
                      <p className="text-light font-medium">
                        Highest bit{" "}
                        <span className="text-white">caesar clown</span>{" "}
                        0.024wETH
                      </p>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <p className="text-white font-medium text-lg">
                      Auction has ended
                    </p>
                    <Timer countDownTimestampMS={1672354800000} />
                  </div>
                </div>

                <button className="btn btn-primary mt-8 w-full">
                  Place a bid
                </button>
              </div>

              <div className="mt-10 flex md:flex-row flex-col gap-10 justify-between">
                <div>
                  <p className="text-light font-medium">Category</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Zary</p>
                      <p className="uppercase text-white font-medium">App</p>
                    </div>
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Tuna</p>
                      <p className="uppercase text-white font-medium">Pipe</p>
                    </div>
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Somailan</p>
                      <p className="uppercase text-white font-medium">
                        Tribute
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-light font-medium">Property</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Hype type</p>
                      <p className="uppercase text-white font-medium">
                        Calm af
                      </p>
                    </div>
                    <div className="card text-sm">
                      <p className="uppercase text-light mb-1">Bastardness</p>
                      <p className="uppercase text-white font-medium">
                        Coolio bastard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="border border-white/10 text-light rounded-lg h-9 px-4 text-[15px] mb-6 flex items-center gap-2 cursor-pointer hover:bg-white/10  duration-150 ease-in">
              <BsSuitHeart /> <p>122</p>
            </div>
            <div className="border flex items-center border-white/10 text-light rounded-lg h-9 px-4 text-[15px] mb-6 cursor-pointer hover:bg-white/10  duration-150 ease-in">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
