import React, { useEffect, useState } from "react";
import Button from "../comoponents/Button";
import ButtonBox from "../comoponents/ButtonBox";
import Screen from "../comoponents/Screen";






const toLocaleString = (num) => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");


const App = () => {

  const formula = ["AC", "/", "x", "+", "-", "="];
  const digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [input, setInput] =useState("0");
  const [output, setOutput] = useState("");
  const [calculatorData, setCalculatorData] =useState("");
  // let [calc, setCalc] = useState({
  //   sign: "",
  //   num: 0,
  //   res: 0,
  // });

 const handleSubmit = () => {
    console.log({ calculatorData });

    const total = eval(calculatorData);
    setInput(total);
    setOutput(`${total} = ${total}`);
    setCalculatorData(`${total}`);
  };
  const handleClear = () => {
    setInput("0");
    setCalculatorData("");
  };

  const handleNumbers = (value) => {
    if (!calculatorData.length) {
      setInput(`${value}`);
      setCalculatorData(`${value}`);
    } else {
      if (value === 0 && (calculatorData === "0" || input === "0")) {
        setCalculatorData(`${calculatorData}`);
      } else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator =
          lastChat === "*" || formula.includes(lastChat);

        setInput(isLastChatOperator ? `${value}` : `${input}${value}`);
        setCalculatorData(`${calculatorData}${value}`);
      }
    }
  };
  const dotOperator = () => {
    const lastChat = calculatorData.charAt(calculatorData.length - 1);
    if (!calculatorData.length) {
      setInput("0.");
      setCalculatorData("0.");
    } else {
      if (lastChat === "*" || formula.includes(lastChat)) {
        setInput("0.");
        setCalculatorData(`${calculatorData} 0.`);
      } else {
        setInput(
          lastChat === "." || input.includes(".") ? `${input}` : `${input}.`
        );
        const formattedValue =
          lastChat === "." || input.includes(".")
            ? `${calculatorData}`
            : `${calculatorData}.`;
        setCalculatorData(formattedValue);
      }
    }
  };
  const handleOperators = (value) => {
    if (calculatorData.length) {
      setInput(`${value}`);
      const beforeLastChat = calculatorData.charAt(calculatorData.length - 2);

      const beforeLastChatIsOperator =
        formula.includes(beforeLastChat) || beforeLastChat === "*";

      const lastChat = calculatorData.charAt(calculatorData.length - 1);
      const lastChatIsOperator = formula.includes(lastChat) || lastChat === "*";
      
      const validOp = value === "x" ? "*" : value;
      if (
        (lastChatIsOperator && value !== "-") ||
        beforeLastChatIsOperator && lastChatIsOperator
      ) {
        if (beforeLastChatIsOperator) {
          const updatedValue = `${calculatorData.substring(
            0,
            calculatorData.length - 2
          )}${value}`;
          setCalculatorData(updatedValue);
        } else {
          setCalculatorData(`${calculatorData.substring(0, calculatorData.length - 1)}${validOp}`);
        }
      } else {
        setCalculatorData(`${calculatorData}${validOp}`);
      }
    }
  };
  const handleInput = (value) => {
    const dig = digitos.find((num) => num === value);
    const oper = formula.find((op) => op === value);
      switch (value) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        handleClear();
        break;
      case dig:
        handleNumbers(value);
        break;
      case ".":
        dotOperator(value);
        break;
      case oper:
        handleOperators(value);
        break;
      default:
        break;
    }
  };
  const handleOutput = () => {
    setOutput(calculatorData);
  };

  useEffect(() => {
    handleOutput();
  }, [calculatorData]);
  return (
    <div>
      <div>
        <Screen input={input} output={output} />
        <ButtonBox handleInput={handleInput} />
      </div>
    </div>
  );
};

export default App;
