import React, { useState } from 'react'
import { Layout } from 'antd'
import SiderBar from './SiderBar'
import LayoutHeader from './Header'
const { Header, Sider, Content } = Layout

const Frame = () => {
  const [ collapsed, setCollapsed ] = useState(false)
  const onSwitch = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
      <Sider collapsible collapsed={collapsed}><SiderBar collapsed={collapsed} /></Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}><LayoutHeader collapsed={collapsed} onSwitch={onSwitch} /></Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}

export default Frame