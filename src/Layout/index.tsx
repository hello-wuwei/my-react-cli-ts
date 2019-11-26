import React, { useState } from 'react'
import { Layout } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import SiderBar from './SiderBar'
import LayoutHeader from './Header'
import MainRouter from './MainRouter'
const { Header, Sider, Content } = Layout

const Frame = ({ match }: RouteComponentProps) => {
  const [ collapsed, setCollapsed ] = useState(false)
  const onSwitch = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout style={{ height: '100%' }}>
      <Sider collapsed={collapsed}><SiderBar collapsed={collapsed} /></Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}><LayoutHeader collapsed={collapsed} onSwitch={onSwitch} /></Header>
        <Content style={{ padding: 20 }}>
          <MainRouter />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Frame