import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 5);
    }, 1000);
  });

  return (
    <div>
      <h3>UseEffect</h3>
      <h3>{count}</h3>
    </div>
  );
};

export default Effect;
