import React from "react";
import { useState } from "react";
// kkk
const Button = ({ title }) => {
  const [values, setValues] = useState(" ");
  const inputValues = values.split(",").map(item);
  const [isValid, setIsValid] = useState(null);

  const validateValue = () => {
    for (let i = 0; i < inputValues.length - 1; i++) {
      if (inputValues[i] > inputValues[i + 1]) {
        setIsValid("not in Ascending order");
        return;
      }
    }
    return setIsValid("in ascending order");
  };
// jhkjhkj
  return (
    <div>
      <form>
        <label>Enter Number to validate</label>
        <input
          placeholder="eg. 123"
          type="number"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <button onClick={validateValue}>Check Validation</button>
      </form>
      <div>{isValid !== null && <h1>The inputed value is {isValid}</h1>}</div>
      {/* <button className=" bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
        {title}
      </button> */}
    </div>
  );
};

export default Button;
// bkhj
