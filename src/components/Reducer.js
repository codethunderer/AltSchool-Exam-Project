import React, { useReducer, useEffect } from "react";

function Reducer() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  }, []);
  
  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
    SET_VALUE: "setValue",
  };
  function setValue(value, count) {
    let num = Number(value);
    if (String(num) === "NaN" || value === "") {
      return count;
    }
    return num;
  }
  function reducer(count, action) {
    switch (action.type) {
      case ACTIONS.SET_VALUE:
        return setValue(action.payload, count);
      case ACTIONS.INCREMENT:
        return ++count;
      case ACTIONS.DECREMENT:
        return --count;
      case ACTIONS.RESET:
        return 0;
      default:
        return count;
    }
  }
  function inputHandler(e) {
    dispatch({
      type: ACTIONS.SET_VALUE,
      payload: e.target.value,
      elem: e.target,
    })
  }
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="counter">
      <h1>UseReducer Counter</h1>
      <div>
        <input
          type="text"
          placeholder="set counter value"
          onChange={inputHandler}
          onBlur={(e) => {
            e.target.value = "";
          }}
        />
        <h2 className="count-num">Count : {count}</h2>
        <div className="buttons-wrapper">
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.INCREMENT });
            }}
          >
            INCREMENT
          </button>
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.DECREMENT });
            }}
          >
            DECREMENT
          </button>
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.RESET });
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
export default Reducer;
