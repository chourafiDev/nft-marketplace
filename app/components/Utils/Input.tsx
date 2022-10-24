type InputProps = { type: string; placeholder: string; name: string };

const Input = ({ type, placeholder, name }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="bg-[#242435] text-white text-sm font-normal border-2 border-white/20 outline-none px-6 py-3 rounded-md w-full caret-white focus:border-primary duration-200 ease-linear"
    />
  );
};

export default Input;
