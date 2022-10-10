import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { logo, portfolio01, portfolio02, portfolio03 } from "../../../assets";

const Footer = () => {
  return (
    <div className="bg-light/5 pt-16">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 py-5 lg:px-28 md:px-10 px-5 gap-8">
        <div className="pr-8">
          <div className="mb-4">
            <Image src={logo} alt="logo" width={100} />
          </div>

          <p className="text-light text-lg font-medium mb-10">
            Created with the collaboration of over 60 of the world&apos;s best
            Nuron Artists.
          </p>
          <hr className="border-t border-white/10" />
          <div className="mt-10">
            <h6 className="text-white font-semibold mb-3">
              Get The Latest Nuron Updates
            </h6>

            <div className="flex flex-col gap-2 bg-light/5 backdrop-blur-lg rounded-md p-4">
              <input
                type="text"
                placeholder="Your username"
                className="bg-black outline-none caret-primary px-3 py-2 rounded-md text-light"
              />
              <button className="btn btn-primary py-2">Subscribe</button>
              <p className="text-light text-sm">
                Email is safe. We don&apos;t spam.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white font-bold md:text-2xl text-xl tracking-wider mb-8">
            Blotn
          </h2>
          <ul className="text-light space-y-2 font-normal text-lg tracking-wide">
            <li>
              <Link href="/">
                <a className="link-hover">Protocol Explore</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">System Token</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">Otimize Time</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">Visual Checking</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">Fadeup System</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">Activity Log</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">System Auto Since</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold md:text-2xl text-xl tracking-wider mb-8">
            Information
          </h2>
          <ul className="text-light space-y-2 font-normal text-lg tracking-wide">
            <li>
              <Link href="/">
                <a className="link-hover">Market Explore</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">Ready Token</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">Main Option</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">Product Checking</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">Blog Grid</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link-hover">Fix Bug</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold md:text-2xl text-xl tracking-wider mb-8">
            Recent Sold Out
          </h2>
          <ul className="space-y-4 tracking-wide">
            <li className="flex items-center gap-3">
              <Link href="/">
                <Image
                  src={portfolio01}
                  alt="portfolio01"
                  className="rounded-full cursor-pointer"
                  width={60}
                  height={60}
                />
              </Link>
              <div className="space-y-1">
                <p className="font-semibold text-white text-sm">
                  #21 The Wonder
                </p>
                <p className="text-light text-[14px]">Highest bid 1/20</p>
                <p className="font-semibold text-primary text-sm">0.244wETH</p>
              </div>
            </li>
            <hr className="border-t border-white/10" />
            <li className="flex items-center gap-3">
              <Link href="/">
                <Image
                  src={portfolio02}
                  alt="portfolio02"
                  className="rounded-full cursor-pointer"
                  width={60}
                  height={60}
                />
              </Link>
              <div className="space-y-1">
                <p className="font-semibold text-white text-sm">Diamond Dog</p>
                <p className="text-light text-[14px]">Highest bid 1/20</p>
                <p className="font-semibold text-primary text-sm">0.022wETH</p>
              </div>
            </li>
            <hr className="border-t border-white/10" />
            <li className="flex items-center gap-3">
              <Link href="/">
                <Image
                  src={portfolio03}
                  alt="portfolio03"
                  className="rounded-full cursor-pointer"
                  width={60}
                  height={60}
                />
              </Link>
              <div className="space-y-1">
                <p className="font-semibold text-white text-sm">Morgan11</p>
                <p className="text-light text-[14px]">Highest bid 1/20</p>
                <p className="font-semibold text-primary text-sm">0.892wETH</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10">
        <div className="flex lg:flex-row flex-col space-y-4 lg:justify-between justify-center items-center md:px-28 px-5 py-6 w-full">
          <div className="flex md:flex-row flex-col items-center md:gap-4 gap-2 text-light">
            <p>©2022 Blotn, Inc. All rights reserved.</p>
            <div className="bg-white/10 h-6 w-[1px] md:block hidden"></div>
            <p className="flex items-center gap-2">
              <a href="#">Terms</a>
              <BsDot />
              <a href="#">Privacy Policy</a>
            </p>
          </div>

          <ul className="flex items-center gap-3">
            <a href="#">
              <li className="text-light bg-dark w-10 h-10 rounded-full flex justify-center items-center">
                <FiFacebook size={18} />
              </li>
            </a>
            <a href="#">
              <li className="text-light bg-dark w-10 h-10 rounded-full flex justify-center items-center">
                <FiInstagram size={18} />
              </li>
            </a>
            <a href="#">
              <li className="text-light bg-dark w-10 h-10 rounded-full flex justify-center items-center">
                <FiTwitter size={18} />
              </li>
            </a>
            <a href="#">
              <li className="text-light bg-dark w-10 h-10 rounded-full flex justify-center items-center">
                <FiLinkedin size={18} />
              </li>
            </a>
            <a href="#">
              <li className="text-light bg-dark w-10 h-10 rounded-full flex justify-center items-center">
                <BiEnvelope size={18} />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
