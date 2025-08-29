import type { inputProps } from "../../Interface";

const Input = ({type, name, id, value, onChange, placeholder, label}: inputProps) => {
  return (
    <div>
      <label htmlFor={id || name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
