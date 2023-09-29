import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Interactions Architect</title>
        <meta property="og:title" content="Product Interactions Architect" />
      </Helmet>
    </div>
  )
}

export default Home
