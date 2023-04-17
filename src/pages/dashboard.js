import Title from "@components/title";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [hello, setHello] = useState("haha"); //state
  const [count, setCount] = useState(0);
  let im_variable = "ibang word"; // variable

  const [result, setResult] = useState(0);
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);

  // const haha = () => {
  //   return (im_variable = "new word");
  // };

  const add = () => {
    return setResult(parseInt(firstInput) + parseInt(secondInput));
  };

  useEffect(() => {
    if (count > 5) {
      setHello("hiihohoh");
    }
  }, [count]);

  return (
    <div>
      <p>state: {hello}</p>
      <button onClick={() => setHello("hohohohoh")}>click me</button>
      <p>old variable: {im_variable}</p>
      <p> new variable: {im_variable}</p>
      <br />
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add me</button>
      <br />
      {/* Calculator */}
      <p>result: {result}</p>
      <p>firstInput: {firstInput}</p>
      <p>secondInput: {secondInput}</p>
      <input
        type="number"
        value={firstInput}
        onChange={(e) => {
          setFirstInput(e.target.value);
        }}
      />
      <input
        type="number"
        value={secondInput}
        onChange={(e) => {
          setSecondInput(e.target.value);
        }}
      />
      <button onClick={() => add()}>add me</button>
      <br />
      <button onClick={() => setFirstInput(1)}>1</button>
      <button onClick={() => setFirstInput(2)}>2</button>
      <button onClick={() => setFirstInput(3)}>3</button>
      <button onClick={() => setFirstInput("+")}>+</button>
      <br />
      <button onClick={() => setFirstInput(4)}>4</button>
      <button onClick={() => setFirstInput(5)}>5</button>
      <button onClick={() => setFirstInput(6)}>6</button>
    </div>
  );
}
