import Image from "next/image";
import Link from "next/link";
import { logo } from "../../../assets";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" width={100} className="cursor-pointer" />
    </Link>
  );
};

export default Logo;
