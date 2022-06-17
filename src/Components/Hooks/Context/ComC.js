import React, { useContext } from "react";
import { BioData } from "./ComA";

const ComC = () => {
  const context = useContext(BioData);
  return (
    <div>
      <h3>Hello {context}!!</h3>
    </div>
  );
};

export default ComC;
