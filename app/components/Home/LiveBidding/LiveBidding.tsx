import { useRef } from "react";
import { products } from "../../../../utils/data";
import Product from "../../Product/Product";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dayjs from "dayjs";

const LiveBidding = () => {
  const sliderRef = useRef<Slider>(null);

  console.log("timestamp", new Date("2022-04-26").getTime());

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerPadding: "60px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const handleNextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef?.current?.slickPrev();
  };
  return (
    <div className="mt-32">
      <h2 className="text-white font-semibold text-[1.8rem]">Live Bidding</h2>

      <div className="slider-area">
        <div className="flex justify-end gap-4 mb-4">
          <button
            className="flex justify-center items-center duration-300 ease-in bg-dark/40 w-12 h-12 rounded-md text-primary hover:bg-primary hover:text-white"
            onClick={handleNextSlide}
          >
            <AiOutlineArrowLeft size={18} />
          </button>
          <button
            className="flex justify-center items-center duration-300 ease-in bg-dark/40 w-12 h-12 rounded-md text-primary hover:bg-primary hover:text-white"
            onClick={handlePrevSlide}
          >
            <AiOutlineArrowRight size={18} />
          </button>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="md:p-[10px] px-0">
              <Product
                product={product}
                timeStamp={new Date(product.experation).getTime()}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LiveBidding;
