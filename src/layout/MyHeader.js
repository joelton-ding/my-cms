import React from 'react';
import { observer } from 'mobx-react'
import { Layout, Icon, Avatar } from 'antd'
import MenuStore from '../store/MenuStore'

const { Header } = Layout

const MyHeader = () => {
  let { state: { collapsed }, actions: { showToggle } } = MenuStore
  console.log('State: collapsed >>>>>', collapsed)

  const toggle = () => {
    showToggle(!collapsed)
    console.log('collapsed', collapsed)
  }

  return (
    <Header className="header">
      <Icon
        className="trigger"
        onClick={() => toggle()}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
      />
      <div className="login-container">
        <button class="dropbtn">
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>A</Avatar>
          <span className="name">Alex Ong</span>
        </button>
        <div class="dropdown-content">
          <ul>
            <li><a href="#1"><Icon type="logout" /> Logout</a></li>
          </ul>
        </div>
      </div>
    </Header>
  )
}

export default observer(MyHeader);