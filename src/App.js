import React, { useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import TestErrorBoundary from "./components/TestErrorBoundary";
import HomePage from "./components/HomePage";
import Reducer from "./components/Reducer";
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <Router>
      <nav>
      <Link className='navBarLink' to="/"><b>Home</b></Link>
      <Link className='navBarLink' to="/counter"><b>Counter</b></Link>
      <Link className='navBarLink' to="/testErrorBoundary"><b>Test Error boundary</b></Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/Reducer" element={<Reducer />} />
          <Route path="/testErrorBoundary" element={<TestErrorBoundary />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;