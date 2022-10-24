type InputProps = { placeholder: string; name: string };

const Textarea = ({ placeholder, name }: InputProps) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      className="bg-[#242435] text-white font-normal border-2 border-white/20 outline-none px-6 py-3 rounded-md w-full caret-white focus:border-primary duration-200 ease-linear"
    ></textarea>
  );
};

export default Textarea;
