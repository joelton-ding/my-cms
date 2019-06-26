import React from 'react';
import { observer } from 'mobx-react'
import { Layout, Icon } from 'antd'
import MenuStore from '../store/MenuStore'

const { Header } = Layout

const MyHeader = () => {
  let {state: {collapsed}, actions: {showToggle}} = MenuStore
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
    </Header>   
  )
}

export default observer(MyHeader);