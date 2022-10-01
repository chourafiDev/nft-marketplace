import Image from "next/image";
import Link from "next/link";
import { logo } from "../../../assets";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={logo} alt="logo" width={100} />
      </a>
    </Link>
  );
};

export default Logo;
