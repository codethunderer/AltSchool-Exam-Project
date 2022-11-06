import React from "react";
import { Link } from "react-router-dom";

const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/counter">Counter</Link>
    </li>
    <li>
      <Link to="/testError">Test Error Boundary</Link>
    </li>
  </div>
  );
}
export default navbar;
  