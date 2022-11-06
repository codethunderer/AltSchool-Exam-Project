import React from "react";
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Helmet } from "react-helmet-async";

const Home = ()=>{
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This shows the Home page of the counter app" />
        <link rel="canonical" href="/" />
    </Helmet>
      <div className="homepage">
        <h1>Welcome to My Counter App</h1>
        <p>A counter app used for setting the value, increasing, decreasing and resetting of a counter.</p>
      </div>
    </>
  )
}

export default Home;