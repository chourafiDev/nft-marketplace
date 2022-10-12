import Image from "next/image";
import { client4, client11, client5 } from "../../../assets";
import { Product } from "../../../types";
import ProfileTooltip from "../ProfileTooltip/ProfileTooltip";
import { BiDotsHorizontalRounded, BiHeart } from "react-icons/bi";
import Link from "next/link";
import { Timer } from "..";

interface IProps {
  product: Product;
  timeStamp: number;
}

const Product = ({ product, timeStamp }: IProps) => {
  return (
    <div className="bg-[#242435] p-1 rounded-lg product">
      <div className="relative">
        <Image
          src={product.cover}
          alt={product.title}
          className="rounded-lg product-image duration-700 ease-liner object-cover"
          width={500}
          height={500}
        />
        <div className="absolute bottom-4 left-2">
          <Timer countDownTimestampMS={timeStamp} />
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="flex items-center justify-between my-4 text-sm">
          <div className="flex gap-2 items-center">
            <div className="flex items-center -space-x-2">
              <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                <Image src={client4} alt="client4" className="rounded-full" />
              </div>
              <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                <Image src={client5} alt="client5" className="rounded-full" />
              </div>
              <div className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[30px] h-[30px] border-white/20 rounded-full">
                <Image src={client11} alt="client11" className="rounded-full" />
              </div>
            </div>
            <p className="text-light font-medium">16+ Place Bit</p>
          </div>
          <BiDotsHorizontalRounded
            size={35}
            className="text-light cursor-pointer hover:bg-primary/10 duration-200 ease-out rounded-full p-2"
          />
        </div>
        <Link href="#">
          <a className="text-white font-medium text-lg duration-200 ease-in title">
            {product["propertie-name"]}
          </a>
        </Link>

        <p className="text-light">Highest bit 1/20</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-primary text-sm font-medium">
            {product.price}wETH
          </p>
          <p className="flex items-center gap-1 text-light duration-300 ease-in hover:bg-primary hover:text-white px-2 rounded-md cursor-pointer">
            <BiHeart />
            <span>99</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
