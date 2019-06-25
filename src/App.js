import React from 'react'
import { observer } from 'mobx-react'
import { Layout, Menu, Icon } from 'antd';
import MyContent from './layout/MyContent'
import Footer from './layout/Footer'
import './App.scss'
import 'antd/dist/antd.css'
import MenuStore from './store/MenuStore'


const { Header, Sider } = Layout
const { SubMenu } = Menu

const App = () => {
  let {state: {collapsed}, actions: {showToggle}} = MenuStore
  console.log('top', collapsed)
  const toggle = () => {
    showToggle(!collapsed)
    console.log('collapsed', collapsed)
  }
    return (
      <React.Fragment>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
          <div className="logo" />
           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
          </Sider>
          <Layout>
            <Header className="header">
              <Icon
                className="trigger"
                onClick={() => toggle()}
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
              />
            </Header>
            <MyContent />
          </Layout>
        </Layout>
        <Footer />
      </React.Fragment>
    )
}

export default observer(App);