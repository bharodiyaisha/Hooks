import React, { useState, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(2);

  const MultiCountMemo = useMemo(function MultiCount() {
    console.log("MultiCount");
    return count * 5;
  },[count]);
  
  return (
    <div>
      <h3>UseMemo</h3>
      <p>{count}</p>
      <p>{count1}</p>
      <p>{MultiCountMemo}</p>
      <button
        className="btn btn-outline-secondary"
        type="submit"
        onClick={() => setCount(count + 5)}
      >
        Add
      </button>

      <button
        className="btn btn-outline-secondary"
        type="submit"
        onClick={() => setCount1(count1 * 2)}
      >
        Update
      </button>
    </div>
  );
};

export default Memo;
