import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { products } from "../../utils/data";
import {
  BsFillArrowUpLeftSquareFill,
  BsSuitHeart,
  BsThreeDots,
} from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

import StickyBox from "react-sticky-box";
import {
  client1,
  client2,
  client13,
  client12,
  client11,
  client10,
  client5,
  client6,
} from "../../assets";

//Components
import Layout from "../../app/core/layout";
import { Breadcrumb, Avatar, Timer, Product } from "../../app/components";
import Link from "next/link";

const ProductDetails = () => {
  const [product, setProduct] = useState(products[0]);
  const [NFTImage, setNFTImage] = useState(products[0].images[0]);

  const [bids, setBids] = useState(true);
  const [details, setDetails] = useState(false);
  const [history, setHistory] = useState(false);

  const getBids = () => {
    if (!bids) {
      setBids(true);
      setDetails(false);
      setHistory(false);
    }
  };

  const getDetails = () => {
    if (!details) {
      setBids(false);
      setDetails(true);
      setHistory(false);
    }
  };

  const getHistory = () => {
    if (!history) {
      setBids(false);
      setDetails(false);
      setHistory(true);
    }
  };

  const data = [
    {
      id: 1,
      image: client13,
      price: 0.55,
      user: "Allen Waltker",
      createdAt: "1 hours ago",
    },
    {
      id: 2,
      image: client11,
      price: 0.23,
      user: "Joe Biden",
      createdAt: "1:30 hours ago",
    },
    {
      id: 3,
      image: client12,
      price: 1.78,
      user: "Sonial Mridha",
      createdAt: "1:19 hours ago",
    },
    {
      id: 4,
      image: client10,
      price: 0.12,
      user: "Tribute Dhusra",
      createdAt: "1:45 hours ago",
    },
  ];

  const changeNFTImage = (index: number) => {
    const currentImage = products[0].images[index];
    setNFTImage(currentImage);
  };

  return (
    <>
      <Head>
        <title>NFT - Marketplace | Product Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Breadcrumb>
          <h1 className="text-2xl text-white font-semibold">Product Details</h1>
          <div className="flex items-center gap-2">
            <Link href="#">
              <a className="text-light hover:text-white duration-150 ease-linear">
                Home
              </a>
            </Link>
            <FiChevronRight className="text-light" />
            <Link href="#">
              <a className="text-white">Product Details</a>
            </Link>
          </div>
        </Breadcrumb>
        <div className="my-20 lg:mx-20 md:px-10 px-5">
          <div className="flex lg:flex-row flex-col w-full items-start gap-12 justify-between">
            <StickyBox
              offsetTop={100}
              style={{ top: "90px" }}
              className="lg:w-3/5 w-full stickyBox"
            >
              <div className="flex md:flex-row flex-col gap-3">
                <div className="flex md:flex-col flex-row gap-3">
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      className={`card md:p-2 p-1 flex cursor-pointer ${
                        img === NFTImage
                          ? "border-2 border-light/10"
                          : "border-0"
                      }`}
                    >
                      <Image
                        src={img}
                        alt="nft-3"
                        className="rounded-md"
                        width={180}
                        height={180}
                        onClick={() => changeNFTImage(i)}
                      />
                    </div>
                  ))}
                </div>

                <div className="card border-0 md:p-4 p-2 flex w-full">
                  <Image
                    src={NFTImage}
                    alt="nft-4"
                    className="rounded-md object-cover"
                    width={500}
                    height={500}
                    layout="intrinsic"
                  />
                </div>
              </div>
            </StickyBox>

            <div className="lg:w-2/5 w-full">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-semibold text-3xl">
                  {product.title}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="cursor-pointer btn btn-dark text-sm flex gap-2 items-center px-3 h-10">
                    <BsSuitHeart /> <p>122</p>
                  </div>
                  <div className="cursor-pointer btn btn-dark px-3 h-10">
                    <BsThreeDots />
                  </div>
                </div>
              </div>
              <p className="text-light font-medium my-4">
                Height bid{" "}
                <span className="text-primary">{product.price}wETH</span>
              </p>
              <p className="text-white text-xl font-medium">
                {product["propertie-name"]} , Info bellow
              </p>

              <div className="flex md:flex-row flex-col gap-16 mt-8">
                <div>
                  <p className="text-white text-md">
                    Catagory <span className="text-light">{product.type}</span>
                  </p>
                  <div className="flex gap-3 items-center mt-2">
                    <Avatar
                      image={client1}
                      text="Brodband"
                      classes="w-14 h-14"
                    />
                    <Link href="#">
                      <a className="text-white text-xl hover:text-primary duration-150 ease-linear font-semibold">
                        Brodband
                      </a>
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-white text-md">Collections</p>
                  <div className="flex gap-3 items-center mt-2">
                    <Avatar
                      image={client2}
                      text="Brodband"
                      classes="w-14 h-14"
                    />
                    <Link href="#">
                      <a className="text-white text-xl hover:text-primary duration-150 ease-linear font-semibold">
                        Brodband
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <button className="btn btn-dark mt-6">
                Unlockable content included
              </button>

              <div className="card flex gap-3 mt-14 p-2">
                <button
                  onClick={() => getBids()}
                  className={`${
                    bids ? "bg-dark border-white" : undefined
                  } w-full md:px-6 px-2 md:py-3 py-2 border border-dashed border-white/10 hover:border-white duration-100 ease-linear text-white rounded-md`}
                >
                  Bids
                </button>
                <button
                  onClick={() => getDetails()}
                  className={`${
                    details ? "bg-dark border-white" : undefined
                  } w-full md:px-6 px-2 md:py-3 py-2 border border-dashed border-white/10 hover:border-white duration-100 ease-linear text-white rounded-md`}
                >
                  Details
                </button>
                <button
                  onClick={() => getHistory()}
                  className={`${
                    history ? "bg-dark border-white" : undefined
                  } w-full md:px-6 px-2 md:py-3 py-2 border border-dashed border-white/10 hover:border-white duration-100 ease-linear text-white rounded-md`}
                >
                  History
                </button>
              </div>

              {(bids || history) &&
                data.map((el, i) => (
                  <div
                    key={el.id}
                    className={`flex items-center gap-3 border-b border-white/10 py-5 ${
                      i === data.length - 1 ? "border-b-0" : undefined
                    }`}
                  >
                    <Avatar
                      image={el.image}
                      text={el.user}
                      classes="w-14 h-14"
                    />
                    <div className="flex gap-2 items-start text-sm">
                      <div>
                        <p className="text-light mb-1">{el.price}wETH by</p>
                        <p className="text-light">{el.createdAt}</p>
                      </div>
                      <p className="text-white">{el.user}</p>
                    </div>
                  </div>
                ))}

              {details && (
                <>
                  <div className="mt-8">
                    <p className="text-light font-medium">Owner</p>
                    <div className="flex gap-3 items-center mt-2">
                      <Avatar
                        image={client5}
                        text="Brodband"
                        classes="w-14 h-14"
                      />
                      <Link href="#">
                        <a className="text-white text-xl hover:text-primary duration-150 ease-linear font-semibold">
                          Brodband
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-light font-medium">Property</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {product.property.map((el, i) => (
                        <div className="card text-[13px]" key={i}>
                          <p className="text-light mb-1">{el.type}</p>
                          <p className="text-white font-medium">{el.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-light font-medium">Category</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {product.category.map((el, i) => (
                        <div className="card text-[13px]" key={i}>
                          <p className="text-light mb-1">{el.type}</p>
                          <p className="text-white font-medium">{el.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="card p-8 mt-10">
                <div className="flex w-full md:flex-row flex-col gap-4">
                  <div className="lg:w-2/5 w-full">
                    <p className="text-white font-medium text-lg">
                      Winning bit
                    </p>
                    <div className="flex items-center gap-4 mt-5">
                      <Avatar
                        image={client6}
                        classes="flex w-[8rem] "
                        text="client-6"
                      />

                      <p className="text-light font-medium">
                        Highest bit{" "}
                        <span className="text-white">caesar clown</span>{" "}
                        0.024wETH
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-3/5 w-full">
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
            </div>
          </div>

          <div className="mt-36">
            <h1 className="text-white text-3xl font-semibold">Recent View</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8 w-full">
              {products.map((product) => (
                <div key={product.id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-36">
            <h1 className="text-white text-3xl font-semibold">Related Item</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8 w-full">
              {products.slice(0, 3).map((product) => (
                <div key={product.id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;
