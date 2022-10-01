import { Logo, NavLinks, Wallet } from "./";

const Index = () => {
  return (
    <div className="sticky top-0 px-28 py-5 border-b border-white/10 bg-[#181822]/80 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Logo />
          <div className="bg-white/10 h-10 w-[1px]"></div>
          <NavLinks />
        </div>
        <div>
          <Wallet />
        </div>
      </div>
    </div>
  );
};

export default Index;
