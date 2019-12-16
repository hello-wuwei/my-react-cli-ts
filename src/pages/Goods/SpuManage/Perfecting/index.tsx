import React from 'react'
import { Button } from 'antd'
import { GoTable } from 'components'
import history from '@/history'

const columns = [
  {
    title: 'SPU名称',
    dataIndex: 'name',
    render: (text:any) => <a>{text}</a>,
  },
  {
    title: '商品分类',
    dataIndex: 'age',
  },
  {
    title: '商品品牌',
    dataIndex: 'kind',
  },
  {
    title: '经销商',
    dataIndex: 'kind',
  },
  {
    title: '添加时间',
    dataIndex: 'time',
  },
  {
    title: '操作',
    dataIndex: 'action',
    render: () => {
      return (
        <div>
          <Button type="link" onClick={() => history.push('/spu-property-add')}>添加属性</Button>
          <Button type="link">编辑</Button>
          <Button type="link">删除</Button>
        </div>
      )
    }
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys:any, selectedRows:any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record:any) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Perfecting = () => {
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon="plus" style={{ marginRight: 16 }} onClick={() => history.push('/spu-add')}>添加SPU</Button>
        <Button type="primary">从外部导入</Button>
      </div>
      <div>
        <Button style={{ marginRight: 16 }}>批量操作</Button>
        <Button icon="dash" style={{ marginRight: 16 }}></Button>
        <Button>删除</Button>
      </div>
      <div style={{ marginTop: 20 }}>
        <GoTable rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default Perfecting