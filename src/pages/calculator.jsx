import * as React from "react";
import InputField from "../components/Input";
import Button from "../components/Button";
import "./style.css";
const Calculator = () => {
  const [value1, setValue1] = React.useState();
  const [value2, setValue2] = React.useState();
  const [value3, setValue3] = React.useState();
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [result, setResult] = React.useState();

  const errorMessage = () => {
    if (!(check1 ^ check2 ? check3 : check1)) {
      return (
        <>
          <p>At least check two of the input value</p>
        </>
      );
    }
  };

  function calculateType(type) {
    if (check1 ^ check2 ? check3 : check1) {
      if (type === "add") {
        setResult(
          parseInt(check1 ? value1 : 0) +
            parseInt(check2 ? value2 : 0) +
            parseInt(check3 ? value3 : 0)
        );
      } else if (type === "minus") {
        setResult(
          parseInt(check1 ? value1 : 0) -
            parseInt(check2 ? value2 : 0) -
            parseInt(check3 ? value3 : 0)
        );
      } else if (type === "multiply") {
        setResult(
          parseInt(check1 ? value1 : 1) *
            parseInt(check2 ? value2 : 1) *
            parseInt(check3 ? value3 : 1)
        );
      } else if (type === "divide") {
        setResult(
          parseInt(check1 ? value1 : 1) /
            parseInt(check2 ? value2 : 1) /
            parseInt(check3 ? value3 : 1)
        );
      } else {
        return "#Value!";
      }
    } else {
      return "";
    }
  }

  const handleCheck1 = () => {
    setCheck1((value1) => !value1);
  };
  const handleCheck2 = () => {
    setCheck2((value2) => !value2);
  };
  const handleCheck3 = () => {
    setCheck3((value3) => !value3);
  };

  return (
    <div className="container">
      <div className="input-container">
        <InputField
          name="input1"
          type="number"
          value={value1}
          handleChange={(e) => setValue1(e.target.value)}
        />
        <InputField
          checked={check1}
          type="checkbox"
          handleChange={handleCheck1}
        />
      </div>
      <div className="input-container">
        <InputField
          name="input2"
          type="number"
          value={value2}
          handleChange={(e) => setValue2(e.target.value)}
        />
        <InputField
          checked={check2}
          type="checkbox"
          handleChange={handleCheck2}
        />
      </div>
      <div className="input-container">
        <InputField
          name="input3"
          type="number"
          value={value3}
          handleChange={(e) => setValue3(e.target.value)}
        />
        <InputField
          checked={check3}
          type="checkbox"
          handleChange={handleCheck3}
        />
      </div>
      <p>{errorMessage()}</p>
      <div className="button-operation mt-32">
        <Button name="add" handleClick={() => calculateType("add")} />
        <Button name="minus" handleClick={() => calculateType("minus")} />
        <Button name="multiply" handleClick={() => calculateType("multiply")} />
        <Button name="divide" handleClick={() => calculateType("divide")} />
      </div>
      <div className="result">
        <h1>Result: {result}</h1>
      </div>
    </div>
  );
};

export default Calculator;
