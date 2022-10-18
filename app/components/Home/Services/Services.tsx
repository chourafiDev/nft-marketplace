import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { shape1, shape5, shape7 } from "../../../../assets";

const Services = () => {
  return (
    <div className="mt-32">
      <h2 className="text-white font-semibold text-[1.8rem]">
        Create and sell your NFTs
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-16">
        <div className="card-transparent border-0 p-6 group">
          <div className="group-hover:-translate-y-3 duration-300 ease-linear">
            <Link href="#">
              <a>
                <div className="flex items-start justify-between">
                  <p className="text-light uppercase">Step-01</p>
                  <div className="flex w-[6rem] -translate-y-11 translate-x-10">
                    <Image src={shape7} alt="shape-7" />
                  </div>
                </div>

                <h2 className="text-white font-medium text-2xl group-hover:text-primary duration-200 ease-linear -mt-3 mb-8">
                  Set up your wallet
                </h2>
                <p className="text-light">
                  Powerful features and inclusions, which makes Nuron standout,
                  easily customizable and scalable.
                </p>
                <div>
                  <BsArrowRight className="text-light group-hover:text-primary duration-200 ease-linear font-bold text-2xl mt-6 mb-4" />
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="card-transparent border-0 p-6 group">
          <div className="group-hover:-translate-y-3 duration-300 ease-linear">
            <Link href="#">
              <a>
                <div className="flex items-start justify-between">
                  <p className="text-light uppercase">Step-02</p>
                  <div className="flex w-[5rem] -translate-y-11 translate-x-10">
                    <Image src={shape1} alt="shape-1" />
                  </div>
                </div>

                <h2 className="text-white font-medium text-2xl group-hover:text-primary duration-200 ease-linear -mt-3 mb-8">
                  Create your collection
                </h2>
                <p className="text-light">
                  A great collection of beautiful website templates for your
                  need. Choose the best suitable template.
                </p>
                <div>
                  <BsArrowRight className="text-light group-hover:text-primary duration-200 ease-linear font-bold text-2xl mt-6 mb-4" />
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="card-transparent border-0 p-6 group">
          <div className="group-hover:-translate-y-3 duration-300 ease-linear">
            <Link href="#">
              <a>
                <div className="flex items-start justify-between">
                  <p className="text-light uppercase">Step-03</p>
                  <div className="flex w-[5rem] -translate-y-11 translate-x-10">
                    <Image src={shape5} alt="shape-5" />
                  </div>
                </div>

                <h2 className="text-white font-medium text-2xl group-hover:text-primary duration-200 ease-linear -mt-3 mb-8">
                  Add your NFT&apos;s
                </h2>
                <p className="text-light">
                  We&apos;ve made the template fully responsive, so it looks
                  great on all devices: desktop, tablets and.
                </p>
                <div>
                  <BsArrowRight className="text-light group-hover:text-primary duration-200 ease-linear font-bold text-2xl mt-6 mb-4" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
