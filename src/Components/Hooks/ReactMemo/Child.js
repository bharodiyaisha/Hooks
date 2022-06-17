import React from "react";

const Child = (props) => {
  console.log("props:", props);
  return <div>Child:{props.item}</div>;
};

export default React.memo(Child);
