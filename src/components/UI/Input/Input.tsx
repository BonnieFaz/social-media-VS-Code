interface InputPropse {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: InputPropse) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
