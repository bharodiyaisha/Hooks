import React, { useState } from "react";
import Child from "./Child";
const Test = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);
  const increment = () => {
    setItem(2);
    setCount(count + 1);
  };
  return (
    <div>
      <h3>ReactMemo</h3>
      <Child item={item} />
      <button onClick={increment}>Count:{count}</button>
    </div>
  );
};

export default Test;
