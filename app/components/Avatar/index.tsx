import Image, { StaticImageData } from "next/image";

interface IProps {
  image: StaticImageData;
  text: string;
  classes: string;
}

const Avatar = ({ image, text, classes }: IProps) => {
  return (
    <div
      className={`overflow-hidden cursor-pointer hover:z-30 border-[3px] border-white/10 rounded-full ${classes}`}
    >
      <Image
        src={image}
        alt={text}
        className="hover:scale-125 duration-300 ease-linear"
      />
    </div>
  );
};

export default Avatar;
