import React, { useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import TestError from "./components/TestError";
import Home from "./components/Home";
import Reducer from "./components/Reducer";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/Navbar";

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
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/Reducer" element={<Reducer />} />
          <Route path="/testErrorBoundary" element={<TestError />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;