import React from 'react'
import { Layout } from 'antd'
import SiderBar from './SiderBar'
const { Header, Sider, Content } = Layout

const Frame = () => {
  return (
    <Layout>
      <Sider><SiderBar /></Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}

export default Frame