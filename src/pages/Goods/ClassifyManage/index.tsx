import React from 'react'
import { Input, Button } from 'antd'
import { GoPageTop } from 'components'
import ClassifyDrapTree from './ClassifyDrapTree'

const { Column } = GoPageTop

const { Search } = Input

const ClassifyManage = () => {
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
            <Button type="primary" icon="plus">重置</Button>
          </Column>
          <Column style={{ width: '100%' }}>
            <Button type="primary" icon="plus" style={{ marginRight: 16 }}>添加SPU</Button>
            <Button type="primary">从外部导入</Button>
          </Column>
        </GoPageTop>
      </div>
      <div className="page-body">
        {/* <ClassifyDrapTree /> */}
        <ClassifyDrapTree />
      </div>
    </div>
  )
}

export default ClassifyManage