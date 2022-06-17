import React, { useRef } from "react";

const Ref = () => {
  const inputRef = useRef();
  const handleInput = () => {
    inputRef.current.value = "100";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };
  return (
    <div>
      <h3>UseRef Hook</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle Update</button>
    </div>
  );
};
export default Ref;
