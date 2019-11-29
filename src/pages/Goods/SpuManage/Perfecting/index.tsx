import React from 'react'
import { Button, Table } from 'antd'

const columns = [
  {
    title: 'SPU名称',
    dataIndex: 'name',
    render: (text:any) => <a>{text}</a>,
  },
  {
    title: '商品名称',
    dataIndex: 'age',
  },
  {
    title: '商品类型',
    dataIndex: 'type',
  },
  {
    title: '商品品牌',
    dataIndex: 'kind',
  },
  {
    title: '添加时间',
    dataIndex: 'time',
  },
  {
    title: '操作',
    dataIndex: 'action',
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
      <div>
        <Button style={{ marginRight: 16 }}>批量操作</Button>
        <Button icon="dash" style={{ marginRight: 16 }}></Button>
        <Button>删除</Button>
      </div>
      <div style={{ marginTop: 20 }}>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default Perfecting