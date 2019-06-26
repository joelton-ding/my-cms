import React from 'react'
import propTypes from 'prop-types'

const Link = (props) => {
  const { path, target, children, className} = props
  const handleClick = (path) => {
    window.location.href = path
  }
  return(
    <a onClick={() => handleClick(path)} target={target} className={className}>
      {children}
    </a>
  )
}

const Fn = (path) => {
  window.location.href = path
}

Link.propTypes = {
  path: propTypes.string,
  target: propTypes.string,
  children: propTypes.any,
  className: propTypes.string
}

const Redirect = { Link, Fn }

export default Redirect;