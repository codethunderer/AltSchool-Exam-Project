import React from "react";
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = ()=>{
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <meta name="description" content="counter app for increment, decrement and resetting counts" />
        <link rel="canonical" href="/" />
    </Helmet>
      <div className="home-page">
        <h1>Welcome to My Counter App</h1>
      </div>
    </>
  )
}

export default Home;