import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd'
import styled from 'styled-components'
import { observer } from 'mobx-react'

const FormItem = Form.Item

const ForgotPassword = Form.create()(observer(props => {
  const { getFieldDecorator } = props.form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  return (
    <ForgotPasswordContainer>
      <div className="layer-mask" />
      <div className="container">
        <h1 className="text">Forgot Password</h1>
        <Form onSubmit={handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your email address!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email Address" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              <Link to="/dashboard">Submit</Link>
            </Button>
          </FormItem>
        </Form>
      </div>
    </ForgotPasswordContainer>
  )
}))

const ForgotPasswordContainer = styled('div')`
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
export default ForgotPassword




// import React from 'react'
// import { observer } from 'mobx-react'
// import { Input, Button } from 'antd'
// import styled from 'styled-components'

// const ForgotPassword = () => {
//   return (
//     <ForgotContainer>
//       <div className="layer-mask" />
//       <div className="container">
//         <h1 className="text">Forgot Password.</h1>
//         <Input placeholder="Basic usage" />
//         <Button type="primary" htmlType="submit" className="login-form-button">
//           <a href="/dashboard">Submit</a>
//         </Button>
//       </div>
//     </ForgotContainer>
//   )
// }

// const ForgotContainer = styled('div')`
//   background-image: url("https://img.alicdn.com/tfs/TB1vyxuwHrpK1RjSZTEXXcWAVXa-1350-900.jpg");
//   background-size: cover;
//   height: 100vh;
//   width: 100%;
//   padding-top: 12%;
//   .layer-mask {
//     background: rgba(0,0,0,.3);
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     left: 0;
//   }
//   .container {
//     max-width: 400px;
//     margin: 0 auto;
//     border: 1px solid #e9e9e9;
//     padding: 20px;
//     border-radius: 5px 5px 5px 5px;
//     -moz-border-radius: 5px 5px 5px 5px;
//     -webkit-border-radius: 5px 5px 5px 5px;
//     background-color: #ffffff;
//     z-index: 100;
//     position: relative;
//     .login-form-forgot {
//       float: right;
//     }
//     h1 {
//       color: rgba(0,0,0,.85);
//       font-weight: 500;
//       font-family: 'robotomedium', Helvetica, Arial, sans-serif;
//       font-size: 2rem;
//       margin: 0 0 12px 0;
//       padding: 0;
//     }
//     h1.text {
//       text-align: center;
//     }
//     .login-form-button {
//       text-align: center;
//       width: 100%;
//     }
//   }
// `

// export default observer(ForgotPassword)