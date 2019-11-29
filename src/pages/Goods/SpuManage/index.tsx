import React, { useEffect } from 'react'
import { Input, Button, Tabs } from 'antd'
import { Switch, RouteComponentProps } from 'react-router-dom'
import { GoPageTop, WrapRoute } from 'components'
import history from '@/history'
import Perfecting from './Perfecting'
import Perfected from './Perfected'
import OnSale from './OnSale'

const { Column } = GoPageTop

const { Search } = Input
const { TabPane } = Tabs

const onGoodsChange = (key:string) => {
  history.push(key)
}

const ClassifyManage = ({ match, location }:RouteComponentProps) => {
  useEffect(() => {
  }, [])

  return (
    <div>
      <div className="page-header">
        <GoPageTop title="商品分类">
          <Column label="商品品类" style={{ width: "25%" }}>
            <Input />
          </Column>
          <Column label="商品品牌" style={{ width: "25%" }}>
            <Input />
          </Column>
          <Column style={{ width: "25%" }}>
            <Search placeholder="请输入SPU名称" />
          </Column>
          <Column>
            <Button type="primary" icon="plus" style={{ marginRight: 16 }}>查询</Button>
            <Button icon="plus">重置</Button>
          </Column>
          <Column style={{ width: '100%' }}>
            <Button type="primary" icon="plus" style={{ marginRight: 16 }}>添加SPU</Button>
            <Button type="primary">从外部导入</Button>
          </Column>
        </GoPageTop>
      </div>
      <div className="page-body">
        <Tabs defaultActiveKey={location.pathname} onChange={onGoodsChange}>
          <TabPane tab="待完善" key={`${match.url}/perfecting`} />
          <TabPane tab="已完善" key={`${match.url}/perfected`} />
          <TabPane tab="已上架" key={`${match.url}/onsale`} />
        </Tabs>
        <div>
          <Switch>
            <WrapRoute exact path={match.url} component={Perfecting} />
            <WrapRoute path={`${match.url}/perfecting`} component={Perfecting} />
            <WrapRoute path={`${match.url}/perfected`} component={Perfected} />
            <WrapRoute path={`${match.url}/onsale`} component={OnSale} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default ClassifyManage