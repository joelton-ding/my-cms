import React from 'react';
import { observer } from 'mobx-react'
import { Layout, Menu, Icon } from 'antd';
import MenuStore from '../store/MenuStore'

const { Sider } = Layout
// const { SubMenu } = Menu

const LeftNav = (props) => {
  let {state: {collapsed}} = MenuStore
  console.log('top', collapsed)
  return (
    <div className="left-menu-container">
      <Sider
        trigger={null}
            collapsible
            collapsed={collapsed}
          >
          <div className="logo" />
           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="upload" />
              <span><a href="manage-news">Manage News</a></span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="mail" />
              <span><a href="email-list">Email List</a></span>
            </Menu.Item>
            {/* <SubMenu
              key="sub1"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="3">Team 1</Menu.Item>
              <Menu.Item key="4">Team 2</Menu.Item>
              <Menu.Item key="5">Team 3</Menu.Item>
            </SubMenu> */}
          </Menu>
          </Sider>
            </div>
        )
}

export default observer(LeftNav);