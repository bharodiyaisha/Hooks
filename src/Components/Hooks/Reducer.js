import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "ADD") {
    return state + 5;
  }
  if (action.type === "MINUS") {
    return state - 1;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Reducer</h3>
      <p>{state}</p>
      <button
        className="btn btn-outline-secondary"
        type="submit"
        onClick={() => dispatch({ type: "ADD" })}
      >
        Add
      </button>

      <button
        className="btn btn-outline-secondary"
        type="submit"
        onClick={() => dispatch({ type: "MINUS" })}
      >
        Minus
      </button>
    </div>
  );
};

export default Reducer;
