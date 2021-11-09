const InputField = ({
  label,
  type,
  name,
  id,
  value,
  handleChange,
  htmlFor,
  ...props
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        className="input"
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </>
  );
};

export default InputField;
