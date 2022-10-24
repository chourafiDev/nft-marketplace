type CheckboxProps = {
  type: string;
  name: string;
  id: string;
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ type, name, id, text, handleChange }: CheckboxProps) => {
  return (
    <label className="container">
      <div>
        <input type="checkbox" name={name} onChange={handleChange} />
        <span className="checkmark"></span>
      </div>

      <span className="ml-2 text-light text-sm">{text}</span>
    </label>
  );
};

export default Checkbox;
