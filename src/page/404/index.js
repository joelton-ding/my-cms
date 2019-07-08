import React from 'react'
// import { Button } from 'antd'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className="page-404-container">
      <div className="page-404">
          <h1>404</h1>
          <p>Page Not Found</p>
          <Link to="/">Back To Login Page</Link>
      </div>
    </div>
  )
}

export default index