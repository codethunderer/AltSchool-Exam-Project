import * as React from 'react';

function useCounter(initialValue) {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => setCount((prevValue) => prevValue + 1);
  const decrement = () => setCount((prevValue) => prevValue - 1);
  const reset = () => setCount(initialValue || 0);

  function setValue(e) {
    let num = Number(e.target.value);
    if (String(num) === "NaN" || e.target.value === "") {
        setCount(count);
    }
    else {
        setCount(num);
    }
  }

  return {
  count,
  increment,
  decrement,
  reset,
  setValue,
  };
}

export default useCounter;