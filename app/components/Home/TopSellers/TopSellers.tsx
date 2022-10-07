import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  client1,
  client4,
  client5,
  client8,
  client10,
  client11,
  client2,
  client20,
} from "../../../../assets";

const TopSellers = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "60px",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-area">
      <Slider {...settings}>
        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client1} alt="client1" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['1'] before:left-[4.5rem] before:-bottom-3 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">Grabity</strong>
              <p className="text-light">$500,000</p>
            </div>
          </div>
        </div>

        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client4} alt="client4" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['2'] before:left-[4.5rem] before:-bottom-2 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">Imo</strong>
              <p className="text-light">$200,000</p>
            </div>
          </div>
        </div>

        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client5} alt="client5" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['3'] before:left-[4.5rem] before:-bottom-2 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">Martin</strong>
              <p className="text-light">$3647,000</p>
            </div>
          </div>
        </div>

        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client8} alt="client8" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['4'] before:left-[4.5rem] before:-bottom-2 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">Blotn</strong>
              <p className="text-light">$100,000</p>
            </div>
          </div>
        </div>

        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client10} alt="client10" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['5'] before:left-[4.5rem] before:-bottom-2 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">YoYo</strong>
              <p className="text-light">$800,000</p>
            </div>
          </div>
        </div>

        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client11} alt="client11" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['6'] before:left-[4.5rem] before:-bottom-2 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">Nipton</strong>
              <p className="text-light">$5670,000</p>
            </div>
          </div>
        </div>

        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client2} alt="client2" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['7'] before:left-[4.5rem] before:-bottom-2 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">Grabity</strong>
              <p className="text-light">$678,000</p>
            </div>
          </div>
        </div>

        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client20} alt="client20" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['8'] before:left-[4.5rem] before:-bottom-2 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">Caesar</strong>
              <p className="text-light">$700,000</p>
            </div>
          </div>
        </div>

        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client5} alt="client5" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['9'] before:left-[4.5rem] before:-bottom-2 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">Inso</strong>
              <p className="text-light">$839,000</p>
            </div>
          </div>
        </div>

        <div className="card top-seller border-white/5 cursor-pointer hover:bg-primary/5 duration-150 ease-out">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden cursor-pointer hover:z-30 w-[85px] h-[85px] border-[3px] border-white/5 rounded-full">
              <div className="top-seller-image duration-200 ease-in">
                <Image src={client8} alt="client8" className="" />
              </div>
            </div>
            <div className="relative before:absolute before:content-['10'] before:left-[4.5rem] before:-bottom-2 before:text-7xl before:font-semibold before:text-light/10">
              <strong className="text-white">Oranos</strong>
              <p className="text-light">$400,000</p>
            </div>
          </div>
        </div>
      </Slider>

      <div className="text-center mt-20">
        <h2 className="text-white font-semibold text-5xl">
          Explore, collect, and sell NFTs
        </h2>
        <p className="mt-10 text-light space-y-3 px-28">
          <p>
            Amid the ongoing crypto market downturn, overall NFT sales volume
            remained largely flat in September. But while overall volume appears
            stagnant, individual NFT sales are keeping pace, high value NFTs on
            Ethereum are still selling, and Solana NFTs are gaining steam.
          </p>
          <p>
            All in all, $947 million worth of NFT trading volume was recorded in
            September, according to data from DappRadar—and that figure
            specifically excludes suspected wash trades. That compares to $927
            million in August and nearly $916 million in July. June was the last
            month to crack the billion-dollar mark at $1.03 billion.
          </p>
        </p>
      </div>
    </div>
  );
};

export default TopSellers;
