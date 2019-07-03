import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { observer } from 'mobx-react'


const Logout = () => {
  return (
    <LogoutContainer>
      <div className="layer-mask" />
      <div className="container">
        <h1 className="text">You currently is logout.</h1>
        <Button type="primary"><Link to="/">Goto Login</Link></Button>
      </div>
    </LogoutContainer>
  )
}

const LogoutContainer = styled('div')`
  background-image: url("../images/user-layout.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding-top: 12%;
  .layer-mask {
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .container {
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid #e9e9e9;
    padding: 20px;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    background-color: #ffffff;
    z-index: 100;
    position: relative;
    .login-form-forgot {
      float: right;
    }
    h1 {
      color: rgba(0,0,0,.85);
      font-weight: 500;
      font-family: 'robotomedium', Helvetica, Arial, sans-serif;
      font-size: 2rem;
      margin: 0 0 12px 0;
      padding: 0;
    }
    h1.text {
      text-align: center;
    }
    .login-form-button {
      text-align: center;
      width: 100%;
    }
  }
`
export default observer(Logout)

