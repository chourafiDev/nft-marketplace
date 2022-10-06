import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Image from "next/image";

const LiveBidding = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };

  const handleNextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef?.current?.slickPrev();
  };
  return (
    <div className="mt-32">
      <h2 className="text-white font-bold text-3xl">Live Bidding</h2>

      <div>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <Image src={portfolio01} alt="portfolio01" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LiveBidding;
