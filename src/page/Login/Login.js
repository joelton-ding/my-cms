import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import LoginStore from '../../store/LoginStore'

const FormItem = Form.Item

const Login = Form.create()(observer(props => {
  let { state: { user }, actions: { showChecked } } = LoginStore
  console.log('user >>>>> ', user)
  console.log('user1 >>>>>', JSON.parse(JSON.stringify(user)))
  console.log('LoginStore >>>>>', JSON.parse(JSON.stringify(LoginStore)))
  
  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   console.log('clicked')
  // }

  const { getFieldDecorator } = props.form
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    })
  }

  return (
    <LoginContainer>
      <div className="layer-mask" />
      <div className="container">
        <h1 className="text">Login</h1>
        <Form className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <Link className="login-form-forgot" to="/forgot-password">
              Forgot password
            </Link>
            <Button onSubmit={handleSubmit} type="primary" htmlType="submit" className="login-form-button">
              Log In
              {/* <Link to="/dashboard">Log In</Link> */}
            </Button>
          </FormItem>
        </Form>
      </div>
    </LoginContainer>
  )
}))

// const LoginForm = Form.create()(Login);

const LoginContainer = styled('div')`
  background-image: url("../images/user-layout.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  min-height: 600px;
  padding-top: 10%;
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
export default Login

