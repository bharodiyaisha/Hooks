import React, { useCallback, useState } from "react";
import Child from "./Child";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const getItems = useCallback(() => {
    console.log(count1 + 1, count1 - 1);
    for (let i = 0; i < 100000000; i++) {
      console.log("getItems");
      return [count1 + 1, count1 - 1];
    }
  }, [count1]);

  return (
    <div>
      <h4>UseCallback</h4>
      <button
        className="btn btn-outline-secondary"
        type="submit"
        onClick={() => setCount(count + 1)}
      >
        count :{count}
      </button>

      <button
        className="btn btn-outline-secondary"
        type="submit"
        onClick={() => setCount1(count1 - 1)}
      >
        count1:{count1}
      </button>
      <Child getItems={getItems} />
    </div>
  );
};

export default Callback;
