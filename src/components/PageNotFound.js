import React from 'react'
import { Helmet } from "react-helmet-async";

const PageNotFound = ()=>{
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="This shows the 404 page of the counter app"
        />
      </Helmet>
      <div>
        <h1>404 Page</h1>
        <p>Oops...Something went wrong</p>
      </div>
    </>
  )
}

export default PageNotFound;