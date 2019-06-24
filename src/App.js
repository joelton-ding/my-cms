import React from 'react'
import Login from './page/Login/Login'
import './App.scss'
import 'antd/dist/antd.css'


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Login />
      </React.Fragment>
    )
  }
}

export default App;


// import React from 'react'
// import { Layout, Menu, Icon } from 'antd';
// import MyContent from './layout/MyContent'
// import Footer from './layout/Footer'
// import './App.scss'
// import 'antd/dist/antd.css'

// const { Header, Sider } = Layout
// const { SubMenu } = Menu

// class App extends React.Component {
//   state = {
//     collapsed: false,
//   };
//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <Layout>
//           <Sider
//             trigger={null}
//             collapsible
//             collapsed={this.state.collapsed}
//           >
//           <div className="logo" />
//            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//             <Menu.Item key="1">
//               <Icon type="pie-chart" />
//               <span>Option 1</span>
//             </Menu.Item>
//             <Menu.Item key="2">
//               <Icon type="desktop" />
//               <span>Option 2</span>
//             </Menu.Item>
//             <SubMenu
//               key="sub1"
//               title={<span><Icon type="user" /><span>User</span></span>}
//             >
//               <Menu.Item key="3">Tom</Menu.Item>
//               <Menu.Item key="4">Bill</Menu.Item>
//               <Menu.Item key="5">Alex</Menu.Item>
//             </SubMenu>
//             <SubMenu
//               key="sub2"
//               title={<span><Icon type="team" /><span>Team</span></span>}
//             >
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="9">
//               <Icon type="file" />
//               <span>File</span>
//             </Menu.Item>
//           </Menu>
//           </Sider>
//           <Layout>
//             <Header className="header">
//               <Icon
//                 className="trigger"
//                 type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
//                 onClick={this.toggle}
//               />
//             </Header>
//             <MyContent />
//           </Layout>
//         </Layout>
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default App;
