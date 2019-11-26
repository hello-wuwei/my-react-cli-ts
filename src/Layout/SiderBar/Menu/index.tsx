import React from 'react'
import { Menu, Icon } from 'antd'
import menus from './config'
import history from '@/history'
const { SubMenu } = Menu

const Index = () => {
  
  const onMenuItemClick = ({ item, key, keyPath, domEvent }:any) => {
    history.push(key)
  }

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={onMenuItemClick}>
      {
        menus.map((menu:any) => 
          menu.children && menu.children.length ?
          <SubMenu
            key={menu.key}
            title={<span><Icon type={menu.icon} /><span>{menu.name}</span></span>}
          >
            { menu.children.map((item:any) => <Menu.Item key={item.key}>{item.name}</Menu.Item>) }
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