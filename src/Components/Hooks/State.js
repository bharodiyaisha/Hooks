import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>UseState</h4>
      <h5>{count}</h5>
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
        onClick={() => setCount(count - 2)}
      >
        Minus
      </button>
    </div>
  );
};

export default State;
