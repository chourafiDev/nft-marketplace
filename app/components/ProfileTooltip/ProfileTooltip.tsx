import Image, { StaticImageData } from "next/image";

interface IProps {
  images: StaticImageData[];
  places: string;
}

const ProfileTooltip = ({ images, places }: IProps) => {
  return (
    <div className="flex gap-3 items-center mt-4">
      <div className="flex items-center -space-x-2">
        {images.map((img, i) => (
          <div
            key={i}
            className="hover:transform hover:scale-125 duration-200 ease-in cursor-pointer hover:z-30 border-2 w-[45px] h-[45px] border-white/20 rounded-full"
          >
            <Image
              src={img}
              alt="client2"
              className="rounded-full"
              width={45}
              height={45}
            />
          </div>
        ))}
      </div>
      <p className="text-light font-medium">{places} Place Bit</p>
    </div>
  );
};

export default ProfileTooltip;
