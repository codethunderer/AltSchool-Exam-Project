import React from 'react'
import useCounter from "./Hooks/useCounter";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

function Counter() {
  const {count, increment, decrement, reset, setValue} = useCounter (0)
  return (
    <>
    <Helmet>
        <title>Counter</title>
        <meta name="description" content="counter app for increment, decrement and resetting counts" />
        <link rel="canonical" href="/counter" />
      </Helmet>
    <div className="counter">
      <h1>A Custom Counter Hook</h1>
      <div>
        <input
          type="text"
          placeholder="Set Counter Value"
          onChange={setValue}
          onBlur={(e) => {
            e.target.value = "";
          }}
        />
        <h2 className="count-num">Count: {count}</h2>
        <div className="buttons-wrapper">
          <button onClick={increment}>INCREMENT</button>
          <button onClick={decrement}>DECREMENT</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
      <div>
        <NavLink to="/Reducer"><b>Go To Reducer Counter</b></NavLink>
      </div>
    </div>
    </>
  )
}
export default Counter;