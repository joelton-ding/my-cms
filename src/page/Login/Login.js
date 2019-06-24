import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components'
import { observer } from 'mobx-react'

const FormItem = Form.Item

const Login = Form.create()(observer(props => {
  const { getFieldDecorator } = props.form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return(
    <LoginContainer>
      <div className="container">
        <h1>Content Management System</h1>
        <Form onSubmit={handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
      </div>
    </LoginContainer>
  )
}))

// const LoginForm = Form.create()(Login);

const LoginContainer = styled('div')`
  background: url('../images/login-bg.jpg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding-top: 12%;
  .container {
    max-width: 500px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    h1 {
      color: rgba(0,0,0,.85);
      font-weight: 500;
      font-family: Futura,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
      font-size: 2rem;
      margin: 0 0 12px 0;
      padding: 0;
    }
  }
`
export default Login

