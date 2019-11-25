import React, { FC } from 'react'
import { Menu, Icon } from 'antd'
import menus from './config'
const { SubMenu } = Menu

const Index = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      {
        menus.map(menu => 
          menu.children && menu.children.length ?
          <SubMenu
            key={menu.key}
            title={<span><Icon type={menu.icon} /><span>{menu.name}</span></span>}
          >
            { menu.children.map(item => <Menu.Item key={item.key}>{item.name}</Menu.Item>) }
          </SubMenu> :
          <Menu.Item key={menu.key}>
            <Icon type={menu.icon} />
            <span>{menu.name}</span>
          </Menu.Item>
        )
      }
    </Menu>
  )
}

export default Index