import React from 'react';
import { withRouter, Link } from "react-router-dom"
import { observer } from 'mobx-react'
import { Layout, Menu, Icon } from 'antd'
import MenuStore from '../store/MenuStore'

const { Sider } = Layout
// const { SubMenu } = Menu


const LeftNav = (props) => {
  let { state: { collapsed } } = MenuStore
  console.log('Top collapsed: LeftNav >>>>>', collapsed)

  console.log('Link >>>>>', props.location ? props.location.pathname : '=====')

  // let loadMenuStyle = menu => {
  //   if (menu.includes(props.location.pathname)) {
  //     return 'active'
  //   } else {
  //     return ''
  //   }
  // }


  return (
    <div className="left-menu-container">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"></Menu> */}
          <Menu.Item key="1">
            <Link to='/'>
              <Icon type="pie-chart" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>

          <Menu.Item
            key="2"
          >
            <Link to='/manage-news'>
              <Icon type="upload" />
              <span>Manage News</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to='/email-list'>
              <Icon type="mail" />
              <span>Email List</span>
            </Link>
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

export default withRouter(observer(LeftNav))