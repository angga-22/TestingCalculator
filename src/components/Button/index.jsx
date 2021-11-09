const Button = ({ name, handleClick }) => {
  return (
    <button className="btn-primary" onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
