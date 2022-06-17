import React, { useEffect, useState } from "react";

const Child = ({ getItems }) => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(getItems);
  }, [getItems]);
  return (
    <div>
      {data &&
        data.map((item) => {
          <div key={item}>{item}</div>;
        })}
    </div>
  );
};

export default Child;
